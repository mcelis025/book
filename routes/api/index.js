const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./book");
const gBookRoutes = require("./gbooks");

// Book routes
router.use("/book", bookRoutes);

// Google Routes
router.use("/gbooks", gBookRoutes);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
//   });
  
module.exports = router;
