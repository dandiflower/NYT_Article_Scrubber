const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  scraper: function(req, res) {
  
    // A GET route for scraping the website
    app.get("/scrape", function (req, res) {
      // First, we grab the body of the html with request
      axios.get("https://www.nytimes.com/?action=click&pgtype=Homepage&module=MastheadLogo&region=TopBar&WT.z_jog=1&hF=t&vS=undefined").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every tag, and do the following:
        $("article").each(function (i, element) {


          // Save an empty result object
          var result = {};

          // Add the text and href of every link, and save them as properties of the result object
          result.title = $(element)
            .children("a")
            .text();
          result.date = $(element)
            .children("time")
            .text();
          result.url = $(element)
            .children("a")
            .attr("href");


          console.log("========================================");
          console.log(result);

          })



        })
      })
    
              // Create a new Article using the `result` object built from scraping

    db.Article.create(result)
      .then(function (dbArticle) {
        // View the added result in the console
        console.log(dbArticle);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        return res.json(err);
      })


// If we were able to successfully scrape and save an Article, send a message to the client
    res.send("Scrape Complete");
  }
}