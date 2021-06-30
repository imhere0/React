import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Form = () => {
    return (
        <div>
            <h4>Search For Host</h4>
            <form>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" class="form-control" id="location"  placeholder="Enter location"/>
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div class="form-group">
                    <label for="inputNumber">No. of rooms</label>
                    <input type="number" class="form-control" id="inputNumber" placeholder="Enter number of room required"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
        </div>
    )
}

export default Form
