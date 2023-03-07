const router = require("express").Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const usersRoutes = require("./usersRoutes");

router.use("/users", usersRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;
