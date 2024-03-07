import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import ServiceCard from './ServiceCard'
import pencilLogo from "../../assets/image/serviceImg/pencil-case.svg";
import responsiveLogo from "../../assets/image/serviceImg/responsive.svg";
import toolboxLogo from "../../assets/image/serviceImg/toolbox.svg";
import analyticsLogo from "../../assets/image/serviceImg/analytics.svg";


const styles = makeStyles({
    root: {
        width: "85%",
        margin: "auto",
        paddingTop: 112,
    },
    para: {
        margin: "0px 0px 6px",
        fontSize: "calc(13px + (15 - 13) * ((100vw - 300px) / (1300 - 300)))",
        fontWeight: 500,
        opacity: 0.6,
        color: "#111",
        letterSpacing: "0.6px",
        lineHeight: 1.5,
        textAlign: "center",
    },
    heading: {
        fontSize: "calc(20px + (35 - 20) * ((100vw - 300px) / (1300 - 300)))",
        margin: "0px 0px 16px",
        fontWeight: 500,
        color: "#695aa6",
        lineHeight: 1.2,
        textAlign:"center",
    },
    container:{
        paddingBottom:48,
    }
})

const Service = () => {
    const classes = styles()
    return (
        <div className={classes.root}>

            <div>
               <div className={classes.container}>
               <p className={classes.para}>What I Do ?</p>
                <h2 className={classes.heading}>Service</h2>
               </div>
                <Grid container spacing={2}>
                    <ServiceCard
                    image={pencilLogo}
                    heading="Adipisicing"
                    para='Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
                    />
                     <ServiceCard
                    image={responsiveLogo}
                    heading="Sapiente"
                    para='Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
                    />
                     <ServiceCard
                    image={toolboxLogo}
                    heading="Placeat"
                    para='Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
                    />
                     <ServiceCard
                    image={analyticsLogo}
                    heading="Iusto"
                    para='Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
                    />

                </Grid>
            </div>

        </div>
    )
}

export default Service