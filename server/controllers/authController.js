const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const bankModel = require("../models/bankModel");
const chatModel = require("../models/chatModel");
const mailModel = require("../models/customMailer");
const cryptoModel = require("../models/cryptoModel");
const adminMessage = require("../models/adminMessage");
const accountUpgradeModel = require("../models/accountLevel");
const { hashPassword, comparePassword } = require("../helpers/auth");

const nodemailer = require("nodemailer");

const mongoose = require("mongoose");

const sendMail = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required!" });
    }
    if (!message) {
      return res.status(400).json({ error: "Message is required!" });
    }

    const subject = "✅ Withdrawal Request Processed Successfully";

    // ─── Send Email ────────────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${email}`);

    // ─── Update or Insert Mail Record ─────────────────────────────────────────
    await mailModel.updateOne(
      { sender: "support@apex-investment.com", recipient: email },  // filter
      {
        $set: {
          subject,
          text: message,
          timestamp: new Date(),
        }
      },
      { upsert: true }
    );

    return res.json({ success: "Email sent and record updated successfully!" });
  } catch (error) {
    console.error("❌ sendMail error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getMail = async (req, res) => {
  try {
    const mails = await mailModel.find({});  // Fetch all mails

    return res.json(mails);  // Return the entire mail documents
  } catch (error) {
    console.error("Error fetching mails:", error);
    return res.status(500).json({
      error: "Failed to retrieve mails"
    });
  }
};

const getAccountLevel = async (req, res) => {
      const {ID} = req.body;
      const ifExist = await accountUpgradeModel.findOne({userID: ID});

      if(ifExist){
        return res.json({
          Level: ifExist
        })
      }

}

const upgradeAccount = async (req, res) => {
  try {
    const { ID, ULevel } = req.body;

    if (!mongoose.Types.ObjectId.isValid(ID)) {
      return res.json({ error: "Invalid user ID format" });
    }

    const checkUser = await User.findById(ID);
    if (!checkUser) {
      return res.status(404).json({ error: "User ID not found" });
    }

    const ifExist = await accountUpgradeModel.findOne({ userID: ID });

    if (!ifExist) {

      await accountUpgradeModel.create({
        userID: ID,
        accountLevel: ULevel,
      });

      return res.json({
        success: `User ${ID} has been upgraded to ${ULevel}`,
      });
    }

    if (ifExist.accountLevel === ULevel) {
      return res.json({
        error: `User account is already at ${ifExist.accountLevel}`,
      });
    }

    await accountUpgradeModel.updateOne({ userID: ID }, { $set: { accountLevel: ULevel } });

    return res.json({
      success: `User ${ID} has been upgraded to ${ULevel}`,
    });
  } catch (error) {
    console.error("Error upgrading account:", error);
    return res.json({ error: "Internal server error" });
  }
};

const getMessage = async (req, res) => {
  const { ID } = req.body;

  const getNoti = await adminMessage.findOne({ userID: ID });

  if (getNoti) {
    return res.json(getNoti)
  }

  return res.json({ data: "No data" });
}

const getNotification = async (req, res) => {
  const { ID } = req.body;
  const getNoti = await adminMessage.findOne({ userID: ID });

  if (getNoti) {
    return res.json(getNoti)
  }

  return res.json({ data: "No data" });
}

const Delete = async (req, res) => {
  const { isDelete } = req.body;

  const checkBank = await bankModel.findOne({ _id: isDelete });
  const checkCrypto = await cryptoModel.findOne({ _id: isDelete });

  if (checkBank) {
    await bankModel.deleteOne({ _id: isDelete })
    return res.json({
      success: "Transaction Deleted Successfully!"
    })
  }

  if (checkCrypto) {
    await cryptoModel.deleteOne({ _id: isDelete });
    return res.json({
      success: "Transaction Deleted Successfully!"
    })
  }

  return res.json({
    error: "Unidentify transaction ID"
  })

}

const Approve = async (req, res) => {
  const { isApprove } = req.body;

  const checkBank = await bankModel.findOne({ _id: isApprove });
  const checkCrypto = await cryptoModel.findOne({ _id: isApprove });

  if (checkBank) {
    await bankModel.updateOne({ _id: isApprove }, { $set: { status: "Approved" } });
    return res.json({
      success: "Transaction approved Successfully!"
    })
  }

  if (checkCrypto) {
    await cryptoModel.updateOne({ _id: isApprove }, { $set: { status: "Approved" } });
    return res.json({
      success: "Transaction Approved Successfully!"
    })
  }

  return res.json({
    error: "Unidentify transaction ID"
  })

}

const Decline = async (req, res) => {
  const { isDecline } = req.body;

  const checkBank = await bankModel.findOne({ _id: isDecline });
  const checkCrypto = await cryptoModel.findOne({ _id: isDecline });

  if (checkBank) {
    await bankModel.updateOne({ _id: isDecline }, { $set: { status: "Declined" } });
    return res.json({
      success: "Transaction Declined Successfully!"
    })
  }

  if (checkCrypto) {
    await cryptoModel.updateOne({ _id: isDecline }, { $set: { status: "Declined" } });
    return res.json({
      success: "Transaction Declined Successfully!"
    })
  }

  return res.json({
    error: "Unidentify transaction ID"
  })

}

const userNotification = async (req, res) => {
  const { id, value } = req.body;
  if (!id) {
    return res.json({
      error: "userID and notification field is required! to send Message"
    })
  }

  if (!value) {
    return res.json({
      error: "userID and notification field is required! to send Message"
    })
  }

  check01 = await adminMessage.findOne({ userID: id });
  if (check01) {
    await adminMessage.updateOne({ userID: id }, { $set: { notification: value } });
    return res.json({
      success: "Notification sent"
    })
  }

  await adminMessage.create({
    userID: id,
    notification: value,
  })

  return res.json({
    success: "Notification sent"
  })
}

const notificationAdder = async (req, res) => {
  const { id, value } = req.body;

  if (!id) {
    return res.json({
      error: "userID and message field is required! to send Message"
    })
  }

  if (!value) {
    return res.json({
      error: "userID and message field is required! to send Message"
    })
  }

  check01 = await adminMessage.findOne({ userID: id });
  if (check01) {
    await adminMessage.updateOne({ userID: id }, { $set: { submitMessage: value } });
    return res.json({
      success: "message sent"
    })
  }

  await adminMessage.create({
    userID: id,
    submitMessage: value,
  })

  return res.json({
    success: "message sent"
  })
}

const deleteChat = async (req, res) => {
  const { id } = req.body;
  const deleted = await chatModel.deleteOne({ _id: id });
  if (deleted) {
    return res.json({
      success: "Chat Deleted"
    })
  }
}

const chatSend = async (req, res) => {
  const { value, from, email } = req.body;

  if (!value) {
    return res.json({
      error: "Message field is required"
    })
  }

  if (!from) {
    return res.json({
      error: "unidentified User"
    })
  }

  if (!email) {
    return res.json({
      error: "Email Not Found"
    })
  }
  const createNewChat = await chatModel.create({
    from: from,
    email: email,
    message: value,
    tmp_stp: new Date()
  })

  if (createNewChat) {
    const chat = await chatModel.find({ email: email });
    return res.json({
      chat: chat
    })
  }
}

const getAdminChat = async (req, res) => {
  const { email } = req.body;

  const getChat = await chatModel.find({ email: email });
  if (getChat) {
    return res.json({
      chat: getChat
    });
  }

  res.json({
    message: "No Chat Available"
  })
}

const AdminGetCrypto = async (req, res) => {
  const { email } = req.body;
  const ifAdmin = await Admin.findOne({ email: email });
  if (ifAdmin) {
    const bankR = await cryptoModel.find();
    return res.json(bankR)
  }

  return res.json({
    error: "Unidentify Admin 404"
  })
}

const AdminGetBankR = async (req, res) => {
  const { email } = req.body;

  const ifAdmin = await Admin.findOne({ email: email });
  if (ifAdmin) {
    const bankR = await bankModel.find();
    return res.json(bankR)
  }

  return res.json({
    error: "Unidentify Admin 404"
  })
}

const getCryptoRecords = async (req, res) => {
  const { email } = req.body;
  const find = await cryptoModel.find({ email: email });

  if (find) {
    return res.json(find)
  }

  return res.json({});
}

const getBankRecords = async (req, res) => {
  const { email } = req.body;

  const find = await bankModel.find({ email: email });

  if (find) {
    return res.json(find)
  }

  return res.json({});
}

const getUser = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.json({
      error: "unidentyfied user",
    });
  }
  return res.json(user);
};

