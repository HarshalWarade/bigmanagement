const home = async (req, res) => {
    try {
        return res.status(200).json({msg: "Welcome to this site!"})
    } catch (err) {
        console.log("Some error occured while serving home route: ", err)
        return res.status(400).json({msg: "Server error: home route"})
    }
}

const signup = async (req, res) => {
    try {
        const {}        
    } catch (err) {
        console.log("Some error occured while serving signup route: ", err)
        return res.status(400).json({msg: "Server error: signup route"})
    }
}

module.exports = {home, signup}