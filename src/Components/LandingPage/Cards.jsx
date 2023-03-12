import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 , display:"flex", flexDirection:"row", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}

        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}