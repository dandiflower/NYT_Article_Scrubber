const router = require("express").Router();
const articleRoutes = require("./Article");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
