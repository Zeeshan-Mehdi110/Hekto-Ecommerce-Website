import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { globalStyles } from "../../globalStyle";
import ProductCardVertical from "../common/ProductCardVertical";
import TrendingProduct1 from '../../static/images/TrendingProduct1.png'
import TrendingProduct2 from '../../static/images/TrendingProduct2.png'
import TrendingProduct3 from '../../static/images/TrendingProduct3.png'
import TrendingProduct4 from '../../static/images/TrendingProduct4.png'
import discountProduct1 from '../../static/images/discountProduct1.png'
import discountProduct2 from '../../static/images/discountProduct2.png'
import discountProduct3 from '../../static/images/discountProduct3.png'
import discountProduct4 from '../../static/images/discountProduct4.png'
import discountProduct5 from '../../static/images/discountProduct5.png'
import { Link } from "react-router-dom";
const TrendingProducts = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
return (
    <Box mt={9}>
        <Box mt={5} textAlign="center">
            <Typography variant="h1" sx={{ ...globalStyles.mainHeading, fontSize: !isMobile ? '42px' : '32px' }}>Trending Products</Typography>
        </Box>
        <Box display={'flex'}>
            <ProductCardVertical 
            productImage={TrendingProduct1} 
            isMobile={isMobile} 
            imageBoxStyle={globalStyles.imageBoxStyle} 
            productPrice={'$26.00 '}
            productDiscount={'$42.00'}
            productTitle={'Cantilever chair'}/>
            <ProductCardVertical 
            productImage={TrendingProduct2} 
            isMobile={isMobile} 
            imageBoxStyle={globalStyles.imageBoxStyle} 
            productPrice={'$26.00 '}
            productDiscount={'$42.00'}
            productTitle={'Cantilever chair'}/>
            <ProductCardVertical 
            productImage={TrendingProduct3} 
            isMobile={isMobile} 
            imageBoxStyle={globalStyles.imageBoxStyle} 
            productPrice={'$26.00 '}
            productDiscount={'$42.00'}
            productTitle={'Cantilever chair'}/>
            <ProductCardVertical 
            productImage={TrendingProduct4} 
            isMobile={isMobile} 
            imageBoxStyle={globalStyles.imageBoxStyle} 
            productPrice={'$26.00 '}
            productDiscount={'$42.00'}
            productTitle={'Cantilever chair'}/>
        </Box>
        <Grid container justifyContent={'space-between'} mt={5} mb={5} >
            <Grid item xs={12} mb={2} md={4} style={{'backgroundColor':'var(--light-pink)','height':'250px'}} >
                <Box>
                    <Box p={2} >
                        <Typography fontSize={'24px'} fontWeight={'600'} fontFamily={'var(--josefin)'} fontStyle={'normal'} >23% off in all products</Typography>
                        <Typography fontSize={'16px'} fontWeight={'600'} fontFamily={'var(--lato)'} fontStyle={'normal'} color='red' ><Link to='#' style={{color : 'red'}} > Shop Now </Link></Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'} >
                        <Box width={'170px'} display={'flex'} justifyContent={'flex-end'} >
                            <img src={discountProduct1} alt='img' width={'100%'} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} mb={2} md={4} style={{'backgroundColor':'var(--light-blue)','height':'250px'}} >
                <Box>
                    <Box p={2} >
                        <Typography fontSize={'24px'} fontWeight={'600'} fontFamily={'var(--josefin)'} fontStyle={'normal'} >23% off in all products</Typography>
                        <Typography fontSize={'16px'} fontWeight={'600'} fontFamily={'var(--lato)'} fontStyle={'normal'}  ><Link to='#' style={{color : 'red'}} >View Collection</Link></Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'} mt={4} paddingRight={1} >
                        <Box width={'170px'} display={'flex'} justifyContent={'flex-end'} >
                            <img src={discountProduct2} alt='img' width={'120%'} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}  md={3}  style={{'height':'250px'}} >
                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'} >
                    <Box display={'flex'} flexDirection={'row'} sx={{height : {sm : '75px',xs : '80px'} }} >
                        <Box width={'35%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{'backgroundColor':'var(--light-blue2)'}} >
                            <img src={discountProduct3} alt='img' maxWidth={'100%'} height={'100%'} />
                        </Box>
                        <Box  padding={1} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                            <Typography fontFamily={'var(--josefin)'} fontSize={'14px'} >Executive Seat chair</Typography>
                            <Typography fontFamily={'var(--josefin)'} fontSize={'12px'} fontWeight={'400'} >$32.00</Typography>
                        </Box>
                    </Box>
                    <Box  display={'flex'} flexDirection={'row'} sx={{height : {sm : '75px',xs : '80px'} }} >
                        <Box width={'35%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{'backgroundColor':'var(--light-blue2)'}}  >
                            <img src={discountProduct4} alt='img' maxWidth={'100%'} height={'100%'} />
                        </Box>
                        <Box padding={1} display={'flex'} justifyContent={'center'} flexDirection={'column'} >
                            <Typography fontFamily={'var(--josefin)'} fontSize={'14px'} >Executive Seat chair</Typography>
                            <Typography fontFamily={'var(--josefin)'} fontSize={'12px'} fontWeight={'400'} >$32.00</Typography>
                        </Box>
                    </Box>
                    <Box  display={'flex'} flexDirection={'row'} sx={{height : {sm : '75px',xs : '80px'} }} >
                        <Box width={'35%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{'backgroundColor':'var(--light-blue2)'}} >
                            <img src={discountProduct5} alt='img' maxWidth={'100%'} height={'100%'} />
                        </Box>
                        <Box padding={1} display={'flex'} justifyContent={'center'} flexDirection={'column'} >
                            <Typography fontFamily={'var(--josefin)'} fontSize={'14px'} >Executive Seat chair</Typography>
                            <Typography fontFamily={'var(--josefin)'} fontSize={'12px'} fontWeight={'400'} >$32.00</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
)
}

export default TrendingProducts
