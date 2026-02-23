import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/captcha.css";

const HOURS_48 = 48 * 60 * 60 * 1000;

function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function Captcha() {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const lastVerified = localStorage.getItem("captcha_verified_at");

    if (lastVerified) {
      const diff = Date.now() - parseInt(lastVerified);
      if (diff < HOURS_48) {
        location.href = "/dashboard";
        return;
      }
    }

    refreshCaptcha();
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInput("");
    setError("");
  };

  const handleVerify = () => {
    if (input === captcha) {
      localStorage.setItem("captcha_verified_at", Date.now().toString());
      setVerified(true); // 🔥 Show success UI

      // ⏳ Delay redirect (2 seconds)
      setTimeout(() => {
        location.href = "/dashboard";
      }, 2000);
    } else {
      setError("Incorrect verification code.");
      refreshCaptcha();
    }
  };

  // ✅ Show Success Screen Before Redirect
  if (verified) {
    return (
      <div className="captcha-success">
        <div className="success-icon">✓</div>
        <p>Verification Successful</p>
        <small>Redirecting to dashboard...</small>
      </div>
    );
  }

  return (
    <div className="captcha-container">
      <h4>Security Verification</h4>

      <div className="captcha-box">
        <span className="captcha-text">{captcha}</span>
        <button onClick={refreshCaptcha} className="refresh-btn">
          ↻
        </button>
      </div>

      <input
        type="text"
        style={{ color: "white" }}
        placeholder="Enter verification code"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="captcha-input"
      />

      {error && <p className="captcha-error">{error}</p>}

      <button onClick={handleVerify} className="verify-btn">
        Verify
      </button>
    </div>
  );
}