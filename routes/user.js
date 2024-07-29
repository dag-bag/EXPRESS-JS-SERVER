const express = require("express");
const router = express.Router()
const {handleGetAllUsers,create_user} = require(".././controllers/user")
router.get("/", handleGetAllUsers);
router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    res.send(user);
  })
  .delete((req, res) => {
    const id = req.params;
    users = users.filter((user) => user.id !== id);
    fs.writeFile("user.json", users, (error, data) => {
      if (error) return res.send({ status: 500 });
      return res.send({
        status: 200,
      });
    });
  });
router.post("/", create_user);

module.exports = router