import { Box, Typography } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Box sx={{ width: '50%', margin: '0 auto' }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: '2rem' }}
      >
        About us
      </Typography>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        dolor animi autem amet illo. Minus laboriosam nisi, aliquam facilis
        natus dolor ullam quaerat laudantium corporis! Aspernatur at sint natus
        cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur dolor animi autem amet illo. Minus laboriosam nisi, aliquam
        facilis natus dolor ullam quaerat laudantium corporis! Aspernatur at
        sint natus cupiditate.
      </Typography>
    </Box>
  );
};

export default AboutUsPage;
