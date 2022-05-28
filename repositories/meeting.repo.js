const User = require('../models/user.model')

module.exports = {

    ADD_MEETING: async function (payload) {

        try {

            // const [_status, userExists] = await this.CHECK_USERNAME_EXISTS(payload.username)

            // if (!_status || userExists) return [false, "User with username already exists"]

            // await new User(payload).save()

            // return [true, "User added successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },
}