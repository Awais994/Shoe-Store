
import Shoe from './Shoelist';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';


export default function Shoedetail() {
  const { i } = useParams();
  const shoe = Shoe[i];


  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name,img,price, detail } = shoe;
  return (

    <div >

      <Card sx={{ maxWidth: 1000}} style={{margin:'0 auto', marginTop:'10px'}}> 
      <CardActionArea> 
        <CardMedia
          component="img"
          height="fit-content"
          objectFit = 'cover'
          image={'/'+img}
          alt={i}
        /> 

        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>




  );
}









