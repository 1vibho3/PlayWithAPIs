import jwt from 'jsonwebtoken';

export async function authenticateUser(req, res, next) {
    
    try{
        
        const authHeaders = req.headers.authorization;
        console.log(authHeaders);
        if(!authHeaders || !authHeaders.startsWith('Bearer ')){
            return res.status(401).json({message: "Unauthorized! no token provided"})
        }

        const token = authHeaders.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.email;
        next()
    }
    catch(err) {
        res.status(401).json({error:err.message})
    }
    
}