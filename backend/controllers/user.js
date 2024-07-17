const User = require("../models/user");

// get all users
async function handleGetAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Server error");
  }
}

// get a single user
async function handleGetUsersById(req, res) {
  const user = await User.findById(req.params.id);
  return res.json(user);
}

// redirect add user screen
async function handleGetSingleUser(req, res) {
  return res.json(res);
  // return res.render("pages/add");
}

// Create a new user
async function handleAddUsers(req, res) {
  try {
    const body = req.body;
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log("Server error", error);
    // res.status(500).send("Server error", error.errmsg);
  }
}

// update a user
async function handleGetUpdateUsersById(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, {
    lastName: "gullu",
  });
  return res.json(user);
}

// delete a user
async function handleGetDeleteUsersById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "user delete" });
}

module.exports = {
  handleGetAllUsers,
  handleGetSingleUser,
  handleGetUsersById,
  handleAddUsers,
  handleGetUpdateUsersById,
  handleGetDeleteUsersById,
};
