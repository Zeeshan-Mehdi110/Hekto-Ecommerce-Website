import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import {globalStyles} from '../../globalStyle'

export default function ShopProductCard({ productImage, isMobile }) {

    return (
        <Grid item md={4}>
            <Box m={!isMobile ? 1 : 2}>
                <Paper square elevation={3} sx={{
                    borderTopRightRadius: '5px', borderTopLeftRadius: '5px',
                    '&:hover .imageBox': {
                        backgroundColor: 'white',
                    },
                    '&:hover .iconsContainer': {
                        visibility: 'visible'
                    },
                    ':hover': {
                        border: '2px solid #2F1AC4',
                        borderRadius: 0,
                        boxShadow: 0
                    },
                    '&:hover .saleTagBox': {
                        visibility: 'visible'
                    }
                    

                }}>
                    <Box className="imageBox" display="flex" justifyContent="center" alignItems="center" sx={{
                        width: '100%',
                        height: '236px',
                        backgroundColor: 'var(--product-background-hover)',
                        position: 'relative',
                    }}>
                        <img
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                            src={productImage} />
                            {/* Top Left Sale Tag */}
                                <Box className="saleTagBox" sx={{ visibility: 'hidden' }}>
                                    <span className="saleTag" style={{
                                        position: 'absolute',
                                        top: 15,
                                        left: 10,
                                        fontFamily: 'var(--josefin)',
                                        backgroundColor: 'var(--off-navy-blue)',
                                        color: '#ffffff',
                                        fontSize: '14px',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        width: '60px',
                                        textAlign: 'center',
                                        transform: 'rotate(-20deg) skew(-10deg) translateX(-5px)'
                                    }}>Sale</span>
                    </Box>
                        <Box  className="iconsContainer" sx={{
                            position: 'absolute',
                            bottom: 7,
                            left: 10,
                            visibility: 'hidden',
                            display: 'flex',
                            flexDirection : 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            zIndex: 2,
                        }}>
                            <AddShoppingCartIcon className="productHoverIcons" sx={{ padding: '10px',color:'#2F1AC4', '&:hover': { backgroundColor: '#EEEFFB',  borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.05)' } }} />
                            <FavoriteBorderIcon className="productHoverIcons" sx={{ padding: '10px',color:'#2F1AC4', '&:hover': { backgroundColor: '#EEEFFB',  borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.05)' } }} />
                            <ZoomInIcon className="productHoverIcons" sx={{ padding: '10px',color : '#2F1AC4', '&:hover': { backgroundColor: '#EEEFFB',  borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.05)' } }} />
                        </Box>

                        {/* Add button */}
                        <Box position="absolute" bottom={0} transform="translateX(-50%)" py={1} visibility="hidden" className="detailsButton">
                            <Button variant="contained" sx={{ padding: '8px 13px', borderRadius: '2px', backgroundColor: '#08D15F', color: '#FFFFFF', fontFamily: 'var(--josefin)', fontSize: '12px', '&:hover': { backgroundColor: '#08D15F', color: '#FFFFFF' } }} size="small">
                                View Details
                            </Button>
                        </Box>

                    </Box>
                    <Box display="flex" alignItems="baseline" pt={3} px={1} justifyContent='space-between' className="detailsBox" paddingBottom={1}>
                        <Typography className="productTitle" sx={{ ...globalStyles.productTitle, color: 'var(--off-blue)', fontSize: '16px',fontFamily : 'var(--josefin)','fontWeight':'normal' }}>Comfort Handy Craft</Typography>
                        <Typography className="productOtherDetails" sx={{...globalStyles.productPrice, fontFamily: 'var(--josefin)'}}>$42.00</Typography>
                        <Typography className="productOtherDetails" sx={{...globalStyles.productPrice, fontFamily: 'var(--josefin)', textDecorationLine: 'line-through', color: 'var(--pink)', fontSize: '12px', lineHeight: '14px'}}>$42.00</Typography>
                    </Box>
                </Paper>
            </Box>
        </Grid>
    )
}
