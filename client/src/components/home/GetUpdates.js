import { Box, Button, Grid, Typography } from '@mui/material';
import { globalStyles } from '../../globalStyle';
import getUpdateImage from '../../static/images/getUpdate/getUpdateImage.png';

const GetUpdates = () => {
    return (
        <Box mt={5} mb={5} display="flex" justifyContent='center' sx={{ "backgroundImage" : `url(${getUpdateImage})`,'backgroundPosition':'center' }}>
        <Grid container maxWidth={'xl'} sx={{ 'height':'462px' }}>
            <Box sx={{'width':'550px','marginX':'auto','marginY':'auto'}}  >
                <Box>
                    <Typography sx={{ ...globalStyles.updatesHeading }}>Get Latest Update By Subscribe Our Newsletter</Typography>
                </Box>
                <Box textAlign={'center'} >
                    <Button sx={{ ...globalStyles.Btn }}>Shop Now</Button>
                </Box>
            </Box>
        </Grid>
        </Box>
    );
};

export default GetUpdates;
