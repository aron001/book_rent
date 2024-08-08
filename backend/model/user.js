const mongoose= require('mongoose')

const userSchema = mongoose.Schema({
   
    email: {
        type:String,
        required:[true, 'please add an email'],
        unique:true
    },
    password: {
        type:String,
        min:4,
        max:255,
        required:[true, 'please add a password']
    },
    role: {
        type:Number,
        default:0,
       
    },
    location: {
        type: String,
        required:[false, 'please add a location']
      },
    phone: {
        type: String,
        required:[false, 'please add a phone']

    }
},
{
    timestamps:true
})
module.exports=mongoose.model('User',userSchema)