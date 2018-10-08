import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    coutry: String,
    contact: Number,
    projects: [
        { 
            tag: String,
            media: String,
            client: String,
            completionDate: String
        }
    ],
    about: {
        title: String,
        description: String
    },
    experience: [
        {
            title: String,
            detail: String,
            startedOn: Date,
            endedOn: Date
        }
    ],
    achievements: [
        {
            title:  String,
            description: String,
            date: Date
        }
    ],
    signedIn: { type: Date, Default: Date.now }
})
