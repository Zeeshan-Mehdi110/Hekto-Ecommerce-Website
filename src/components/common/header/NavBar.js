import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box,Grid, Toolbar, IconButton, Typography, Menu, Button, MenuItem, TextField } from '@mui/material';
import logo from '../../../static/images/logo/logo.png'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { globalStyles } from '../../../globalStyle';
import MenuLinks from '../menu/MenuLinks';
import { Link } from 'react-router-dom';

// Defining the Navigation Bar component that takes "options" as a parameter
function NavBar({ options }) {

    // Setting up the state for the Navigation Menu
    const [anchorElNav, setAnchorElNav] = useState(null);

    // Handling opening of Navigation Menu 
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // Handling closing of Navigation Menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{ 'backgroundColor': '#ffffff' }} position="static">
            <Grid container sx={{'alignItems':'center','justifyContent': { xs : 'space-around',sm : 'center'}}} >
            <Grid item md={2} >
                <Toolbar disableGutters sx={{'justifyContent':{sm : 'center',xs : 'space-between'}}}  >
                        <Typography noWrap href="/" sx={{ display: 'flex'}}>
                            <Link to='/' ><img src={logo} alt='img' /></Link>
                        </Typography>
                        {/* Mobile */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon sx={{'color':'black'}} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {options.map((option, index) => (
                                    <MenuItem key={index} >
                                        <Typography textAlign="center">
                                        <Link style={{ my: 2, color: 'black', display: 'block','fontSize':'16px','fontWeight':'400','textDecoration':'none' }} to={option.path} >{option.label}</Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        
                </Toolbar>
            </Grid>
            <Grid item md={5}>
            <Box   sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'},'alignItems':'center',color:'black' }}>
                <MenuLinks label={'Home'}  options={optionsArr} navbarMenu={globalStyles.navbarMenu} />
                {options.map((page,index) => (
                    <Button
                        style={globalStyles.navbarMenu}
                        key={index}
                        onClick={handleCloseNavMenu}
                        
                    >
                        <Link style={{ my: 2, color: 'black', display: 'block','fontSize':'16px','fontWeight':'400','textDecoration':'none' }} to={page.path} >{page.label}</Link>
                    </Button>
                ))}
            </Box>
            </Grid>
            <Grid item md={3}  sx={{ display: { xs: 'none', md: 'flex'} }}  >
            <Box display={'flex'} >
                    <TextField type='search' size="small" variant="outlined" sx={{borderRadius: 10,'border':'1px solid #E7E6EF'}} />
                    <Button sx={{...globalStyles.headerSearchInputIcon}} variant="contained" size="large" ><SearchIcon  /> </Button>
            </Box>
            </Grid>
            </Grid>
        </AppBar>
    );
}

export default NavBar;

const optionsArr = [
    { to: 'urdu', label: 'Urdu' },
    { to: 'french', label: 'French' },
    { to: 'spanish', label: 'Spanish' },
    { to: 'hindi', label: 'Hindi' },
]