import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import StripeButton from "./StripeButton";

const CartContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 999;
  max-height: 400px;
  overflow-y: auto;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartItemInfo = styled.div`
  display: flex;
`;

const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CartItemTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const CartItemDescription = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
`;

const CartItemPrice = styled.p`
  font-weight: bold;
`;

const CartItemDeleteButton = styled.button`
  background-color: transparent;
  color: #999;
  border: none;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

const CartItemDeleteIcon = styled(FaTrash)`
  margin-right: 5px;
`;

const CartTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CloseCartButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;

function calculateCartTotal(cartArray) {
  let total = 0;
  for (let i = 0; i < cartArray.length; i++) {
    total += cartArray[i].price;
  }
  return total;
}

const Cart = ({ cartItems, setCartItems, getTotalPrice, setShowCart, showCart }) => {
    const [cartVisible, setCartVisible] = useState(false);
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0);
    const [stripeArray, setStripeArray] = useState([]);

    useEffect(() => {
      setCartTotal(calculateCartTotal(cart));
    }, [cart]);

    useEffect(() => {
      setStripeArray(
        cartItems.map(({ imgBase64, ...newObject }) => ({
          ...newObject,
          quantity: 1
        }))
      );
    }, [cartItems]);

    useEffect(() => {
      console.log(stripeArray)
    }, [stripeArray])

    const handleDeleteItem = (id) => {
      const newCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(newCartItems);
      setCartTotal(calculateCartTotal(newCartItems)); 
    };

    const handleCloseCart = () => {
        const totalPrice = getTotalPrice();
        if (totalPrice === "0.00") {
            setCartItems([]);
        } else {
            alert("Please remove all items from cart before closing.");
        }
    };

    const handleShowCart = () => {
        if (cartItems && cartItems.length > 0) {
          setCartVisible(true);
          setShowCart(true);
        }
      };

    useEffect(() => {
        setCart(cartItems);
        console.log(cart);
    }, [])
    
      return (
        <>
          {cartItems && cartItems.length > 0 && (
            <CartContainer>
              <CartTitle className="text-center" style={{color: 'gray'}}>Cart</CartTitle>
              {cartItems.map((item, index) => (
                <CartItem key={index}>
                  <CartItemInfo>
                    <CartItemImage style={{ marginTop:'15%' }} src={item.imgbase64} alt={item.name} />
                    <CartItemDetails>
                      <CartItemTitle>{item.name}</CartItemTitle>
                      <CartItemDescription>{item.description}</CartItemDescription>
                      <CartItemPrice>{item.price && item.price ? item.price : 'N/A'} €</CartItemPrice>
                    </CartItemDetails>
                  </CartItemInfo>
                  <CartItemDeleteButton onClick={() => handleDeleteItem(item.id)}>
                    <CartItemDeleteIcon />
                    Remove
                  </CartItemDeleteButton>
                </CartItem>
              ))}
              <div style={{ marginBottom: "-45%" }}>                
                <p>Total Price: {cartTotal} €</p>
              </div>
              <StripeButton stripeArray={stripeArray} >Checkout</StripeButton>
              <CloseCartButton onClick={handleCloseCart}>Close Cart</CloseCartButton>
            </CartContainer>
          )}
        </>
      );
};      
export default Cart
      