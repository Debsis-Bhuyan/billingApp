import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({ error: "Unauthorized - Missing token" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Missing token" });
    }


    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }
    console.error(error);
    res.status(500).json({ error: "Authentication failed" });
  }
};

export default authenticateUser;
