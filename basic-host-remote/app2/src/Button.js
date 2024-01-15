import React from "react";

const Button = () =>
{
    const buttonStyle = {
      backgroundColor: 'lightskyblue',
      color: 'white',
      textAlign: 'center',
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '20px',
    };
  
    return (
        <button style={buttonStyle} onClick={handleClick}>GO TO LOGIN</button>
    );
};

const handleClick = () => {
    window.location.href = 'http://localhost:3000/';
};

export default Button;
