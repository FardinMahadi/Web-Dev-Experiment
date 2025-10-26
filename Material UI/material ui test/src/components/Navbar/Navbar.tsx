import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useMediaQuery, useTheme, Drawer } from "@mui/material";

const Navbar = () => {
  const [drawerOpen, SetDrawerOpen] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    SetDrawerOpen(open);
  };

  const drawerLinks = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Coffee",
      link: "#coffee",
    },
  ];
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container>
          <Toolbar>
            <CoffeeIcon />
            <Typography
              variant="h5"
              sx={{ flexGrow: 1, fontFamily: '"Eagle Lake", serif' }}
            >
              Coffee Shop
            </Typography>

            {isMobile && (
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon></MenuIcon>
              </IconButton>
            )}

            {!isMobile && (
              <>
                <Button color="inherit" href="#home">
                  Home
                </Button>
                <Button color="inherit" href="#coffee">
                  Coffee
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {drawerLinks.map((linkItem, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton
                  component="a"
                  href={linkItem.link}
                  onClick={toggleDrawer(false)}
                  aria-label={`Navigate to ${linkItem.text}`}
                >
                  <ListItemText primary={linkItem.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
