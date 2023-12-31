/* eslint-disable react/prop-types */
/* eslist-disable no-unused-vars */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardUser({ user }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user.avatar_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.login}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}