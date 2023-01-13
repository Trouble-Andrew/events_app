import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Event } from '../../../models/event';

type CategoryCardProps = Pick<Event, 'title' | 'image' | 'description'>;

const CategoryCard = ({ title, image, description }: CategoryCardProps) => {
  return (
    <Card
      css={{
        backgroundColor: '#000',
        maxWidth: '37.5rem',
        height: '18.75rem',
        border: '1px solid var(--clear-day)',

        ['@media(max-width: 768px)']: {
          height: 'auto',
        },
      }}
    >
      <CardActionArea
        css={{
          display: 'flex',
          height: '100%',

          ['@media(max-width: 768px)']: {
            flexDirection: 'column-reverse',
          },
        }}
      >
        <CardContent
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            height: '100%',

            ['@media(max-width: 768px)']: {
              width: '100%',
            },
          }}
        >
          <Typography gutterBottom variant="h5" component="div" color={'#fff'}>
            {title}
          </Typography>
          <Typography variant="body2" color="#fff">
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          css={{
            width: '50%',
            height: '100%',

            ['@media(max-width: 768px)']: {
              width: '100%',
              maxHeight: '400px',
            },
          }}
        />
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