// const withdrawCrypto = async (req, res) => {
//   const { email, value, walletAddress } = req.body;

//   if (!value || value <= 10) {
//     return res.json({
//       error: "Amount must be provided and must be greater than 10",
//     });
//   }

//   if (!walletAddress) {
//     return res.json({
//       error: "A valid wallet address is required",
//     });
//   }

//   const findUser = await User.findOne({ email: email });
//   if (!findUser) {
//     return res.status(404).json({
//       error: "Invalid request, Unidentify user",
//     });
//   }

//     // ✅ Reusable mail sender
//     const sendEmail = async (email, subject, text) => {
//       try {
//         const transporter = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//           },
//         });
  
//         const mailOptions = {
//           from: process.env.EMAIL_USER,
//           to: email,
//           subject,
//           text,
//         };
  
//         await transporter.sendMail(mailOptions);
//         console.log(`📧 Email sent to ${email}`);
//       } catch (error) {
//         console.error("❌ Email sending failed:", error);
//       }
//     };

//   if (findUser.deposit >= value) {
//     await cryptoModel.create({
//       amount: value,
//       email: email,
//       cryptoAddress: walletAddress,
//       reg_date: new Date(),
//     });

//     await User.updateOne({ email: email }, { $inc: { deposit: -value } });
//     sendEmail(email, "✅ Withdrawal Confirmed!", `Hi ${email},\n\n🎉 Your Withdral of $${value} has been sent successfully Thank you for trusting Anon-Stake-Verse user \n\n🚀 Anon-Stake-Verse user`)
//     return res.json({
//       success: "withdrawal request sent",
//     });
//   }

