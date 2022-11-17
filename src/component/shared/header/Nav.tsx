import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

const Nav: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#393E46", boxShadow: "none" }}
    >
      <Container>
        <Toolbar>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BLOG LOGO
          </Typography>
          <Box>
            <Link to="/">
              <Button sx={{ color: "white" }}>Blogs</Button>
            </Link>
            <Link to="/add-blog">
              <Button sx={{ color: "white" }}>Add Blog</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
