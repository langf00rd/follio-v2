const User = require('../models/user.model')

module.exports = {

    ADD_USER: async function (payload) {

        try {

            const [_status, userExists] = await this.CHECK_USERNAME_EXISTS(payload.username)

            if (!_status || userExists) return [false, "User with username already exists"]

            await new User(payload).save()

            return [true, "User added successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    UPDATE_USER: async function (payload) {

        try {

            const { email } = payload

            await User.findOneAndUpdate({ email }, payload)

            return [true, "User updated successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_USER: async function (email) {

        try {

            let user = await User.findOne({ email })

            if (!user) return [false, "User not found"]

            return [true, user]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_ALL_USERS: async function () {

        try {

            let users = await User.find({})

            if (!users) return [false, "No users found"]

            return [true, users]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_USER_BY_USERNAME: async function (username) {

        try {

            let user = await User.findOne({ username })

            console.log("🚗 ", user)

            if (!user) return [false, "User not found"]

            return [true, user]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    CHECK_USERNAME_EXISTS: async function (username) {

        try {

            const _user = await User.findOne({ username })

            if (!_user) return [true, false]

            return [true, _user.username === username]
        }

        catch (e) {

            return [false, e.message]
        }
    },
}