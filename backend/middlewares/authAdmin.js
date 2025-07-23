import jwt from 'jsonwebtoken'

const authAdmin=(req,res,next)=>{

    try{

        const {atoken}=req.headers

        if(!atoken){
            return res.json({message: "No token provided",success:false})
        }

        const tokenDecode=jwt.verify(atoken, process.env.JWT_SECRET)

        if(tokenDecode !==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({message:"Invalid Credentials"})
        }

        next()

    }catch(err){

        console.log(error)
        res.status(400).json({message: error.message})

    }

}

export default authAdmin;