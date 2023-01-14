import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Event } from '../../../models/event';
import Link from 'next/link';

type EventCardProps = Pick<
  Event,
  'title' | 'image' | 'description' | 'city' | 'id'
>;

function EventCard({ title, image, description, city, id }: EventCardProps) {
  return (
    <Link href={`/events/${city}/${id}`} passHref>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default EventCard;
