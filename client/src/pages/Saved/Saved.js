import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SearchCard from "../../components/SearchCard";
import ResultsCard from "../../components/ResultsCard";
import SavedArticlesCard from "../../components/SavedArticlesCard";
import CardHeader from "../../components/CardHeader";



class Saved extends Component {
  state = {
    articles: [],
    topic: "",
    title: "",
    start_date: "",
    end_date: "",
    url: ""
  }

  getArticles = () => {
    API.getArticles({
      title: this.state.title,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    })
      .then(res =>
      this.setState({
        articles: res.data,

      }))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getArticles();
  };

  
  handleSave = event => {
    event.preventDefault();
    API.saveArticles({
      title: this.state.title,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    })
      .then(res =>
        this.setState({
          articles: res.data,

        }))
  }

  render() {
    return (
      <div>
        <Navbar>
          <h1>NEW YORK TIMES ARTICLE SCRUBBER</h1>
          <h4>Search for and annotate articles of interest!</h4>
        </Navbar>

        <CardHeader> Search
          <SearchCard 
            handleChange={this.handleChange}
            topic={this.state.topic}
            start_date={this.state.start_date}
            end_date={this.state.end_date}
            handleFormSubmit={this.handleFormSubmit}
          />
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

export default Saved;
