import React from "react";

const SavedArticles = props => (
    <div className="card">
        <div className="card-header">
            Saved Articles
        </div>
        
        <div class="card-body">
            <h5 class="card-title"> {props.title}</h5>
           
            <button type="submit" class="btn btn-primary" onClick={props.handleRemove}>Remove</button>
        </div>

      
    </div>

);

export default SavedArticles;