import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import SmartFitLogo from '@/app/images/SmartFitAICard.webp';



export default function PortFolioCard() {
   return (
   <Card sx={{ minWidth:250, maxWidth: 250 }}>
      <CardMedia
         component="img"
         alt="Port Folio Website"
         height= "150"
         image="/images/SmartFitAICard.webp"
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Port Folio Website
            </Typography>
            <Typography variant="body2" color="#b6b4b4">
               Responsive Website für Desktop & Mobile App<br></br>
               React, Next.js , HTML/CSS<br></br>
               Privates Projekt
            </Typography>
         </CardContent>
      <CardActions>
         <Button size="small">Mehr Info´s</Button>
      </CardActions>
   </Card>
   );
}
