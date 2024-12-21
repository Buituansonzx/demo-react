import React, { useState } from "react";
import { resetPassword } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email, newPassword);
      alert("Đặt lại mật khẩu thành công");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Quên Mật Khẩu</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Đặt Lại Mật Khẩu</button>
          <div className="forgot-password-links">
            <Link to="/login">Quay lại Đăng Nhập</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
