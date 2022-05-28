const USER_REPO = require("../repositories/user.repo")

const formatUsername = (name) => {
    return (name.split(/\s+/).join("")).toLocaleLowerCase()
}

module.exports = {

    addUser: async function (req, res) {

        try {

            let { username } = req.body

            req.body.username = formatUsername(username)

            const [status, message] = await USER_REPO.ADD_USER(req.body)

            if (!status) return res.json({ status: status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    updateUser: async function (req, res) {

        try {

            console.log("upadte >> ", req.body)

            const [status, message] = await USER_REPO.UPDATE_USER(req.body)

            if (!status) return res.json({ status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getUser: async function (req, res) {

        try {

            const [status, payload] = await USER_REPO.GET_USER(req.params.email)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getAllUsers: async function (req, res) {

        try {

            const [status, payload] = await USER_REPO.GET_ALL_USERS()

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getUserByUsername: async function (req, res) {

        try {

            const [status, payload] = await USER_REPO.GET_USER_BY_USERNAME(req.params.username)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    checkUsernameExists: async function (req, res) {

        try {

            const [status, payload] = await USER_REPO.CHECK_USERNAME_EXISTS(req.params.username)

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },
}