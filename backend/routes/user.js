const express = require("express");
const {
  handleGetAllUsers,
  handleGetUsersById,
  handleAddUsers,
  handleGetUpdateUsersById,
  handleGetDeleteUsersById,
  handleGetSingleUser,
} = require("../controllers/user");
const ensureAuthenticated = require("../middleware/auth");

const router = express.Router();

// get all users list
router.get("/", ensureAuthenticated, handleGetAllUsers);

// get single users
router.get("/", handleGetSingleUser);

// add users using post method
router.post("/", handleAddUsers);

router.get("/:id", handleGetUsersById);

// update users of id 1
router.patch("/:id", handleGetUpdateUsersById);

// get delete users of id 1
router.delete("/:id", handleGetDeleteUsersById);

module.exports = router;
