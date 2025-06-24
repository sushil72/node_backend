const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve().catch((error) => next(error));
  };
};

export { asyncHandler };

// const asyncHandler =(fn)=>async (req,res,next)=>{
//     try {

//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message || "Internal Server Error",
//         })
//     }
// }
