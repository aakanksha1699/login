import './App.css';
import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="container">
        <svg id="back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#07A6F0"/>
        </svg>

        <svg id="close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
        </svg>


        <div className="welcome">New to Movies</div>
        <div className="verify">Verify mobile number to create account</div>
        
        <div className="pnumber">
          <div className="rcode">+91</div>
          <div className="number"><input type="text" placeholder="Enter your mobile number"></input></div>
          <svg  id="line" width="360" height="1" viewBox="0 0 360 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="-4.37114e-08" y1="0.5" x2="360" y2="0.499969" stroke="#07A6F0"/>
          </svg>


        </div>

        <button type="submit" id="cont">Continue</button>
        
        <div className="terms">
        By Proceeding you agree to the Terms of use and Privacy policy
        </div>
      </div>
    );
  }
}

export default App;