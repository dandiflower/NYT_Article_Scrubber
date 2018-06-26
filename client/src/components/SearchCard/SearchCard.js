import React from "react";

this.handleChange = this.handleChange.bind(this);



const Search = props => (

    <form>
        <div class="form-group">
            <label for="inputTopic">Topic</label>
            <input name="topic" type="text" value={props.topic} onChange={props.handleChange} class="form-control" id="inputTopic" placeholder="Enter topic"/>
        </div>
        
        <div class="form-group">
                <label for="inputStartYear">Start Year</label>
                <input name="start_date" type="date" value={props.start_year} onChange={props.handleChange}  class="form-control" id="inputStartYear" placeholder="Enter start year"/>
        </div>
                
        <div class="form-group">
                <label for="inputEndYear">End Year</label>
                <input name="end_date" type="date" value={props.end_year} onChange={props.handleChange}  class="form-control" id="inputEndYear" placeholder="Enter end year"/>
        </div>
           
        <button type="submit" class="btn btn-primary" onClick={props.handleFormSubmit} >Submit</button>

    </form>
             
);

export default Search;