//   if (findUser.profit >= value) {
//     await cryptoModel.create({
//       amount: value,
//       cryptoAddress: walletAddress,
//       email: email,
//       reg_date: new Date(),
//     });

//     await User.updateOne({ email: email }, { $inc: { profit: -value } });
//     return res.json({
//       success: "withdrawal request sent",
//     });
//   }

//   if (findUser.bonuse >= value) {
//     await cryptoModel.create({
//       amount: value,
//       cryptoAddress: walletAddress,
//       email: email,
//       reg_date: new Date(),
//     });

//     await User.updateOne({ email: email }, { $inc: { bonuse: -value } });
//     return res.json({
//       success: "withdrawal request sent",
//     });
//   }

//   if (findUser.deposit <= value) {
//     return res.json({
//       error: "Insufficient Balance!",
//     });
//   }

//   if (findUser.profit <= value) {
//     return res.json({
//       error: "Insufficient Balance!",
//     });
//   }

//   if (findUser.bonuse <= value) {
//     return res.json({
//       error: "Insufficient Balance!",
//     });
//   }
// };

const withdrawCrypto = async (req, res) => {
  const { email, value, walletAddress } = req.body;

  // Validate the provided amount
  if (!value || value <= 10) {
    return res.json({
      error: "Amount must be provided and must be greater than 10",
    });
  }

  // Validate wallet address
  if (!walletAddress) {
    return res.json({
      error: "A valid wallet address is required",
    });
  }

  // Find the user by email
  const findUser = await User.findOne({ email });
  if (!findUser) {
    return res.status(404).json({
      error: "Invalid request, Unidentified user",
    });
  }

  // ✅ Reusable mail sender
  const sendEmail = async (email, subject, text) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text,
      };

      await transporter.sendMail(mailOptions);
      console.log(`📧 Email sent to ${email}`);
    } catch (error) {
      console.error("❌ Email sending failed:", error);
    }
  };

  // Helper function to process withdrawal
  const processWithdrawal = async (field, amount) => {
    if (findUser[field] >= amount) {
      await cryptoModel.create({
        amount,
        email,
        cryptoAddress: walletAddress,
        reg_date: new Date(),
      });

      await User.updateOne({ email }, { $inc: { [field]: -amount } });

      // Send email notification
      const subject = "✅ Withdrawal Request Processed Successfully";
      const text = `Dear ${email},\n\nWe are pleased to inform you that your withdrawal request of **$${amount}** from your **${field}** balance has been successfully processed.\n\nYour withdrawal is now on its way to the provided wallet address: ${walletAddress}.\n\nThank you for your trust in Anon-Stake-Verse. Should you have any questions or require further assistance, feel free to contact our support team.\n\nBest Regards,\n\nThe Anon-Stake-Verse Team 🚀`;

      await sendEmail(email, subject, text);

      return true;
    }
    return false;
  };

  // Attempt withdrawal from different fields (deposit, profit, bonuse)
  const withdrawalFromDeposit = await processWithdrawal('deposit', value);
  if (withdrawalFromDeposit) {
    return res.json({
      success: "Withdrawal request from deposit has been successfully sent.",
    });
  }

  const withdrawalFromProfit = await processWithdrawal('profit', value);
  if (withdrawalFromProfit) {
    return res.json({
      success: "Withdrawal request from profit has been successfully sent.",
    });
  }

  const withdrawalFromBonuse = await processWithdrawal('bonuse', value);
  if (withdrawalFromBonuse) {
    return res.json({
      success: "Withdrawal request from bonus has been successfully sent.",
    });
  }

  // If none of the withdrawals were successful
  return res.json({
    error: "Insufficient Balance! Please check your deposit, profit, or bonus balance.",
  });
};

