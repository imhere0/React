import React from 'react';
import Description from './description';
import Form from './Form';

const Grid = () => {
    return (
        <div class="container">
            <br/>
            <div class="row">
                <div class="col" >
                    <Description />
                </div>
                <div class="col" >
                    <Form />
                </div>
            </div>
        </div>    
    )
}

export default Grid
