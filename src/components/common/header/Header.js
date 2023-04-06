import { MailOutline } from "@mui/icons-material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Button, Grid, IconButton,Box } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { globalStyles } from "../../../globalStyle";
import MenuLinks from "../menu/MenuLinks";
import NavBar from "./NavBar";
export default function Header() {
    return (
        <header>
                {/* top bar started */}
                <Box fontFamily={'var(--josifin)'}  >
                    <Grid container sx={{ ...globalStyles.gridContainer }} >
                        <Grid item md={1} xs={0} ></Grid>
                        <Grid md={5} xs={12} item display={'flex'}  alignItems={'center'} justifyContent='space-evenly' >
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
                        <Grid md={5} xs={12} item  sx={{'display': { xs : 'none' , sm : 'flex' }}} alignItems={'center'} >
                            <MenuLinks label='English' options={languageOptions} /> {/*Mui Positioned components*/}
                            <MenuLinks label='USD' options={currencyOptions} />
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
                </Box>
                {/* top bar ended */}
                {/* Navbar is started */}
                    <NavBar options={navbarOptions} />
                {/* Navbar is ended */}
        </header>
    )
}
const languageOptions = [
    { to: 'urdu', label: 'Urdu' },
    { to: 'french', label: 'French' },
    { to: 'spanish', label: 'Spanish' },
    { to: 'hindi', label: 'Hindi' },
]
const currencyOptions = [
    { to : 'euro' , label : 'Euro' },
    { to : 'bahrainiDinar' , label : 'Bahraini Dinar' },
    { to : 'omaniRial' , label : 'Omani Rial' },
    { to : 'chineseYuan' , label : 'Chinese Yuan' },
    { to : 'pakistaniRupay' , label : 'Pakistani Rupay' },
]
const navbarOptions = [
    { to: 'about', label: 'Pages',"path" : "./pages" },
    { to: 'contactUs', label: 'Products', "path" : '/products' },
    { to: 'blogs', label: 'Blog',"path" : "./blog" },
    { to: 'blogs', label: 'Shop',"path" : "./shop" },
    { to: 'blogs', label: 'Contact' , "path" : "./contacts" },
]
