import user from '../models/user.js'
import { isAdmin } from './admin.js'
import bcrypt from "bcrypt"

/*
NOTE: 
-> use newUser.generateHash(newUser.password) to encrypt the user password
    This function returns the encrypted password
-> use newUser.validPassword(req.body.password) to validate user password
    This function return either true or false
*/

export const createUser = async (req, res) => {
    const us = req.body;
    const newUser = user(us);
    newUser.password = newUser.generateHash(us.password)

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// export const updateUser = async (req, res)=>{
//     console.log("update user function")    
//     const us = req.body;
//     const id = us._id
//     var query = {'_id': id};
//     const newUser = user(us);
//     newUser.password = newUser.generateHash(us.password)
//     try{
//         await user.findOneAndUpdate(query, newUser, {upsert : true});
//         res.status(201).json(newUser);
//     } catch(err){
//         res.status(409).json({message: err.message});
//     }
// }


// new code start mahbub ==================

export const updateUser = async (req, res) => {
    console.log("update user function")
    const us = req.body;
    const id = us._id
    var query = { '_id': id };
    if (us.password) {

        const data = bcrypt.compareSync(us.currentUserPassword, us.currentPassword);
        console.log(data)
        if (data) {
            const newUser = user(us);
            newUser.password = newUser.generateHash(us.password)
            try {
                await user.findOneAndUpdate(query, newUser, { upsert: true });
                res.status(201).json(newUser);
            } catch (err) {
                res.status(409).json({ message: err.message });
            }
        }
        else{
            res.status(409).json({ message: 'your password not Match' });
        }

    }
    else {
        const newUser = user(us);
        try {
            await user.findOneAndUpdate(query, newUser, { upsert: true });
            res.status(201).json(newUser);
        } catch (err) {
            res.status(409).json({ message: err.message });
        }
    }
}

// new code end mahbub ============================

export const getUsers = async (req, res) => {
    try {
        const allUser = await user.find();
        res.status(200).json(allUser);
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const loginUser = async (req, res) => {
    // console.log(res.body);
    if ('username' in req.body) {
        if (await isAdmin(req.body)) {
            res.status(200).json({ message: "admin logged in" });
        }
        else {
            res.status(404).json({ message: "admin not found" });
        }
    }
    else {
        user.findOne({ email: req.body.email }, (err, us) => {
            if (us) {
                if (!us.validPassword(req.body.password)) {
                    res.status(404).json({ message: "failed" });
                } else {
                    res.status(200).json({ message: "success", user: us });
                }
            }
            else {
                res.status(404).json({ message: "failed" });
            }
        });
    }
}
export const getUser = async (req, res) => {
    const id = req.body.id;
    console.log("getting single user", id)
    try {
        const us = await user.findById(id);
        res.status(200).json(us);
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.body._id;
    console.log(id)
    try {
        await user.findOneAndUpdate({ _id: id }, { isDeleted: true }, { upsert: true });
        res.status(201).json({ message: "success" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}
