import React, { useState } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { TextField, Fab } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeQty, addQty } from "../../Redux/Actions/ProductActions";

export default function ItemCounter(props) {
  // const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);

  const dispatch = useDispatch();

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
        <ButtonGroup sx={{ px: "16px" }}>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={() => {
              props.setCount(Math.max(props.count - 1, 1));
              dispatch(removeQty(props.product));
            }}
            disabled={props.count === 1 ? true : false}
          >
            <RemoveIcon />
          </Fab>
          <TextField
            sx={{
              width: "50px",
              margin: "0 10px",
            }}
            size="small"
            variant="outlined"
            inputProps={{ style: { textAlign: "center" }, readOnly: true }}
            value={props.count}
            onChange={(e) => {
              props.setCount(e.target.value);
            }}
          />

          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={() => {
              props.setCount(props.count + 1);
              dispatch(addQty(props.product));
            }}
          >
            <AddIcon />
          </Fab>
        </ButtonGroup>
      </div>
    </Box>
  );
}
