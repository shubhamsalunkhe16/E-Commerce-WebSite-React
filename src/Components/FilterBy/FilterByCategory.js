import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import { useDispatch, useSelector } from "react-redux";
import {
  setAllProducts,
  setFilteredProducts,
  fetchandSetAllProducts,
  fetchandSetProductsByCategory,
} from "../../Redux/Actions/ProductActions";

const FilterByCategory = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setSelectedCategoryIndex(0);
      });
    props.setSelectedCategory("");
  }, []);

  useEffect(() => {
    const array = document.querySelectorAll(".categoryItem span");
    array.forEach((e) => (e.style.color = "white"));
    document.querySelectorAll(".categoryItem span").length > 1 &&
      (document.querySelectorAll(".categoryItem span")[
        selectedCategoryIndex
      ].style.color = "#FAAF00");

    const RatingArray = document.querySelectorAll(".ratingItem span");
    RatingArray.forEach((e) => (e.style.color = "white"));
  }, [selectedCategoryIndex]);

  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        backgroundColor: "rgb(15 17 17)",
        color: "white",
        borderRadius: "10px",
        ml: "10px",
      }}
    >
      <Typography sx={{ p: "10px 15px" }} variant="h6" component="div">
        Filter By Category
      </Typography>
      <Divider variant="fullWidth" />
      <List>
        <ListItem>
          <ListItemText
            className={`categoryItem`}
            primary={"All"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(fetchandSetAllProducts());
              setSelectedCategoryIndex(0);
              props.setSelectedCategory("");
            }}
          />
          <Divider variant="middle" component="li" />
        </ListItem>
        {categories.map((category, i) => {
          return (
            <ListItem key={"category" + i}>
              <ListItemText
                className="categoryItem"
                primary={category.charAt(0).toUpperCase() + category.slice(1)}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(fetchandSetProductsByCategory(category)).then(() => {
                    props.setSelectedCategory(categories[i]);
                  });
                  setSelectedCategoryIndex(i + 1);
                }}
              />
              <Divider variant="middle" component="li" />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default FilterByCategory;
