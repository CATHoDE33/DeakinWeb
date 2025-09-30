import { AppBar, Toolbar, Box, InputBase, IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const NavigationBar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ bgcolor: "teal" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            borderRadius: 1,
            px: 1,
            width: "300px",
          }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{ flexGrow: 1 }} />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>

        <Box>
          <Button
            component={Link}
            to="/newpost"
            color="inherit"
            sx={{ ml: 2, textTransform: "none", fontSize: "1rem" }}>
            Post
          </Button>
          <Button
            component={Link}
            to="/login"
            color="inherit"
            sx={{ ml: 2, textTransform: "none", fontSize: "1rem" }}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;