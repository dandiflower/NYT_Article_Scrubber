const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/scrape")
  .get(articleController.scraper)

// Matches with "/api/books"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
