import { Button, Box, Grid, IconButton, Typography, LinearProgress } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuLink from "../menu/MenuLink";
import { themeStyles } from "../../../themeStyles";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import SnackBar from "../../library/SnackBar";
import { connect } from "react-redux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Header({ progressBar, site }) {

  const data = [
    {
      id: 'english',
      label: 'English',
      options: [
        { to: "/English", option: "English" },
        { to: "/urdu", option: "Urdu" },
        { to: "/hindi", option: "Hindi" },
      ],
      anchorEl: null,
      to: '/test',
      open: false
    },
    {
      id: 'currency',
      label: 'USD',
      options: [{ to: '/dollar', option: 'Dollar' }, { to: '/Rupees', option: 'Rupees' }, { to: '/yuan', option: 'Yuan' }],
      anchorEl: null,
      to: '/test',
      open: false
    }
  ];

  return (
    <header>
      {/* top bar: started */}
      <section>
        <Box fontFamily={"var(--josefin)"} >
          <Grid sx={themeStyles.topBar} alignItems='center' container color="var(--white)" bgcolor="var(--violet)" height="44px">
            <Grid item md={4} xs={12} display={"flex"} justifyContent={"space-around"} >
              <Box>
                <Typography fontFamily={"var(--josefin)"} variant='body1'><MailOutlineIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />{site.siteEmail}</Typography>
              </Box>
              <Box>
                <Typography fontFamily={"var(--josefin)"} variant='body1'><PhoneInTalkIcon sx={{ verticalAlign: "middle", marginRight: "10px" }} />{site.sitePhoneNumber}</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} display={"flex"} justifyContent="flex-end" >
              <Box display={'flex'}>

                <MenuLink data={data} />
                <Link to="/admin/login">
                  <Button
                    endIcon={<PersonOutlineIcon sx={{ ...themeStyles.topbarIcon }} />}
                    sx={{ ...themeStyles.btnMenu }}>
                    Login
                  </Button>
                </Link>
                <Button
                  endIcon={<FavoriteBorderIcon sx={{ ...themeStyles.topbarIcon }} />}
                  sx={{ ...themeStyles.btnMenu }}>
                  Wishlist
                </Button>
                <IconButton
                  sx={{ ...themeStyles.btnMenu, "marginLeft": "20px" }}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </section>
      {/* top bar: ended */}

      {/* navigation bar: started */}
      <Navbar />
      {/* navigation bar: ended */}

      <Box>
        <SnackBar />
        {progressBar.loading && <LinearProgress />}
      </Box>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    progressBar: state.progressBar,
    site: state.home.site
  }
}

export default connect(mapStateToProps)(Header);