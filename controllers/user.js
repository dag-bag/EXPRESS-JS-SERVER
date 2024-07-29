const User = require(".././models/user")
const handleGetAllUsers = async (req,res) =>{
 const users = await User.find({})
 res.send(users)
}
const create_user =async (req,res) =>{
	const user =  await User.create(req.body)
	res.send(req.body)
}

module.exports = {
	handleGetAllUsers,create_user
}