const User = require('../schemas/userSchema');
const auth = require('../authentication/auth');
const bcrypt = require('bcryptjs');


// Register User
exports.addUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
    
        if(!firstName || !lastName || !password) {
            return res.status(400).json({ message: "You need to fill up all the fields to signup."})
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
    
        const user = await new User({ firstName, lastName, email, password: hashPassword}).save()
        res.status(201).json("Token: " + auth.generateToken(user))
        
    } catch (error) {
        res.status(500).json({ message: "Oh snap! registration failed!"})
    }
}



// User login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({ message: "You need to fill up all the fields."})
        }

        const user = await User.findOne({ email })

        if(!user){
            return res.status(401).json({ message: "User does not exists."})
        }

        const verifyUser = await bcrypt.compare(password, user.password)
        if(!verifyUser){
            return res.status(401).json({ message: "Wrong Credentials."})
        }

        res.status(200).json("Token: " + auth.generateToken(user))

    } catch (error) {
        res.status(401).json({ message: "User does not exists."})
    }

}

