import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SearchCard from "../../components/SearchCard";
import ResultsCard from "../../components/ResultsCard";
import SavedArticlesCard from "../../components/SavedArticlesCard";
import CardHeader from "../../components/CardHeader";



class Articles extends Component {
  state = {
    title: "",
    // date: "",
    url: ""
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ Articles: res.data, title: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar>
          <h1>NEW YORK TIMES ARTICLE SCRUBBER</h1>
          <h4>Search for and annotate articles of interest!</h4>
        </Navbar>

        <CardHeader> Search
          <SearchCard>

          </SearchCard>
        </CardHeader>

        <CardHeader> Results
          <ResultsCard>

          </ResultsCard>
        </CardHeader>

        <CardHeader> Saved Articles
          <SavedArticlesCard>

          </SavedArticlesCard>
        </CardHeader>
      </div>
    );
  }
}

export default Articles;
