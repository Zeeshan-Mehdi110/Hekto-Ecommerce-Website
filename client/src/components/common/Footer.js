import { Link } from 'react-router-dom';
import { Typography, Button, Grid, OutlinedInput, InputAdornment, FormControl, InputLabel, useMediaQuery, Box, Container } from '@mui/material';
import { useTheme } from '@emotion/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { globalStyles } from '../../globalStyle';





function Footer() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Box sx={{
                backgroundColor: '#F4F6F8',
                padding: '40px 20px 0 20px'
            }}>
                <Container maxWidth={"md"} disableGutters>
                    <Grid container justifyContent={isMobile ? "center" : "start"} >
                        <Grid item md={5} marginBottom={isMobile ? 5 : 0} textAlign={isMobile ? "center" : "start"}>
                            <Typography variant="h1" sx={{...globalStyles.footerLogo}}>
                                Hekto
                            </Typography>

                            <FormControl sx={{ margin: "5px 0", width: isMobile ? '100%' : '80%' }} variant="outlined">
                                <OutlinedInput
                                    sx={{
                                        ...globalStyles.footerInput,
                                        paddingRight: "0",
                                        "& fieldset": {
                                            border: "none !important",
                                            borderColor: "transparent !important"
                                        }
                                    }}
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button disableElevation variant="contained" sx={{...globalStyles.footerButton}}>
                                                <Typography sx={{...globalStyles.footerButtonText}}>Subscribe</Typography>
                                            </Button>
                                        </InputAdornment>
                                    }
                                    placeholder="Enter Email"
                                    size='small'
                                    fullWidth={isMobile ? true : false}
                                />
                            </FormControl>
                            <Typography sx={{...globalStyles.footerAddress}}>
                                123 Main Street, New York, NY 10001
                            </Typography>
                        </Grid>
                        <Grid container item md={7} justifyContent={isMobile ? "center" : "start"} spacing={2}>
                            <Grid item xs={6} sm={6} md={4} sx={{...globalStyles.footerSection}}>
                                <Typography variant="h2" sx={{...globalStyles.footerHeading}}>
                                    Categories
                                </Typography>
                                <div style={{...globalStyles.footerLinks}}>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Laptops & Computers
                                    </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Cameras & Photography
                                    </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Smart Phones & Tablets
                                    </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Video Games & Consoles
                                    </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Waterproof Headphones
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} sx={{...globalStyles.footerSection}}>
                                <Typography variant="h2" sx={{...globalStyles.footerHeading}}>
                                    Customer Care
                                </Typography>
                                <div style={{...globalStyles.footerLinks}}>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        My Account                        </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Discount                        </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Returns                        </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Orders History                        </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Order Tracking                        </Link>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} display={isMobile ? "none" : "block"} sx={{...globalStyles.footerSection}}>
                                <Typography variant="h2" sx={{...globalStyles.footerHeading}}>
                                    Pages
                                </Typography>
                                <div style={{...globalStyles.footerLinks}}>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Blog
                                    </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Browse the Shop</Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Category
                                    </Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Pre-Built Pages</Link>
                                    <Link to="/" style={{...globalStyles.footerLink}}>
                                        Visual Composer Elements
                                    </Link>

                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
            <Box sx={{ background: "#E7E4F8" }} py={isMobile ? 0 : 1}>
                <Container maxWidth={"md"} disableGutters>
                    <Grid container alignItems={"center"}>
                        <Grid item md={6} xs={12} mt={isMobile ? 2 : 0} textAlign={isMobile ? "center" : "start"}>
                            <Typography sx={{...globalStyles.footerCopyRightText}}>
                                &copy; Hekto - All Rights Reserved
                            </Typography>
                        </Grid>
                        <Grid item md={6}  xs={12} my={isMobile ? 1 : 0} display={"flex"}  justifyContent={isMobile ? "center" : "end"}>
                            <Box display={"flex"} alignItems={"center"} >
                            <FacebookIcon sx={{...globalStyles.footerSocialIcon}} />
                            <InstagramIcon sx={{...globalStyles.footerSocialIcon}}  />
                            <TwitterIcon sx={{...globalStyles.footerSocialIcon}}  />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
export default Footer;