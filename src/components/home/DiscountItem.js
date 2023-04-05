import { Grid, Tab, Tabs,Box,Button,Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { globalStyles } from '../../globalStyle';
import DoneIcon from '@mui/icons-material/Done';
import discountedImage from '../../static/images/discountItem/discountImage.png'
const DiscountItem = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Grid container my={3} >
            <Grid item xs={12} my={3} sx={{ display: "flex", textAlign: "center",justifyContent : 'center' }}>
                <Typography sx={{ ...globalStyles.discountItemHeading }}>Discount Item</Typography>
            </Grid>
            <Tabs style={{'margin':'0 auto'}} value={value} onChange={handleChange} aria-label="basic tabs example"
                centered
                variant={ isMobile ? 'scrollable' : 'standard' }
                scrollButtons={ isMobile ? true : false }
                allowScrollButtonsMobile={ isMobile ? true : false}
                sx={{
                    '& .Mui-selected': {
                        color: 'red',
                        fontWeight: 'bold'
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'red!important'
                    }
                }} >
                <Tab label="Wood Chair ." id={`simple-tabpanel-0`} sx={{ ...globalStyles.singleTab }} />
                <Tab label="Plastic Chair" id={`simple-tabpannel-1`} sx={{ ...globalStyles.singleTab }} />
                <Tab label="Sofa Colletion" id={`simple-tabpanel-2`} sx={{ ...globalStyles.singleTab }} />
            </Tabs>

            <div role="tabpanel" hidden={value !== 0} aria-labelledby={`simple-tab-${0}`} >
                <Grid container >
                    <Grid item md={6} sx={{ display: "flex", alignItems: "center" }} >
                        <Box>
                            <Grid item md={12} sx={{textAlign : {md : 'start', xl : 'center' }}}>
                                <Typography sx={{ ...globalStyles.discountItemHeading , textAlign : {xs : 'center',md : 'start'} }}>20% Discount Of All Products</Typography>
                                <Typography sx={{ ...globalStyles.discountedItemSubHeading , textAlign : {xs : 'center',md : 'start'} }}discountedItemSubHeading>Eams Sofa Compact</Typography>
                                <Typography sx={{ ...globalStyles.discountedItemDescription , textAlign : {xs : 'center',md : 'start'}}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</Typography>
                            </Grid>
                            <Grid container sx={{ textAlign: { md: "start", xs: "center" } }}>
                                <Grid item md={6} xs={12}>
                                    <Typography sx={{ ...globalStyles.discountedItemDescriptionPoints, alignItems: "center" }} >
                                        <DoneIcon /> Material expose like metals
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography sx={{ ...globalStyles.discountedItemDescriptionPoints, alignItems: "center" }} >
                                        <DoneIcon /> Material expose like metals
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography sx={{ ...globalStyles.discountedItemDescriptionPoints, alignItems: "center" }} >
                                        <DoneIcon /> Material expose like metals
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography sx={{ ...globalStyles.discountedItemDescriptionPoints, alignItems: "center" }} >
                                        <DoneIcon /> Material expose like metals
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ justifyContent: { md: "start", xs: "center" } }}>
                                <Button sx={{ ...globalStyles.Btn }}>Shop Now</Button>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ display: "flex", justifyContent: { md: "start", xs: "center" } }}>
                        <img width={"85%"} src={discountedImage} alt="" />
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default DiscountItem
