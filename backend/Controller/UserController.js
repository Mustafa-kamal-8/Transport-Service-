const bcrypt = require('bcrypt');
const User = require('../Model/User');

const register = async (req, res) => {
  try {
    const {
      usertype,
      username,
      email,
      phoneno,
      password
    } = req.body;


    console.log('User Registration Data:');
    console.log('User Type:', usertype);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Phone Number:', phoneno);

    // Hash the user's password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      usertype,
      username,
      email,
      phoneno,
      password: hashedPassword // Store the hashed password
    });
    
    await newUser.save();
    return res.json({ message: 'User registered successfully' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
  
};
    
    
    
const Login = async(req,res) =>{
  try {
    const {     
      email,
      password
    } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, user is authenticated
      return res.json({ message: 'Login successful', usertype:user.usertype });
    } else {
      // Passwords do not match
      return res.json({ message: 'Invalid password', userType:user });
      
    }
    
  } catch (error) {
      console.error(error);
      return res.json({ message: 'Internal server error' });
      
  }
}


module.exports = {register,Login};



