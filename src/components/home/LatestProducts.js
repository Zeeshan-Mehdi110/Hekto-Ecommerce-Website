import { Box, GlobalStyles, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShopProductCard from "../common/ShopProductCard";
import LeatestProduct1 from '../../static/images/LeatestProducts1.png'
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
        <div>
            <Box mt={5} textAlign="center">
                <Typography variant="h1" sx={{ ...GlobalStyles.mainHeading, fontSize: !isMobile ? '42px' : '32px', fontWeight: 'bold' }}>Featured Products</Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderColor: 'divider', 'justifyContent': 'space-evenly', 'display': 'flex' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
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
                        <Tab style={globalStyles.singleTab} label="Special Offer" id={`simple-tabpanel-2`} />
                    </Tabs>
                </Box>
                <div role="tabpanel" hidden={value !== 0} aria-labelledby={`simple-tab-${0}`} >
                    <Box sx={{ p: 3 }}>
                        <Grid container columnSpacing={1}>
                            <ShopProductCard
                                columnNumber={4}
                                productImage={LeatestProduct1}
                                isMobile={isMobile}
                                title="Comfort product"
                                price="$42"
                                discount="$42"
                                saleText="50% OFF"
                            />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                        </Grid>
                    </Box>
                </div>
                <div role="tabpanel" hidden={value !== 1} aria-labelledby={`simple-tab-${1}`} >
                    <Box sx={{ p: 3 }}>
                        <Grid container columnSpacing={1}>
                            <ShopProductCard
                                columnNumber={4}
                                productImage={LeatestProduct1}
                                isMobile={isMobile}
                                title="Comfort product"
                                price="$42"
                                discount="$42"
                                saleText="50% OFF"
                            />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                        </Grid>
                    </Box>
                </div>
                <div role="tabpanel" hidden={value !== 2} aria-labelledby={`simple-tab-${2}`}>
                    <Box sx={{ p: 3 }}>
                        <Grid container columnSpacing={1}>
                            <ShopProductCard
                                columnNumber={4}
                                productImage={LeatestProduct1}
                                isMobile={isMobile}
                                title="Comfort product"
                                price="$42"
                                discount="$42"
                                saleText="50% OFF"
                            />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                        </Grid>
                    </Box>
                </div>
                <div role="tabpane4" hidden={value !== 3} aria-labelledby={`simple-tab-${3}`}>
                    <Box sx={{ p: 3 }}>
                        <Grid container columnSpacing={1}>
                            <ShopProductCard
                                columnNumber={4}
                                productImage={LeatestProduct1}
                                isMobile={isMobile}
                                title="Comfort product"
                                price="$42"
                                discount="$42"
                                saleText="50% OFF"
                            />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                            <ShopProductCard productImage={LeatestProduct1} title="Comfort product" discount="$42" price="$42" saleText="50% OFF" isMobile={isMobile} />
                        </Grid>
                    </Box>
                </div>
            </Box>

        </div>
    )
}
