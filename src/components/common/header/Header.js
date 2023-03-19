import { MailOutline } from "@mui/icons-material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './header.css'
export default function Header() {
    return (
        <Box className= 'header-box' >
            <Grid container className="grid-container" >
            <Grid md={2} ></Grid>
            <Grid md={4} display={'flex'} justifyContent='space-evenly' flexDirection={'row'}  >
                <Box className='content-box' >
                <Typography variant="body1">
                <MailOutline className="header-icon" />
                <a href="sd" >mhhasanul@gmail.com</a>
                </Typography>
                </Box>
                <Box className='content-box' >
                <Typography variant="body1" >
                <PhoneInTalkIcon className="header-icon" />
                <a href="sfa" >(12345)67890</a>
                </Typography>
                </Box>
            </Grid>
            <Grid md={6} >
            </Grid>
            </Grid>
        </Box>
    )
}
