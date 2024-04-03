import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import SmartFitLogo from '@/app/images/SmartFitAICard.png';
import './card.module.css';



export default function SmartFitAICard() {
  return (
    <Card sx={{ minWidth:250, maxWidth:250 }}>
      <CardMedia
        component="img"
        alt="Smart Fit AI"
        height="140"
        // src = {SmartFitLogo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Smart Fit AI
        </Typography>
        <Typography variant="body2" color="#b6b4b4">
         Ernährungs und Fitnissapp<br></br>
         KivyMD UI & Python Backend<br></br>
         Projekt im Rahmen des Python II Moduls
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Mehr Info´s</Button>
      </CardActions>
    </Card>
  );
}
