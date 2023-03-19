import { MailOutline } from "@mui/icons-material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Button, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { globalStyles } from "../../../globalStyle";
import PositionedMenu from "./PositionedMenu";
export default function Header() {
    return (
        <Grid container sx={{ ...globalStyles.gridContainer }} >
            <Grid item md={1} ></Grid>
            <Grid md={5} item display={'flex'} justifyContent='space-evenly' >
                <Box>
                    <MailOutline sx={{ ...globalStyles.headerIcon }} />
                    <a href="sd" style={{ ...globalStyles.links }} >mhhasanul@gmail.com</a>
                </Box>
                <Box>
                    <PhoneInTalkIcon sx={{ ...globalStyles.headerIcon }} />
                    <a href="sfa" style={{ ...globalStyles.links }} >(12345)67890</a>
                </Box>
            </Grid>
            <Grid md={1} item ></Grid>
            <Grid md={5} item display={'flex'}  >
                <PositionedMenu label='English' options={englishOptions} /> {/*Mui Positioned components*/}
                <PositionedMenu label='USD' options={usdOptions} />
                <Button sx={{ ...globalStyles.btnMenu }} endIcon={<PersonOutlineIcon />}>
                    Login
                </Button>
                <Button sx={{ ...globalStyles.btnMenu }} endIcon={<FavoriteBorderIcon />}>
                    Whishlist
                </Button>
                <IconButton sx={{ ...globalStyles.btnMenu }} >
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}
const englishOptions = ['Urdu', 'Pashto', 'English']
const usdOptions = ['Erench', 'Idaale', 'Sadjad', 'Oblige', 'Qamar']
