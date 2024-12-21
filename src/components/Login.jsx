import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { login } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      alert("Đăng nhập thành công");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="login-container"
    >
      <motion.div variants={containerVariants} className="login-form">
        <motion.h2 variants={itemVariants}>Đăng Nhập</motion.h2>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="error-message"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit}>
          <motion.input
            variants={itemVariants}
            whileFocus={{
              scale: 1.05,
              borderColor: "#4CAF50",
            }}
            whileHover={{
              scale: 1.02,
            }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.input
            variants={itemVariants}
            whileFocus={{
              scale: 1.05,
              borderColor: "#4CAF50",
            }}
            whileHover={{
              scale: 1.02,
            }}
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#45a049",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Đăng Nhập
          </motion.button>

          <motion.div variants={itemVariants} className="login-links">
            <Link to="/register">Đăng Ký</Link>
            <Link to="/forgot-password">Quên Mật Khẩu</Link>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Login;
