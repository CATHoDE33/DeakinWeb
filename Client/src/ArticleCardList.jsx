import EachCard from './EachCard';
import ArticleList from './ArticleList';
import { Grid, Box } from '@mui/material';

const ArticleCardList = () => {
  return (
    <Box sx={{ py: 1, px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {ArticleList.map((item) => (
          <Grid
            item
            key={item.key}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <EachCard
              image={item.image}
              title={item.title}
              description={item.description}
              author={item.author}
              ratingNumber={item.ratingNumber}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleCardList;