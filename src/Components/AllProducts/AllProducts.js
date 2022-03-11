import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchandSetAllProducts } from "../../Redux/Actions/ProductActions";
import Grid from "@mui/material/Grid";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Box } from "@mui/material";

export default function AllProducts() {
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  const ProductsFromStoreInitial = useSelector((state) => state.allProducts);
  const ProductsFromStore = useSelector((state) => state.filteredProducts);

  useEffect(() => {
    dispatch(fetchandSetAllProducts()).then(() => {
      setisLoading(false);
    });
  }, []);

  return (
    <>
      {ProductsFromStoreInitial?.length === 0 && <Loader />}
      {ProductsFromStore?.length === 0 &&
        ProductsFromStoreInitial?.length !== 0 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              fontSize: "22px",
              mt: "20px",
            }}
          >
            No Results Found
          </Box>
        )}
      <Grid container spacing={3}>
        {ProductsFromStore?.map((product, i) => {
          return (
            <Grid item xs={12} md={6} lg={4} xl={3} key={"product_" + i}>
              <ProductCard
                key={product.id}
                imgSrc={product.image}
                title={product.title}
                rating={product.rating.rate}
                price={product.price}
                product={product}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
