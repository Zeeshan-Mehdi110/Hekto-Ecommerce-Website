import { MailOutline } from "@mui/icons-material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from './header.module.css'
export default function Header() {
    return (
        <Box className= {styles.headerBox} >
            <Grid container className={styles.gridContainer} >
            <Grid md={2} ></Grid>
            <Grid md={4} display={'flex'} justifyContent='space-evenly' flexDirection={'row'}  >
                <Box className={styles.contentBox} >
                <Typography variant="body1">
                <MailOutline className={styles.headerIcon} />
                <a href="sd" className={styles.links} >mhhasanul@gmail.com</a>
                </Typography>
                </Box>
                <Box className={styles.contentBox} >
                <Typography variant="body1" >
                <PhoneInTalkIcon className={styles.headerIcon} />
                <a href="sfa" className={styles.links} >(12345)67890</a>
                </Typography>
                </Box>
            </Grid>
            <Grid md={6} >
            </Grid>
            </Grid>
        </Box>
    )
}
