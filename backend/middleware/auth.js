const jwt = require('jsonwebtoken')

  const verifytoken = async ( req, res, next ) => {
  try{
    let token = req.header('Authorization')
    console.log("token", token)

    if(!token) {
      return res.status(403).send("Access Denied")
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, 'thiskeyrighthereisthenoteasytoguess');
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error : err })
  }
}

module.exports = verifytoken