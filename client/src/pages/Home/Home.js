import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SearchCard from "../../components/SearchCard";
import ResultsCard from "../../components/ResultsCard";
import SavedArticlesCard from "../../components/SavedArticlesCard";
import CardHeader from "../../components/CardHeader";
import Jumbotron from "../../components/Jumbotron";



class Articles extends Component {
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

  handleFormSubmit = event => {
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

  handleRemove = event => {
    event.preventDefault();
    // API.deleteArticles(id).then(res => this.getArticles())
    
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Jumbotron />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-12">
            <SearchCard
              handleChange={this.handleChange}
              topic={this.state.topic}
              start_date={this.state.start_date}
              end_date={this.state.end_date}
              handleFormSubmit={this.handleFormSubmit}
            />

          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-12">
            {this.state.articles.map(article => {
              return (
                <ResultsCard handleSave={article.handleSave}
                  title={article.title} />
              );
            })}
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-12">
          {!this.state.articles.length ? (<h1 className="textcenter">No saved articles yet </h1>) : (
            <SavedArticlesCard />
            // <SavedArticlesCard handleRemove={this.deleteArticles(article._id)}/>
          )}
          </div>
        </div>
        <br />
      </div>

    );
  }
}

export default Articles;
