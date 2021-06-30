import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Footer = () => {

const myStyle = {
    width : '100%',
    background : '#4B515D'
};
const iconStyle = {
    color : 'white'
};


 return (

    <div class = 'footer' style = {myStyle}>
        <div class = 'container' >
                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <h4 >Find Us On:</h4>
                    </div>
                </div>
                    
            
            <div class = 'row'>
                <div class = 'col'>
                    <a href ='#'><i class ='fab fa-facebook fa-3x' style = {iconStyle}></i></a>
                </div>
                <div class = 'col'>
                    <a href ='#'><i class ='fab fa-instagram fa-3x' style = {iconStyle}></i></a>
                </div>
                <div class = 'col'>
                    <a href ='#'><i class ='fab fa-twitter fa-3x' style = {iconStyle}></i></a>
                </div>
                <div class = 'col'>
                    <a href ='#'><i class ='fab fa-google-plus fa-3x' style = {iconStyle}></i></a>
                </div>

                
                
                

            </div>

        </div>
    </div>
    )
}

export default Footer
