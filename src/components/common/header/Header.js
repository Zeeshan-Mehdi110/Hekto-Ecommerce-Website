import { MailOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './header.module.css'
export default function Header() {
    return (
        <Box sx={{'backgroundColor':'var(--voilet)'}} >
            <Grid container alignItems={'center'}height='44px'  >
            <Grid md={2} ></Grid>
            <Grid md={4} display={'flex'} justifyContent='space-evenly' flexDirection={'row'}  >
                <Box display={'flex'} alignItems='center' justifyContent={"center"} >
                <Typography variant="body1">
                <MailOutline style={{'color':'white','verticalAlign':'middle','marginRight':'10px'}} />
                <a style={{'color':'white','textDecoration':'none'}} href="sd" >mhhasanul@gmail.com</a>
                </Typography>
                </Box>
                <Box display={'flex'} alignItems='center' justifyContent={"center"} >
                <Typography>
                <MailOutline style={{'color':'white','verticalAlign':'middle','marginRight':'10px'}} />
                <a style={{'color':'white','textDecoration':'none'}} href="sfa" >(12345)67890</a>
                </Typography>
                </Box>
            </Grid>
            <Grid md={6} >
            </Grid>
            </Grid>
        </Box>
    )
}
