import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema(
    {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: [true ,"password is required"]},
    role:{
      type: String ,
      enum:["user","admin"],
      default: "user"
    }
  },
  { timestamps: true });

  //Hash password before saving
  userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
  })
export default mongoose.model("User", userSchema);