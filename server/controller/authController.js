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

export const changePassword = async (req, res, next) => {
  try {
    const { userId, email, oldpassword, newpassword } = req.body;
    

    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await compareString(oldpassword, user?.password);

  
    if (!isMatch) {
       res.json({ message: "Old password is incorrect" });
       return
    }

    // Change password
    const hashedPassword = await hashString(newpassword);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req,res)=>{
  try {
    console.log("hi")
    res.json({"msg":"update noy profile successfily"})
  } catch (error) {
    console.log(error)
    res.json({msg :"update noy profile successfily"})
  }
}
