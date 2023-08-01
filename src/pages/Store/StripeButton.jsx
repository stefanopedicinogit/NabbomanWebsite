import React from "react";
import styled from "styled-components";

const ElegantButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
  margin: 5px;
  &:hover {
    background-color: gray;
  }
`;

const StripeButton = (stripeArray) => {
  const handleClick = () => {
    console.log('CHECKOUT: ',JSON.stringify(stripeArray.stripeArray));
    fetch("https://backend-express-nabboman-render.onrender.com/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        stripeArray.stripeArray,
      ),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
  <ElegantButton style={{marginTop:'200px'}} onClick={handleClick}>Checkout</ElegantButton>
  );
};

export default StripeButton;
