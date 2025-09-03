import User from "../model/user.model.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: "User Already exists",
      });
    }
    const user = new User({
      name: name,
      email: email,
      password: password,
    });
    const access_token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    const refresh_token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    const savedUser = await user.save();
    res.status(201).json({
      user: savedUser,
      access_token,
      refresh_token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(user.password, password);
      if (isMatch) {
        const access_token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_ACCESS_TOKEN_SECRET,
          { expiresIn: "1h" }
        );

        const refresh_token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_REFRESH_TOKEN_SECRET,
          { expiresIn: "1d" }
        );
      }
      return res.status(200).json({
        message: "Logedin successfully ",
        access_token,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const refereshAccessToken=async (req,res)=>{
        const refresh_token = req.cookies.refresh_token;
        const existingUser = await User.findOne({ refresh_token });
        if(refresh_token && existingUser)
        {
            const verified =await jwt.verify(refresh_token,process.env.JWT_REFRESH_TOKEN_SECRET);
            if(verified)
            {
                const newAccessToken=jwt.sign({id:verified.id,email:verified.email,role:verified.role},process.env.JWT_ACCESS_TOKEN_SECRET,{expiresIn:"1h"});
                res.status(200).json({
                    access_token:newAccessToken
                });
            }
        }
} 
