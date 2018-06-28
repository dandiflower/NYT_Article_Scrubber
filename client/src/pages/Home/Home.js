// import React, { Component } from "react";
// import API from "../../utils/API";
// // import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import SearchCard from "../../components/SearchCard";
// import ResultsCard from "../../components/ResultsCard";
// import SavedArticlesCard from "../../components/SavedArticlesCard";
// import CardHeader from "../../components/CardHeader";



// class Articles extends Component {
//   state = {
//     articles: [],
//     topic: "",
//     title: "",
//     start_date: "",
//     end_date: "",
//     url: ""
//   }

// componentDidMount = () => {
//   this.getArticles()
// }

//   getArticles = () => {
//     API.getArticles(
//       // {
//       // title: this.state.title,
//       // start_date: this.state.start_date,
//       // end_date: this.state.end_date
//     // }
//   )
//       .then(res =>
//       this.setState({
//         articles: res.data,

//       }))
//   }

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     this.getArticles();
//   };

//   render() {
//     return (
//       <div>
//         <Navbar>
//           <h1>NEW YORK TIMES ARTICLE SCRUBBER</h1>
//           <h4>Search for and annotate articles of interest!</h4>
//         </Navbar>

//         <CardHeader> Search
//           <SearchCard 
//             handleChange={this.handleChange}
//             topic={this.state.topic}
//             start_date={this.state.start_date}
//             end_date={this.state.end_date}
//             handleFormSubmit={this.handleFormSubmit}
//           />
//         </CardHeader>

//         <CardHeader> Results
//           <ResultsCard>

//           </ResultsCard>
//         </CardHeader>

//         <CardHeader> Saved Articles
//           <SavedArticlesCard>

//           </SavedArticlesCard>
//         </CardHeader>
//       </div>
//     );
//   }
// }

// export default Articles;

import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

class Home extends Component {
  state = {
    results: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const article = {
      topic: document.getElementById('topic').value,
      startDate: document.getElementById('startDate').value,
      endDate: document.getElementById('endDate').value
    }


    article.startDate = article.startDate.replace(/[^\w\s]/gi, '');
    article.endDate = article.endDate.replace(/[^\w\s]/gi, '');
    console.log(article);

    API.searchArticles(article)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data });
      })
      .catch(err => console.log("search err",err));
  };

  handleSave = event =>{
    const el = event.target;
    const index = parseInt(el.getAttribute('data-index'));
    console.log(index);

    API.saveArticles(this.state.results[index])
    .then(response=>{
      // remove the result at index from state
    })
    .catch(err =>{
      console.log("save err", err);
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">Search For An Article!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
          />
          <SearchResults 
            results={this.state.results} 
            handleSave={this.handleSave}
           />
        </div>
      </div>

    );
  }
}

export default Home;

