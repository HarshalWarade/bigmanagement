const home = async (req, res) => {
    try {
        return res.status(200).json({msg: "Welcome to this site!"})
    } catch (err) {
        console.log("Some error occured while serving home route: ", err)
        return res.status(400).json({msg: "Server error: home route"})
    }
}

module.exports = {home}