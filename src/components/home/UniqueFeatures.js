import { Button, Grid, Typography,Box } from "@mui/material";
import sofa2 from '../../static/images/sofa2.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { globalStyles } from "../../globalStyle";
const UniqueFeatures = () => {
return (
    <Grid container maxWidth={'xl'}>
        <Grid item md={5} xs={12} sx={{ 'paddingRight' : { md : '20px' } , 'marginTop' : { xs : '15px' } }} >
            <img src={sofa2} alt='sofa2' width={'100%'} />
        </Grid>
        <Grid item md={7} xs={12}  sx={{ display: 'flex', textAlign: {xs: 'center', md: 'left'}, 'alignItems': 'center' }}>
            <Box dipslay="flex" alignItems="center">
                <Typography variant="h3"  sx={{ 'color': 'var(--off-blue)', 'fontFamily': 'var(--josefin)', 'fontStyle': 'normal', 'fontWeight': '700', 'fontSize': '35px', 'lineHeight': '132%','letterSpacing':'0.0015em'  }}>
                    Unique Features Of leatest & Trending Poducts
                </Typography>
                <Typography sx={{'lineHeight': '40px'}}>
                    <FiberManualRecordIcon sx={{fontSize: "15px", color: 'var(--pink)' }} />
                    All frames constructed with hardwood solids and laminates
                </Typography>
                <Typography sx={{'lineHeight': '40px'}}>
                    <FiberManualRecordIcon sx={{fontSize: "15px", color: 'var(--pink)' }} />
                    All frames constructed with hardwood solids and laminates
                </Typography>
                <Box display={'flex'} margin={'20px 0px'} sx={{'justifyContent':{ xs : 'center' , md : 'start' }}} >
                    <Button variant='contained' style={{ 'backgroundColor': 'var(--pink)', 'borderRadius': 0, 'padding': '16px 40px', 'fontFamily': 'var(--josefin)', 'fontSize': '17px', 'letterSpacing': '0.02em','marginRight':'20px' }} >Add To Cart</Button>
                    <Box>
                        <Typography sx={{...globalStyles.uniqueFeature}}>B&B Italian Sofa</Typography>
                        <Typography sx={{...globalStyles.uniqueFeaturePrice}}>$32.00</Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    </Grid>
)
}

export default UniqueFeatures
