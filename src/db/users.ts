import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false},
        sessionToken: {type: String, select: false}
    },
});



//model to be created on the database

export const UserModel = mongoose.model("User", userSchema)

export const getUser = () => UserModel.find()
export const getUserByEmail = (email: string) => UserModel.findOne({email})

//to know if user is logged in
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken
})

export const getUserById = (id: string) => UserModel.findById(id)
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject())

export const deleteUserById = (id: string) => UserModel.findOneAndDelete({_id: id})