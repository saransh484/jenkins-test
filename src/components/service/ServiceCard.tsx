import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material';

const styles = makeStyles({
    root:{
        border:"1px solid #dee2e6",
        borderRadius:"3px",
        padding:15,
        textAlign:"center",
        height:"230px",
        "&:hover ":{
            height:"100%",
           "& $image":{
            margin:"5px 0px 15px",
            width:"45px",
           },
            "& $para":{
                display:"block",
            },
        }
    },
    image:{
        margin:"40px 0px 25px",
        width:"55px",
        textAlign:"center",
    },
    heading:{
        fontSize:"calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)))",
        textAlign:"center",
    },
    para:{
        textAlign:"center",
        display:"none",
    }
})

interface IServiceCard{
image:string,
heading:string,
para:string,
}

const ServiceCard = (props:IServiceCard) => {
    const {image,heading,para}=props;
    const classes = styles();
    return (
        <Grid item xs={12} sm={6} md={3} lg={3} >
            <div className={classes.root}>
                <img src={image} alt="" className={classes.image} />
                <h6 className={classes.heading}>{heading}</h6>
                <p className={classes.para}>{para}</p>
            </div>
        </Grid>
    )
}

export default ServiceCard