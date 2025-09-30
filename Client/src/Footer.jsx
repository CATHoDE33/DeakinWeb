import { Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import "./App.css";

const Footer = () => (
  <div className="footer">
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Explore</Typography>
          <p></p>
          <Typography><a href="/">Home</a></Typography>
          <Typography><a href="/">Questions</a></Typography>
          <Typography><a href="/">Articles</a></Typography>
          <Typography><a href="/">Tutorials</a></Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Support</Typography>
          <p></p>
          <Typography><a href="/">FAQs</a></Typography>
          <Typography><a href="/">Help</a></Typography>
          <Typography><a href="/">Contact Us</a></Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Stay Connected</Typography>
          <p></p>
          <IconButton color="inherit" href="">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="">
            <LinkedIn />
          </IconButton>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5" align="center">
            DEV@Deakin 2025
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Typography><a href="/">Privacy Policy</a></Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography><a href="/">Terms</a></Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography><a href="/">Code of Conduct</a></Typography>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Footer;