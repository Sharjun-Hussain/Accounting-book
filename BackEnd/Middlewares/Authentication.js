exports.authentication = (req,res,next) =>{
const token = req.headers.cookie
  if(!token){
    return res.status(401).json({
      message: "Authentication Failed"
    })
  }
  next()
  jwt.verify(token, process.env.JWT_SECRET, (err,decodedToken) => {
    if(err){
      return res.status(401).json({
        message: "Authentication Failed"
      })
    }
    req.id = decodedToken
    next()
  })
  

}

