import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Event } from '../../../models/event';

type EventPreviewCardProps = Pick<Event, 'title' | 'image'>;

function EventPreviewCard({ title, image }: EventPreviewCardProps) {
  return (
    <Card sx={{ display: 'flex', height: 345, width: '100%' }}>
      <CardActionArea sx={{ display: 'flex', height: '100%' }}>
        <CardMedia
          component="img"
          height="345"
          image={image}
          alt="green iguana"
          sx={{
            position: 'absolute',
            top: '0',
            zIndex: '1',
            filter: 'brightness(0.7)',
          }}
        />
        <CardContent
          sx={{
            alignSelf: 'flex-end',
            position: 'relative',
            background: 'transparent',
            zIndex: '2',
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            fontWeight="600"
            textTransform={'uppercase'}
            color={'#fff'}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default EventPreviewCard;
