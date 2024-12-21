import axios from "axios";
import bcrypt from "bcryptjs";

const API_URL = "http://localhost:4000/users";

export const login = async (email, password) => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      return user;
    }

    throw new Error("Invalid credentials");
  } catch (error) {
    throw error;
  }
};

export const register = async (username, email, password, confirmPassword) => {
  try {
    // Validate input
    if (!username || !email || !password || !confirmPassword) {
      throw new Error("All fields are required");
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
    const checkExist = await axios.get(`${API_URL}?email=${email}`);

    if (checkExist.data.length > 0) {
      throw new Error("Email already exists");
    }
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    } else if (confirmPassword !== password) {
      throw new Error("Passwords do not match");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create new user
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    const response = await axios.post(API_URL, newUser);

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const resetPassword = async (email, newPassword) => {
  try {
    const response = await axios.get(`${API_URL}?email=${email}`);

    if (response.data.length === 0) {
      throw new Error("Email not found");
    }

    const user = response.data[0];
    await axios.put(`${API_URL}/${user.id}`, {
      ...user,
      password: newPassword,
    });

    return true;
  } catch (error) {
    throw error;
  }
};
