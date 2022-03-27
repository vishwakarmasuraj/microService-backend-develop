import {Schema, model} from 'mongoose';

const userSchema = new Schema ({
    firstName: {
        type: Schema.Types.String
    },
    lastName: {
        type: Schema.Types.String
    },
    email: {
        type: Schema.Types.String
    },
    password: {
        type: Schema.Types.String
    },
    resetPasswordToken: {
        type: Schema.Types.String
    },
    userType: {
        type: Schema.Types.String,
        enum: ['employee', 'superAdmin'],
        default: 'employee'
    }
}, {timestamps: true})

module.exports = model('User', userSchema, 'User')