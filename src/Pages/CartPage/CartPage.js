import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Box, Button } from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import { useNavigate } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";

import { removeAllFromCart } from "../../Redux/Actions/ProductActions";
import { useState } from "react";

const CartPage = () => {
  const shoppingCartStore = useSelector((state) => state.ShoppingCart);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);

  useEffect(() => {
    setTotalPriceInCart(
      shoppingCartStore.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.qty;
      }, 0)
    );
  }, [shoppingCartStore]);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <Container sx={{ mt: "15px" }}>
        <Typography variant="h3" component="h2" textAlign="center">
          Shopping Cart
        </Typography>

        <Box
          sx={{
            backgroundColor: "#e1dfdf",
            borderRadius: "10px",
            padding: "10px 10px",
            margin: "20px 0px",
          }}
        >
          {shoppingCartStore.length === 0 ? (
            <div>
              <Typography
                variant="h5"
                component="h2"
                textAlign="center"
                mt="15px"
              >
                <ProductionQuantityLimitsIcon /> Your Cart is Empty !!!
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  display: "block",
                  margin: "20px auto",
                }}
                onClick={() => {
                  navigate("/Products");
                }}
              >
                See More Products
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(removeAllFromCart());
                }}
                sx={{
                  display: "block",
                  ml: "auto",
                  mb: "10px",
                }}
              >
                Remove All
              </Button>

              {shoppingCartStore.map((product) => {
                return (
                  <div key={"product" + product.id}>
                    <CartItem product={product} />
                  </div>
                );
              })}
              <Box
                sx={{
                  display: "block",
                  ml: "auto",
                  mb: "10px",
                  p: "20px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  textAlign: "end",
                  width: "fit-content",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  component="span"
                  mr="40px"
                >
                  Sub-Total
                </Typography>
                <Typography
                  variant="h4"
                  component="span"
                  color="primary"
                  my="20px"
                >
                  &#36; {totalPriceInCart.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    display: "block",
                    ml: "auto",
                    mt: "15px",
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </div>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default CartPage;
