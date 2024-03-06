import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'


const styles = makeStyles({
    // root: {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     flexWrap: "wrap"
    // },
    imageContainer: {
        position: "relative",
        "&:hover $linkContainer": {
            display: "block",
            backgroundImage: " linear-gradient(to top, #e1dfed 0%, rgba(225, 223, 237, 0.7) 99%, rgba(225, 223, 237, 0.8) 100%)",
        }
    },
    linkContainer: {
        position: "absolute",
        top: "0%",
        left: 0,
        right: 0,
        bottom: "9%",
        padding: "90px 24px",
        display: "none",
    },
    heading: {
        textAlign: "center",
    },
    para: {
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: "285px",
        marginBottom: "24px",
        "&:hover": {
            "& link": {
                color: "red",
            }
        }
    }
})

interface IPortfolioCard {
    imageFirst: string,
}

const PortfolioCard = (props: IPortfolioCard) => {
    const { imageFirst } = props
    const classes = styles()
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} >
            <div>
                <div className={classes.imageContainer}>
                    <img src={imageFirst} alt="" className={classes.image} />
                    <div className={classes.linkContainer}>
                        <div>
                            <div style={{ textAlign: "center" }}>
                                <h2 className={classes.heading}>Web Designing</h2>
                                <p className={classes.para} >Category: Web Templates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Grid>

    )
}

export default PortfolioCard