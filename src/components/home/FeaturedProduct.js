import { Box, Grid, Typography } from "@mui/material";
import { globalStyles } from "../../globalStyle";
import ProductCardVertical from "../common/ProductCardVertical";
import featuredImage1 from '../../static/images/featured1.png'
import featuredImage2 from '../../static/images/featured2.png'
import featuredImage3 from '../../static/images/featured3.png'
import featuredImage4 from '../../static/images/featured4.png'
import Slider from "react-slick";

export default function FeaturedProduct() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots : false
                }
            }
        ],

    };


    return (
        <Grid mt={5}>
            <Box >
                <Typography textAlign={'center'} sx={globalStyles.mainHeading} variant='h1' >Featured Products</Typography>
            </Box>
            <Slider {...settings}>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage1} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage2} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage3} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage4} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage3} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage2} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage4} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage1} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage3} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage1} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage4} />
                </Grid>
                <Grid item>
                    <ProductCardVertical productImage={featuredImage2} />
                </Grid>
            </Slider>
        </Grid>
    );
}
