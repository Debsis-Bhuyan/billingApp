import Users from "../models/userModel.js";
import { compareString, createJWT, hashString } from "../utils/index.js";

export const register = async (req, res, next) => {
  const { fullName, email, password, profileUrl } = req.body;

  //validate fileds
  if (!(fullName || email || password, profileUrl)) {
    next("Provide Required Fields!");
    return;
  }

  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      next("Email Address already exists");
      return;
    }

    const hashedPassword = await hashString(password);

    const user = await Users.create({
      fullName,
      email,
      password: hashedPassword,
      profileUrl,
    });
    const token = createJWT(user?._id);
    //send email verification to user
    // sendVerificationEmail(user, res);

    res.status(201).json({
      success: true,
      message: "SignUp successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      next("Please Provide User Credentials");
      return;
    }

    // find user by email
    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      next("Invalid email or password");
      return;
    }

    // if (!user?.verified) {
    //   next(
    //     "User email is not verified. Check your email account and verify your email"
    //   );
    //   return;
    // }

    // compare password
    const isMatch = await compareString(password, user?.password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

    user.password = undefined;

    const token = createJWT(user?._id);

    res.status(201).json({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};