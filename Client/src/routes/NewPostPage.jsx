import { useState } from "react";
import { Container, Typography, Grid, Radio, RadioGroup, FormControlLabel, TextField, Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: 4,
        },
      },
    },
  },
});

export default function NewPostPage() {
  const [selectedOption, setSelectedOption] = useState("question");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ bgcolor: "teal", color: "white", p: 2, mb: 3 }}>
          <Typography variant="h4">New Post</Typography>
        </Paper>

        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography>Select Post Type:</Typography>
          </Grid>
          <Grid item>
            <RadioGroup
              row
              value={selectedOption}
              onChange={handleChange}
              name="postType"
            >
              <FormControlLabel value="question" control={
                <Radio sx={{ color: "white", "&.Mui-checked": { color: "#008080" } }}
                />} label="Question" sx={{ mr: 5 }} />
              <FormControlLabel value="article" control={
                <Radio sx={{ color: "white", "&.Mui-checked": { color: "#008080" } }}
                />} label="Article" />
            </RadioGroup>
          </Grid>
        </Grid>

        <Paper elevation={3} sx={{ bgcolor: "teal", color: "white", p: 2, mt: 4 }}>
          <Typography variant="h6">
            What do you Want to Ask or Share?
          </Typography>
        </Paper>

        {selectedOption === "question" && (
          <div>
            <p></p>
            <Typography sx={{ mt: 2, mb: 3 }}>
              This section is designed based on the type of post, and could be developed by conditional rendering.
              <br />
              To post a question, the following section would appear:
            </Typography>

            <TextField
              label="Title"
              placeholder="Start your question with how, what, why, etc."
              fullWidth
              margin="normal"
            />

            <TextField
              label="Describe your problem"
              multiline
              rows={6}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Tags"
              placeholder="Please add up to three tags to describe what your question is about e.g., Java"
              fullWidth
              margin="normal"
            />

            <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: "#008080",
                  "&:hover": {
                    backgroundColor: "#005353ff",
                  }
                }}
              >
                Post
              </Button>
            </Grid>
          </div>
        )}

        {selectedOption === "article" && (
          <div>
            <p></p>
            <Typography sx={{ mt: 2, mb: 3 }}>
              This section is designed based on the type of post, and could be developed by conditional rendering.
              <br />
              To post an article, the following section would appear:
            </Typography>

            <TextField
              label="Title"
              placeholder="Enter a descriptive title"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Abstract"
              placeholder="Enter a one paragraph abstract"
              multiline
              rows={3}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Article Text"
              placeholder="Enter a one paragraph abstract"
              multiline
              rows={8}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Tags"
              placeholder="Please add up to three tags to describe what your question is about e.g., Java"
              fullWidth
              margin="normal"
            />

            <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: "#008080",
                  "&:hover": {
                    backgroundColor: "#005353ff",
                  }
                }}
              >
                Post
              </Button>
            </Grid>
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
      </Container>
    </ThemeProvider>
  );
}