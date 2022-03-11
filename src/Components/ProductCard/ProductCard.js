import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/ProductActions";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomCard(props) {
  const { imgSrc, title, rating, price, product } = props;
  const [open, setOpen] = React.useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Card
      sx={{
        boxShadow: 0,
        borderRadius: "20px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={imgSrc}
        sx={{ objectFit: "contain", cursor: "pointer", p: "30px" }}
        onClick={() => {
          navigate("/Product/" + product.id);
        }}
      />
      <CardContent sx={{ pb: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            whiteSpace: "nowrap",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1.3rem",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/Product/" + product.id);
          }}
          title={title}
        >
          {title}
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        {/* &nbsp;&nbsp; */}
        <br />
        <Typography
          variant="subtitle2"
          component="span"
          color="grey"
          fontSize="16px"
        >
          {rating} out of 5
        </Typography>
        <Typography variant="subtitle1" color="#c45500">
          Price : &#36; {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => {
            handleClick();
            dispatch(addToCart(product));
          }}
          sx={{ margin: "0px 0px 10px 8px" }}
        >
          Cart
        </Button>
        {/* <Button
          variant="contained"
          color="primary"
          startIcon={<FavoriteIcon />}
        >
          wishlist
        </Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Added to card !!!
          </Alert>
        </Snackbar>
      </CardActions>
    </Card>
  );
}
