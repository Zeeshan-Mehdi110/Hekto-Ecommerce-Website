import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShopProductCard from "../common/ShopProductCard";
import latestImage1 from '../../static/images/latestImages/latestImage1.png'
import latestImage2 from '../../static/images/latestImages/latestImage2.png'
import latestImage3 from '../../static/images/latestImages/latestImage3.png'
import latestImage4 from '../../static/images/latestImages/latestImage5.png'
import latestImage5 from '../../static/images/latestImages/latestImage5.png'
import latestImage6 from '../../static/images/latestImages/latestImage6.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { globalStyles } from "../../globalStyle";

export default function LatestProducts() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box mt={5} textAlign="center">
                <Typography variant="h1" sx={{ ...globalStyles.mainHeading, fontSize: !isMobile ? '42px' : '32px', fontWeight: 'bold' }}>Latest Products</Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        centered={ !isMobile ? true : false }
                        variant={ isMobile ? 'scrollable' : 'standard' }
                        scrollButtons={ isMobile ? true : false }
                        allowScrollButtonsMobile={ isMobile ? true : false}
                        sx={{
                            '& .Mui-selected': {
                                color: 'var(--pink)',
                                fontWeight: 'bold'
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'red!important'
                            }
                        }} >
                        <Tab style={globalStyles.singleTab} label="New Arival" id={`simple-tabpanel-0`} />
                        <Tab style={globalStyles.singleTab} label="Best Seller" id={`simple-tabpannel-1`} />
                        <Tab style={globalStyles.singleTab} label="Featured" id={`simple-tabpanel-2`} />
                        <Tab style={globalStyles.singleTab} label="Special Offer" id={`simple-tabpanel-3`} />
                    </Tabs>
                </Box>
                <div hidden={value !== 0} aria-labelledby={`simple-tab-${0}`} >
                    <Grid container columnSpacing={3}>
                    <ShopProductCard
                        productImage={latestImage1}
                        title={"RevolvingChair"}
                        price={"$42.00"}
                        discount={"$65.00"}
                        saleText={"50% OFF"}
                        isMobile={isMobile}
                        columnNumber={4}
                        paperStyle={{}}
                        imgHoverStyle={{}}
                        iconHoverStyle={{}}
                        paperHoverStyle={{}}
                        saleTagHoverStyle={{}}
                        imgBoxStyle={{}}
                        imgStyle={{}}
                        saleTagStyle={{}}
                        saleBoxStyle={{}}
                        iconsStyle={{}}
                        detailsBoxStyle={{}}
                        titleStyle={{}}
                        priceStyle={{}}
                        discountStyle={{}}
                    />
                    <ShopProductCard
                        productImage={latestImage2}
                        title={"RevolvingChair"}
                        price={"$42.00"}
                        discount={"$65.00"}
                        saleText={"50% OFF"}
                        isMobile={isMobile}
                        columnNumber={4}
                        paperStyle={{}}
                        imgHoverStyle={{}}
                        iconHoverStyle={{}}
                        paperHoverStyle={{}}
                        saleTagHoverStyle={{}}
                        imgBoxStyle={{}}
                        imgStyle={{}}
                        saleTagStyle={{}}
                        saleBoxStyle={{}}
                        iconsStyle={{}}
                        detailsBoxStyle={{}}
                        titleStyle={{}}
                        priceStyle={{}}
                        discountStyle={{}}
                    />
                    <ShopProductCard
                        productImage={latestImage3}
                        title={"RevolvingChair"}
                        price={"$42.00"}
                        discount={"$65.00"}
                        saleText={"50% OFF"}
                        isMobile={isMobile}
                        columnNumber={4}
                        paperStyle={{}}
                        imgHoverStyle={{}}
                        iconHoverStyle={{}}
                        paperHoverStyle={{}}
                        saleTagHoverStyle={{}}
                        imgBoxStyle={{}}
                        imgStyle={{}}
                        saleTagStyle={{}}
                        saleBoxStyle={{}}
                        iconsStyle={{}}
                        detailsBoxStyle={{}}
                        titleStyle={{}}
                        priceStyle={{}}
                        discountStyle={{}}
                    />
                    <ShopProductCard
                        productImage={latestImage4}
                        title={"RevolvingChair"}
                        price={"$42.00"}
                        discount={"$65.00"}
                        saleText={"50% OFF"}
                        isMobile={isMobile}
                        columnNumber={4}
                        paperStyle={{}}
                        imgHoverStyle={{}}
                        iconHoverStyle={{}}
                        paperHoverStyle={{}}
                        saleTagHoverStyle={{}}
                        imgBoxStyle={{}}
                        imgStyle={{}}
                        saleTagStyle={{}}
                        saleBoxStyle={{}}
                        iconsStyle={{}}
                        detailsBoxStyle={{}}
                        titleStyle={{}}
                        priceStyle={{}}
                        discountStyle={{}}
                    />
                    <ShopProductCard
                        productImage={latestImage5}
                        title={"RevolvingChair"}
                        price={"$42.00"}
                        discount={"$65.00"}
                        saleText={"50% OFF"}
                        isMobile={isMobile}
                        columnNumber={4}
                        paperStyle={{}}
                        imgHoverStyle={{}}
                        iconHoverStyle={{}}
                        paperHoverStyle={{}}
                        saleTagHoverStyle={{}}
                        imgBoxStyle={{}}
                        imgStyle={{}}
                        saleTagStyle={{}}
                        saleBoxStyle={{}}
                        iconsStyle={{}}
                        detailsBoxStyle={{}}
                        titleStyle={{}}
                        priceStyle={{}}
                        discountStyle={{}}
                    />
                    <ShopProductCard
                        productImage={latestImage6}
                        title={"RevolvingChair"}
                        price={"$42.00"}
                        discount={"$65.00"}
                        saleText={"50% OFF"}
                        isMobile={isMobile}
                        columnNumber={4}
                        paperStyle={{}}
                        imgHoverStyle={{}}
                        iconHoverStyle={{}}
                        paperHoverStyle={{}}
                        saleTagHoverStyle={{}}
                        imgBoxStyle={{}}
                        imgStyle={{}}
                        saleTagStyle={{}}
                        saleBoxStyle={{}}
                        iconsStyle={{}}
                        detailsBoxStyle={{}}
                        titleStyle={{}}
                        priceStyle={{}}
                        discountStyle={{}}
                    />
                    </Grid>
                </div>
            </Box>

        </>
    )
}
