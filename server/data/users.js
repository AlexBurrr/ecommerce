import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true
	},
	{
		name: "user 2",
		email: "u2@example.com",
		password: bcrypt.hashSync("123456", 10)
	},
	{
		name: "User 3",
		email: "u3@example.com",
		password: bcrypt.hashSync("123456", 10)
	}
];

export default users;
