import React from 'react';
import Button from '../components/Button';
import logo from '../logo0.png';
// import { useNavigate } from 'react-router-dom';


function Landing(){
    /* const navigate = useNavigate();

     const goToNewPage = () => {
        navigate("/dash")
    } */
    return (
        <div className="Landing">
        <header className="Landing-header">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
            <img src={logo} className="App-logo" alt="logo" />
            <Button text="Log In" ></Button>
            <Button text="Sign Up" ></Button>
        </header>
        </div>
  );
}

export default Landing;