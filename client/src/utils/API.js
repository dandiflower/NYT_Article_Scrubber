import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/nytreact");
  },
  // Gets the article with the given id
  getArticles: function(id) {
    return axios.get("/api/nytreact/" + id);
  },
  // Deletes the article with the given id
  deleteArticles: function(id) {
    return axios.delete("/api/nytreact/" + id);
  },
  // Saves a article to the database
  saveArticles: function(articleData) {
    return axios.post("/api/nytreact", articleData);
  }
};