const withdrawBank = async (req, res) => {
  const { email, value, bank_name, account_name, account_number, swift_code } =
    req.body;

  // Validate input values
  if (!value || value <= 10) {
    return res.json({
      error: "Amount is required and must be greater than 10",
    });
  }

  if (!bank_name) {
    return res.json({
      error: "Bank name must be provided, to sign Withdrawal",
    });
  }

  if (!account_name) {
    return res.json({
      error: "Account Name must be provided, to sign Withdrawal",
    });
  }

  if (!account_number) {
    return res.json({
      error: "Account number must be provided, to sign Withdrawal",
    });
  }

  if (!swift_code) {
    return res.json({
      error: "Swift-Code must be provided, to sign Withdrawal",
    });
  }

  // Find the user by email
  const findUser = await User.findOne({ email });
  if (!findUser) {
    return res.status(404).json({
      error: "Invalid request, Unidentified user",
    });
  }

  // ✅ Reusable mail sender
  const sendEmail = async (email, subject, text) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text,
      };

      await transporter.sendMail(mailOptions);
      console.log(`📧 Email sent to ${email}`);
    } catch (error) {
      console.error("❌ Email sending failed:", error);
    }
  };

  // Helper function to process withdrawal
  const processWithdrawal = async (field, amount, fieldName) => {
    if (findUser[field] >= amount) {
      await bankModel.create({
        amount,
        bank: bank_name,
        name: account_name,
        swiftCode: swift_code,
        email,
        reg_date: new Date(),
      });

      await User.updateOne({ email }, { $inc: { [field]: -amount } });

      // Send email notification
      const subject = "✅ Bank Withdrawal Request Processed Successfully";
      const text = `Dear ${email},\n\nWe are pleased to inform you that your withdrawal request of **$${amount}** from your **${fieldName}** balance has been successfully processed.\n\nYour withdrawal is now being transferred to the provided bank details:\n\nBank: ${bank_name}\nAccount Name: ${account_name}\nAccount Number: ${account_number}\nSwift Code: ${swift_code}\n\nThank you for your trust in Anon-Stake-Verse. Should you have any questions or require further assistance, feel free to contact our support team.\n\nBest Regards,\n\nThe Anon-Stake-Verse Team 🚀`;

      await sendEmail(email, subject, text);

      return true;
    }
    return false;
  };

  // Attempt withdrawal from different fields (deposit, profit, bonuse)
  const withdrawalFromDeposit = await processWithdrawal('deposit', value, 'deposit');
  if (withdrawalFromDeposit) {
    return res.json({
      success: "Withdrawal request from deposit has been successfully sent.",
    });
  }

  const withdrawalFromProfit = await processWithdrawal('profit', value, 'profit');
  if (withdrawalFromProfit) {
    return res.json({
      success: "Withdrawal request from profit has been successfully sent.",
    });
  }

  const withdrawalFromBonuse = await processWithdrawal('bonuse', value, 'bonus');
  if (withdrawalFromBonuse) {
    return res.json({
      success: "Withdrawal request from bonus has been successfully sent.",
    });
  }

  // If none of the withdrawals were successful
  return res.json({
    error: "Insufficient Balance! Please check your deposit, profit, or bonus balance.",
  });
};

// const withdrawBank = async (req, res) => {
//   const { email, value, bank_name, account_name, account_number, swift_code } =
//     req.body;

//   if (!value || value <= 10) {
//     return res.json({
//       error: "Amount is required and must be greater than 10",
//     });
//   }

//   if (!bank_name) {
//     return res.json({
//       error: "Bank name must be provided, to sign Withdrawal",
//     });
//   }

