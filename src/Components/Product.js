import React,{useState,useEffect} from 'react'   
import Container from '@mui/material/Container'
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import json from '../Product.json'

import { connect, useDispatch,useSelector } from 'react-redux';
import Navi from './Navi';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



function Product() {
    const [proData, setproData] = useState(json.product);
    const dispatch=useDispatch();
    return (
        <>
           <Navi/>
       <Container style={{backgroundColor:"lightgray"}} >
           <Grid container spacing={5} className="mt-2" >
               {proData.map(pro=>
               <Grid item md={4}  >
                   <Item key={pro.id} style={{border:"1px solid black"}}>
                   <Card sx={{ maxWidth: 345 }} >
                         <CardMedia  component="img" alt="green iguana"  height="200" image={`/Image/${pro.image}`}/>
                         <CardContent>
                             <Typography gutterBottom variant="h5" component="div"> {pro.pname}  </Typography>
                              <Typography variant="body2" color="text.primary"> Prize:{pro.price}<br/>
                              Quantity:{pro.quantity}
                                 </Typography>
                          </CardContent>
                          <CardActions style={{textAlign:"center",marginLeft:"100px"}}>
                               <Button variant="contained" onClick={()=>dispatch({type:"add",id:pro.Pro_id})}>Add to cart</Button>
                            
                          </CardActions>
                    </Card>
                    </Item>
               </Grid>
               )}
               
           </Grid>
       </Container>
        </>
     
    )
}



export default  (Product)