const express = require("express");
const router = express.Router();
const cors = require("cors");

const corsOptions = {
    origin: 'https://apex-investment.vercel.app', 
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  };

  //http://localhost:5173
  
  router.use(cors(corsOptions));
  router.options('*', cors(corsOptions)); 

const { test, Delete, Decline, getMail, sendMail, Approve, loginUser, createUser, deleteChat, getMessage, loginAdmin, chatSend, getUser, getUsers, addBalance , withdrawBank, getAdminChat, getAccountLevel, withdrawCrypto, AdminGetCrypto, AdminGetBankR, upgradeAccount, getBankRecords, getNotification, getCryptoRecords, notificationAdder, userNotification} = require("../controllers/authController");

router.get('/test', test);
router.post("/Delete", Delete);
router.post("/Approve", Approve);
router.get("/getMails", getMail);
router.post("/Decline", Decline);
router.post("/sendMail", sendMail);
router.post("/getUser", getUser);
router.get("/getUsers", getUsers);
router.post('/login', loginUser);
router.post("/chatSend", chatSend);
router.post('/register', createUser);
router.post('/adminAuth', loginAdmin);
router.post('/addBalance', addBalance);
router.post("/deleteChat", deleteChat);
router.post("/getMessage", getMessage);
router.post("/getAdminChat", getAdminChat);
router.post("/withdrawBank", withdrawBank);
router.post("/AdminGetBankR", AdminGetBankR);
router.post("/upgradeAccount", upgradeAccount);
router.post("/AdminGetCrypto", AdminGetCrypto);
router.post("/withdrawCrypto", withdrawCrypto);
router.post("/getBankRecords", getBankRecords);
router.post("/userMessage", notificationAdder);
router.post("/getAccountLevel", getAccountLevel);
router.post("/getNotification", getNotification);
router.post("/userNotification", userNotification);
router.post("/getCryptoRecords", getCryptoRecords);


module.exports = router;
