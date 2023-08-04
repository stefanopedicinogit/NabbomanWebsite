import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Cart from "./Cart";

const PageContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  padding-top: 150px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #fff;
  color: #333;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const CartIcon = styled.div`
  position: fixed;
  top: 110px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #fff;
  color: #333;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

const TrashIcon = styled(FaTrash)`
  font-size: 20px;
  color: #ff4d4d;
  cursor: pointer;
`;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('https://backend-express-nabboman-render.onrender.com/products/get')
      .then(response => response.json())
      .then(data => {
        const transformedProducts = data.products.map(product => ({
          ...product,
          price: parseFloat(product.price)
        }));
        setProducts(transformedProducts);
      })
      .catch(error => {
        console.log('There was an error fetching the products', error);
      });
  };
  

  const handleAddToCart = (product) => {
    setCartArray(cartArray => [...cartArray, product]);
  };

  const handleDeleteItem = (id) => {
    const updatedCartArray = cartArray.filter(item => item.id !== id);
    setCartArray(updatedCartArray);
  };

  const getTotalPrice = () => {
    return cartArray
      .reduce((total, item) => {
        const itemPrice = item.price ? parseFloat(item.price.formatted) : 0;
        return total + itemPrice;
      }, 0)
  };

  return (
    <PageContainer>
      <CartIcon onClick={() => setShowCart(!showCart)}>
        <FaShoppingCart size={30} />
        {cartArray.length > 0 && <CartCount>{cartArray.length}</CartCount>}
      </CartIcon>
      {products.length === 0 ? (
        <div style={{ height: "30vh" }}> 
          <p className="text-center">Nessun articolo da mostrare</p>
        </div>
      ) : (
        <ProductGrid>
          {products.map((product) => (
            <ProductContainer key={product.id}>
              <ProductImage src={product.imgbase64} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{(product.price)} €</ProductPrice>
              <AddToCartButton onClick={() => handleAddToCart(product)}>
                Add to Cart
              </AddToCartButton>
              {cartArray.some((item) => item.id === product.id) && (
                <TrashIcon onClick={() => handleDeleteItem(product.id)} />
              )}
            </ProductContainer>
          ))}
        </ProductGrid>
      )}
      {showCart && (
        <Cart
          cartItems={cartArray}
          setCartItems={setCartArray}
          getTotalPrice={getTotalPrice}
          setShowCart={setShowCart}
          showCart={showCart}
        />
      )}
    </PageContainer>
  );
}

export default ProductPage;