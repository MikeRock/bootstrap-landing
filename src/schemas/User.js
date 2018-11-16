import mongoose, {Schema, Types} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const user = new Schema({
    id: Types.ObjectId,
    username: String,
    password: String,
    token: String
})

user.methods.verifyPassword = (password,cb) => {  
 if(!this.password) cb(null, false)   
bcrypt.compare(password, this.password, (err, same) => {
if(err) cb(err, false)
else cb(null,same)
})
}
user.methods.verifyToken = (token, cb) => {
let decoded = jwt.verify(token,process.env.TOKEN_SECRET)
 cb(null, decoded ? decoded : false)

}

export default mongoose.model('user',user,'users')