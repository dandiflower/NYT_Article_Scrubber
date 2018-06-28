import React from "react";
import "./searchCard.css";

const Search = props => (
    <div className="card">
        <div className="card-header">
            Search Articles
        </div>
        <form>
            <div className="form-group">
                <label for="inputTopic">Topic</label>
                <input name="topic" type="text" value={props.topic} onChange={props.handleChange} className="form-control" id="inputTopic" placeholder="Enter topic" />
            </div>

            <div className="form-group">
                <label for="inputStartYear">Start Year</label>
                <input name="start_date" type="date" value={props.start_year} onChange={props.handleChange} className="form-control" id="inputStartYear" placeholder="Enter start year" />
            </div>

            <div className="form-group">
                <label for="inputEndYear">End Year</label>
                <input name="end_date" type="date" value={props.end_year} onChange={props.handleChange} className="form-control" id="inputEndYear" placeholder="Enter end year" />
            </div>

            <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit} >Submit</button>

        </form>
    </div>
             
);

export default Search;
