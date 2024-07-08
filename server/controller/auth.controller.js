const home = async (req, res) => {
    try {
        return res.status(200).json({msg: "Welcome to this site!"})
    } catch (err) {
        console.log("Some error occured while serving home route: ", err)
        return res.status(400).json({msg: "Server error: home route"})
    }
}

const signup = async (req, res) => {
    const { username, firstName, lastName, email, address, password, confirmPassword, phone } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const newUser = new User({
            username,
            firstName,
            lastName,
            email,
            address: {
                street: address.street,
                city: address.city,
                state: address.state,
                postalCode: address.postalCode
            },
            password,
            phone
        });

        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, 'your_jwt_secret_key', { expiresIn: '1h' });

        res.status(201).json({ user: savedUser, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {home, signup}