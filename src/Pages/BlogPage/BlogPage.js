import * as React from "react";
import faker from "@faker-js/faker";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

import "./BlogPage.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogPage() {
  const [expanded, setExpanded] = React.useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [blogJson, setBlogJson] = React.useState(
    [...Array(20)].map(() => ({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      userAvatar: faker.internet.avatar(),
      datetime: faker.date.recent(),
      city: faker.address.city(),
      blogTitle: faker.lorem.sentence(),
      blogDescription: faker.lorem.paragraph(),
      blogImage: faker.image.image(),
    }))
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={2} mt="15px" sx={{ width: "100%", ml: "0px" }}>
      {console.log("BlogJson", blogJson)}
      {blogJson.map((blog) => {
        return (
          <Card
            sx={{
              m: "0px 0px 15px 0px",
              boxShadow: "none",
              p: "15px",
              borderRadius: "20px",
            }}
          >
            <Grid container xs={12}>
              <Grid item xs={3}>
                <CardMedia
                  component="img"
                  height="auto"
                  width="100%"
                  image={blog.blogImage}
                  alt="Paella dish"
                  sx={{ borderRadius: "20px" }}
                />
              </Grid>
              <Grid item xs={9}>
                <CardHeader
                  sx={{ padding: "10px 16px", fontSize: "18px" }}
                  avatar={<Avatar src={blog.userAvatar} />}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={blog.username}
                  subheader={`${blog.datetime.getDate()} ${
                    months[blog.datetime.getMonth()]
                  } ${blog.datetime.getFullYear()}`}
                />

                <CardContent sx={{ pt: "0px" }}>
                  <Typography variant="h6" color="text.primary">
                    {blog.blogTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.blogDescription}
                    {blog.blogDescription}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </Grid>
  );
}
