import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import Header from "../Header/Header";
import AppRoutes from "../../AppRoutes";
import Footer from "../Footer/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: "fixed" }}>
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Toolbar id="back-to-top-anchor" sx={{ position: "absolute", top: 0 }} />
      <AppRoutes />
      {/* <Fab
        color="primary"
        aria-label="add"
        size="large"
        sx={{
          backgroundColor: "#25d366 ",
          position: "fixed",
          bottom: "50px",
          right: "20px",
        }}
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/send?phone=919004409190&text=Hi",
            "_blank"
          );
        }}
      >
        <WhatsAppIcon fontSize="large" />
      </Fab> */}
      <Footer />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
