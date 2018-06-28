import React from "react";

const Result = props => (
    <div class="card">
        <div className="card-header">
            Results
        </div>
        <div class="card-body">
            <h5 class="card-title"> {props.title}</h5>
            
            <button type="submit" class="btn btn-primary" onClick={props.handleSave}>Save</button>
        </div>

        <button type="submit" class="btn btn-primary" onClick={props.handleSave}>Save</button>
    </div>

);

export default Result;