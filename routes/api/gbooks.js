const router = require("express").Router();
const gBooksController = require("../../controllers/gBooksController");

// Matches with "/api/gbooks"
router
  .route("/")
  .get(gBooksController.findAll);

module.exports = router;
