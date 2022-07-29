import mongoose from "mongoose";
// import bcrypt from "bcrypt"
const userSchema = mongoose.Schema({
    id: String,
    name : String,
    password : String,
    // email : {
    //     type: String,
    //     unique: true,
    //     match: /.+\@.+\..+/
    // },
    phoneENDemail : String,
    nationality : String,
    address: String,
    isDeleted : {
        type: Boolean,
        default: false
    },
});

// hash the password
// userSchema.method({
//     // Generate Hash of the password
//     generateHash (password)  {
//         return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//       },
//     // Compare Hash of the password
//     validPassword (password)  {
//         return bcrypt.compareSync(password, this.password);
//       }
// });

const user = mongoose.model("user", userSchema);
export default user;