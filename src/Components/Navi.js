import { AppBar,  Toolbar, Typography, Grid } from '@mui/material'
import React from 'react'
import {BrowserRouter as Router,Route,Switch, Link } from 'react-router-dom'
import Product from '../Components/Product'
import {useSelector} from 'react-redux'
import {connect} from "react-redux"
 function Navi() {
     const counter=useSelector((state)=>state.addCard)
    //  const counter=props.mycounter.length
    return (
        <div>
            <Grid container >
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <AppBar position="static" style={{backgroundColor:"black"}}>
                        <Toolbar >
                        <Typography variant="h6" >
                                    <Link to="/Home" style={{color:"white",marginLeft:"10px"}}>Home</Link>  
                                </Typography>
                                <Typography variant="h6" >
                                    <Link to="/product" style={{color:"white",marginLeft:"10px"}}>Product</Link>  
                                </Typography>
                                <Typography variant="h6" >
                                <Link to="/Cart" style={{color:"white",marginLeft:"10px"}}  >Cart{counter.proData.length} </Link>  
                                </Typography>    
                        </Toolbar>
                    </AppBar>
                </Grid>
               
            </Grid>
            
        </div>
    )
}
// const MapStateToProps=(state)=>{
//     return{ 
//       mycounter:state.count
//     }
//export default   connect(MapStateToProps,null)(Navi)  }
export default  (Navi)