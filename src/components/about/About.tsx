import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import manImg from "../../assets/image/man.png";
import React from 'react'


const styles = makeStyles({
    root: {
        width: "85%",
        margin: "auto",
        paddingTop: 96,
    },
    image: {
        width: "100%",
    },
    gridContainer:{
        textAlign:"center",
    },
    para:{
        margin:"0px 0px 6px",
        fontSize:"calc(13px + (15 - 13) * ((100vw - 300px) / (1300 - 300)))",
        fontWeight:500,
        opacity:0.6,
        color:"#111",
        letterSpacing:"0.6px",
        lineHeight:1.5,
    },
    heading:{
        fontSize:"calc(20px + (35 - 20) * ((100vw - 300px) / (1300 - 300)))",
        margin:"0px 0px 16px",
        fontWeight:500,
        color:"#695aa6",
        lineHeight:1.2,
    },
    button:{
        padding:"8px 15px",
        marginTop:20,
        borderRadius:"50px",
        cursor:"pointer",
        color:"#695aa6",
        backgroundColor:"#fff",  
        display:"block",
        fontSize:"1em",
        fontWeight:400,
        lineHeight:1.5,
        border:"1px solid #695aa6",
        "&:hover":{
            backgroundColor:"#594c8d",
            border:"1px solid #544885",
        },
    }
})

const About = () => {
    const classes = styles()
    return (
        <div className={classes.root} id="about">
            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.gridContainer} >
                    <img src={manImg} alt="" className={classes.image} />
                </Grid>
                <Grid item xs={12}  sm={12} md={8} lg={8} xl={8}>
                    <p className={classes.para}>Who Am I ?</p>
                    <h2 className={classes.heading}>About Me</h2>
                    <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste </p>

                    <p className={classes.para}>culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam! </p>
                    <button className={classes.button}>Download CV</button>

                </Grid>

            </Grid>
        </div>
    )
}

export default About