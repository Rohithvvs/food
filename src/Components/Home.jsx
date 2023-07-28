import React from 'react'
import "./home.css"
import Button from '@mui/material/Button';
const  handleClick =()=>{
    // console.log("button is presed")
}

const Home = () => {
  return (
    <div>
        <div className='Food'>
        Food's restaurant
        </div>
        
      <div className= "welcome">
        Welcome to Food's <br/>Kitchen
      </div>

<Button variant="contained" size="large"  onClick={handleClick}>
Go to Menu
        </Button>
    </div>
  )
}

export default Home