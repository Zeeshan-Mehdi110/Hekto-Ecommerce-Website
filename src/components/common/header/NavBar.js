import MenuIcon from '@mui/icons-material/Menu';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Button,MenuItem,Container, TextField} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../../static/images/logo.png'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { globalStyles } from '../../../globalStyle';


function NavBar({ options })  {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{ 'backgroundColor': '#ffffff' }} position="static">
            <Container maxWidth='lg'>
                <Toolbar disableGutters >
                    <Typography
                        noWrap
                        href="/"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <img src={logo} alt='img' />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                                    <Typography textAlign="center">{option.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} alt='img' />
                    </Typography>
                    <Box   sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                        {options.map((page,index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block','fontSize':'16px','fontWeight':'400' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                    <TextField autoFocus type='search' size="small" variant="outlined" sx={{borderRadius: 10,'border':'1px solid #E7E6EF'}} />
                    <Button sx={{...globalStyles.headerSearchInputIcon}} variant="contained" size="large" ><SearchIcon  /> </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