//   if (!account_name) {
//     return res.json({
//       error: "Account Name must be provided, to sign Withdrawal",
//     });
//   }

//   if (!account_number) {
//     return res.json({
//       error: "Account number must be provided, to sign Withdrawal",
//     });
//   }

//   if (!swift_code) {
//     return res.json({
//       error: "Swift-Code must be provided, to sign Withdrawal",
//     });
//   }

//   const findUser = await User.findOne({ email: email });
//   if (!findUser) {
//     return res.status(404).json({
//       error: "Invalid request, Unidentify user",
//     });
//   }

//   console.log(findUser.deposit);
//   if (findUser.deposit >= value) {
//     await bankModel.create({
//       amount: value,
//       bank: bank_name,
//       name: account_name,
//       swiftCode: swift_code,
//       email: email,
//       reg_date: new Date(),
//     });

//     await User.updateOne({ email: email }, { $inc: { deposit: -value } });
//     return res.json({
//       success: "withdrawal request sent",
//     });
//   }

//   if (findUser.profit >= value) {
//     await bankModel.create({
//       amount: value,
//       bank: bank_name,
//       name: account_name,
//       swiftCode: swift_code,
//       email: email,
//       reg_date: new Date(),
//     });

//     await User.updateOne({ email: email }, { $inc: { profit: -value } });
//     return res.json({
//       success: "withdrawal request sent",
//     });
//   }

//   if (findUser.bonuse >= value) {
//     await bankModel.create({
//       amount: value,
//       bank: bank_name,
//       name: account_name,
//       swiftCode: swift_code,
//       email: email,
//       reg_date: new Date(),
//     });

//     await User.updateOne({ email: email }, { $inc: { bonuse: -value } });
//     return res.json({
//       success: "withdrawal request sent",
//     });
//   }

//   if (findUser.deposit <= value) {
//     return res.json({
//       error: "Insufficient Balance!",
//     });
//   }

//   if (findUser.profit <= value) {
//     return res.json({
//       error: "Insufficient Balance!",
//     });
//   }

//   if (findUser.bonuse <= value) {
//     return res.json({
//       error: "Insufficient Balance!",
//     });
//   }
// };

// const addBalance = async (req, res) => {
//   const { id, value, type } = req.body;

//   if (!id) {
//     return res.json({
//       error: "user ID must be provided!",
//     });
//   }

//   if (!value || value < 1) {
//     return res.json({
//       error: "value to be added is needed and must be greater than 0",
//     });
//   }

//   if (type == "deposit") {
//     await User.updateOne({ _id: id }, { $set: { deposit: value } });
//     return res.status(200).json({
//       success: "Deposit Balance Added Successfully!",
//     });
//   }

//   if (type == "bonuse") {
//     await User.updateOne({ _id: id }, { $set: { bonuse: value } });
//     return res.status(200).json({
//       success: "Bonuse Balance Added Successfully!",
//     });
//   }

//   if (type == "profit") {
//     await User.updateOne({ _id: id }, { $set: { profit: value } });
//     return res.status(200).json({
//       success: "Profit Balance Added Successfully!",
//     });
//   }
// };

