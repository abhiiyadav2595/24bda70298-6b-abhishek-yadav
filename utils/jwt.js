import jwt from "jsonwebtoken";

export const getJwtSecret = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing");
  }
  return process.env.JWT_SECRET;
};

export const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    getJwtSecret(),
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
};