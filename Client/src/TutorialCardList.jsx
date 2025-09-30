import EachCard from './EachCard';
import TutorialList from './TutorialList'
import { Grid, Box } from '@mui/material';

const TutorialCardList = () => {
    return (
        <Box sx={{ py: 1, px: 2 }}>
            <Grid container spacing={4} justifyContent="center">
                {TutorialList.map((item) => (
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

export default TutorialCardList;