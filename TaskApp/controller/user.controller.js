import User from "../model/user.model.js";
export const createUser=async (req , res )=>{
    try {
        const {name ,  email , password} = req.body;
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({
                message:"User Already exists"
            })
        }
        const user  = new User({
            name : name,
            email : email,
            password : password
        })

       const savedUser =  await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
     res.status(500).json({message: error.message})
    }
}