const addBalance = async (req, res) => {
  const { id, value, type } = req.body;

  // ✅ Validate inputs
  if (!id) {
    return res.status(400).json({ error: "User ID must be provided!" });
  }

  if (!value || value < 1) {
    return res.status(400).json({
      error: "Value must be greater than 0!",
    });
  }

  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).json({ error: "User not found!" });
  }

  // ✅ Reusable mail sender
  const sendEmail = async (email, subject, text) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text,
      };

      await transporter.sendMail(mailOptions);
      console.log(`📧 Email sent to ${email}`);
    } catch (error) {
      console.error("❌ Email sending failed:", error);
    }
  };

  const email = user.email;
  const name = user.name;

  // ✅ Handle balance type
  let newBalance;
  let subject = "";
  let message = "";

  switch (type) {
    case "deposit":
      newBalance = (user.deposit || 0) + value;
      await User.updateOne({ _id: id }, { $set: { deposit: newBalance } });

      subject = "✅ Deposit Confirmed!";
      message = `Hi ${name},\n\n🎉 Your deposit of $${value} has been successfully added to your account.\n\n💼 New Deposit Balance: $${newBalance}\n\nThank you for trusting Anon-Stake-Verse user \n\n🚀 Anon-Stake-Verse user`;
      break;

    case "bonuse":
      newBalance = (user.bonuse || 0) + value;
      await User.updateOne({ _id: id }, { $set: { bonuse: newBalance } });

      subject = "🎁 Bonus Received!";
      message = `Hi ${name},\n\n✨ You've just received a bonus of $${value}!\n\n🎉 New Bonus Balance: $${newBalance}\n\nKeep engaging with Anon-Stake-Verse and enjoy more rewards!\n\n🚀 Anon-Stake-Verse user`;
      break;

    case "profit":
      newBalance = (user.profit || 0) + value;
      await User.updateOne({ _id: id }, { $set: { profit: newBalance } });

      subject = "💹 Profit Credited!";
      message = `Hello ${name},\n\n💰 Profit of $${value} has been credited to your account.\n\n📈 New Profit Balance: $${newBalance}\n\nThank you for being a valued Anon-Stake-Verse user.\n\n🔒 Secure. Fast. Reliable.\n\n🚀 Anon-Stake-Verse user`;
      break;

    default:
      return res.status(400).json({ error: "Invalid balance type!" });
  }

  // ✅ Send confirmation email
  await sendEmail(email, subject, message);

  return res.status(200).json({
    success: `${type.charAt(0).toUpperCase() + type.slice(1)} balance added successfully!`,
  });
};

const getUsers = async (req, res) => {
  const users = await User.find();
  if (User.countDocuments < 1) {
    return res.status(404).json({
      message: "No User Found",
    });
  }

  return res.json(users);
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({
        error: "email is required",
      });
    }

    //Check if password is goood
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be atleast six(6) characters",
      });
    }

    //Check if user exist
    const user = await Admin.findOne({ email });
    const adminCount = await Admin.countDocuments();
    if (!user && adminCount < 1) {
      const hashedPassword = await hashPassword(password);
      await Admin.create({
        name: "Admin",
        email: "example001@gmail.com",
        password: hashedPassword,
        req_date: new Date(),
      });
      return res.json({
        new: "New admin created Contact lordy-popdy for Details!",
      });
    }
    //Check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { name: user.name, email: user.email, id: user._id },
        process.env.JWT_SECRET,
        {},
        (error, token) => {
          if (error) throw error;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      return res.json({
        error:
          "password not match our database, password should be atleast six(6) character",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    //Check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { name: user.name, email: user.email, id: user._id },
        process.env.JWT_SECRET,
        {},
        (error, token) => {
          if (error) throw error;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      return res.json({
        error:
          "password not match our database, password should be atleast six(6) character",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const test = async (req, res) => {
  return res.status(200).json({ message: "Connected Succesfully!" });
};

const createUser = async (req, res) => {
  const {
    name,
    email,
    country,
    currency,
    account,
    password,
    comfirm_password,
  } = req.body;
  try {
    //Check if name was taken
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    //check if email is provided
    if (!email) {
      return res.json({
        error: "email is required!",
      });
    }

    //check if country is provided
    if (!country) {
      return res.json({
        error: "country is required!",
      });
    }

    //check if currency is provided
    if (!currency) {
      return res.json({
        error: "currency is required!",
      });
    }

    //check if country is provided
    if (!account) {
      return res.json({
        error: "account is required!",
      });
    }

    //Check if password is goood
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be atleast six(6) characters",
      });
    }

    //Check comfirmPassword
    if (password !== comfirm_password) {
      return res.json({
        error: "Comfirm password must match password",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is taken",
      });
    }

    // const adminTotalUserUpdate = await Admin.updateOne(
    //   { adminEmail: "bitclubcontract@gmail.com" },
    //   { $inc: { totalUser: 1 } }
    // );

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name: name,
      email: email,
      country: country,
      currency: currency,
      account: account,
      password: hashedPassword,
      req_date: new Date(),
    });

    console.log(user);
    if (user) {
      return res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  Delete,
  getMail,
  Approve,
  getUser,
  sendMail,
  Decline,
  getUsers,
  chatSend,
  deleteChat,
  loginUser,
  getMessage,
  createUser,
  loginAdmin,
  addBalance,
  getAdminChat,
  withdrawBank,
  AdminGetBankR,
  upgradeAccount,
  getAccountLevel,
  getNotification,
  AdminGetCrypto,
  withdrawCrypto,
  getBankRecords,
  getCryptoRecords,
  userNotification,
  notificationAdder,
};
