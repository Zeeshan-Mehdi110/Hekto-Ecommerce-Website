import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import { globalStyles } from '../../../globalStyle';
import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 

export default function MenuLinks({ options, label, navbarMenu }) {
    // Declare state variable for menu anchor element
    const [anchorEl, setAnchorEl] = useState(null);
    
    // Create a boolean value to check whether the menu is open or not
    const open = Boolean(anchorEl); 
    
    // Handle click event to set the menu anchor element
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); 
    };
    
    // Handle close event to reset the menu anchor element
    const handleClose = () => {
        setAnchorEl(null); 
    };

    return (
        <div>
            {options ? (
                // If options prop exists, render a button with a dropdown menu
                <div>
                    {/* Render a button with a dropdown menu */}
                    <Button
                        sx={{ ...globalStyles.btnMenu, ...navbarMenu }}
                        endIcon={<KeyboardArrowDownIcon />}
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {label}
                    </Button>
                    
                    {/* Render a dropdown menu with options */}
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}>
                        {options.map((option, index) => (
                            <MenuItem key={index} onClick={handleClose}>
                                <Link
                                    style={{ ...globalStyles.menuOptions, ...navbarMenu }}
                                    to={option.to}
                                >
                                    {option.label}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            ) : (
                // If options prop does not exist, render a simple button without a dropdown menu
                <Button sx={{ ...globalStyles.btnMenu, ...navbarMenu }} onClick={handleClick}>
                    {label}
                </Button>
            )}
        </div>
    );
}
