import React from "react";

const Search = props => (

    <form>
        <div class="form-group">
            <label for="inputTopic">Topic</label>
            <input type="topic" class="form-control" id="inputTopic" placeholder="Enter topic"/>
        </div>
        
        <div class="form-group">
                <label for="inputStartYear">Start Year</label>
                <input type="startYear" class="form-control" id="inputStartYear" placeholder="Enter start year"/>
        </div>
                
        <div class="form-group">
                <label for="inputEndYear">End Year</label>
                <input type="endYear" class="form-control" id="inputEndYear" placeholder="Enter end year"/>
        </div>
           
        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
             
);

export default Search;
