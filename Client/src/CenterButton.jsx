import { Grid, Button } from "@mui/material";

const CenterButton = ({ text, onClick }) => (
  <Grid container justifyContent="center">
    <Grid item>
      <Button
        variant="contained"
        size="large"
        onClick={onClick}
        sx={{
          minWidth: 200,
          textTransform: "none",
          fontSize: "1.2rem",
          backgroundColor: "#008080",
          "&:hover": {
            backgroundColor: "#005353ff",
          }
        }}
      >
        {text}
      </Button>
    </Grid>
  </Grid>
);

export default CenterButton;