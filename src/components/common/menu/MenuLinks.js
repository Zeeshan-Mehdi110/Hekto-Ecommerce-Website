import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { globalStyles } from '../../../globalStyle';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuLinks({ options,label,navbarMenu }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {
                options ? <div>
                    <Button
                        sx={{ ...globalStyles.btnMenu ,...navbarMenu}}
                        endIcon={<KeyboardArrowDownIcon />}
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {label}
                    </Button>

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
                        {
                            options.map((option, index) => { //options array as prop
                                return (
                                    <MenuItem key={index} onClick={handleClose}><Link  style={{ ...globalStyles.menuOptions , ...navbarMenu }}  to={option.to} >{option.label}</Link></MenuItem>
                                )
                            })
                        }
                    </Menu>
                </div> : <Button
                        sx={{ ...globalStyles.btnMenu ,...navbarMenu }}
                        onClick={handleClick} >
                            {label}
                        </Button>
            }
        </div>
    );
}