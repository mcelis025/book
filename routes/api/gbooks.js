const router = require("express").Router();
const gBooksController = require("../../controllers/gBooksController");

// Matches with "/api/google"
router
  .route("/")
  .get(gBooksController.findAll);

module.exports = router;
