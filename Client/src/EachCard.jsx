import { Card, CardContent, CardActions, Typography, Box, Rating } from '@mui/material';

const EachCard = ({ image, title, description, author, ratingNumber }) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        height: 520, // shorter, more balanced
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      {/* Square image */}
      <Box sx={{ width: '100%', position: 'relative', pt: '100%' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, overflow: 'hidden', py: 1 }}>
        <Typography variant="h6" component="div" gutterBottom noWrap>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Rating and author */}
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating name="card-rating" value={ratingNumber} max={1} size="small" />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            {ratingNumber}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default EachCard;
