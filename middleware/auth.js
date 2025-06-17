import jwt from 'jsonwebtoken';

export async function authenticateUser(req, res, next) {
    
    try{
        
        const authHeaders = req.headers.authorization;
        if(!authHeaders || !authHeaders.startsWith('Bearer ')){
            return res.status(401).json({message: "Unauthorized! no token provided"})
        }

        const token = authHeaders.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
       
        req.user = decoded;
        next()
    }
    catch(err) {
        res.status(401).json({error:err.message})
    }
    
}

export async function authorizeAdmin(req, res, next){
    console.log(req.user.role)
    if(req.user.role !== "admin"){
        return res.status(403).json({message: "Unauthorized access"})
    }
    next();
}