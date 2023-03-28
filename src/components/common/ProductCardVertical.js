import { Box, Paper, Typography } from "@mui/material";
import { globalStyles } from "../../globalStyle";
export default function ProductCardVertical({productImage}) {
    return (
        <Box>
            <Paper sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)', borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                    width: '100%',
                    height: '236px',
                backgroundColor : 'var(--productbackground)'
            }}>
                <img style={{ maxWidth : '100%','height':'auto' }} src={productImage} alt='img1' />
            </Box>
            <Box textAlign='center' mb={2} >
                <Typography varinat='h5' sx={{ ...globalStyles.productTitle }}>Cantilever chair</Typography>
                <Typography>Code - Y523201</Typography>
                <Typography>$42.00</Typography>
            </Box>
                </Paper>
        </Box>
    )
}
