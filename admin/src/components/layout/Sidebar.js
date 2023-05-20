import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../static/logo.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ListIcon from "@mui/icons-material/List";
import CategoryIcon from '@mui/icons-material/Category';
import { AccountCircle, AddCircleOutline, PeopleOutline } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import ListDropdown from '../common/ListDropdown';
import GroupIcon from '@mui/icons-material/Group';
import { authActionsType } from '../../store/actions/authActions';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const dropdownList = [
  {
    title: 'Products',
    icon: <PeopleOutline />,
    items: [{ to: '/admin/products/add', text: 'Add Product', icon: <AddCircleOutline /> }]
  },
  {
    title: 'Users',
    icon: <ListIcon />,
    items: [{ to: '/admin/users/add', text: 'Add user', icon: <AddCircleOutline /> }, { to: '/admin/users', text: 'Users', icon: <GroupIcon /> }]
  },
  {
    title: 'Categories',
    icon: <CategoryIcon />,
    items: [{ to: '/admin/category/add', text: 'Add Category', icon: <AddCircleOutline /> }, { to: '/admin/categories', text: 'Categories', icon: <GroupIcon /> }]
  }
];

export default function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const name = useSelector((state) => state?.auth?.user?.name)


  const handleDrawerOpen = () => {
    setOpen(!open);
  };


  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const handleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };
  const handleLogOut = () => {
    dispatch({ type : authActionsType.SIGN_OUT })
    localStorage.removeItem("token")
    navigate("/admin")
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background: "var(--purple)", fontFamily: "var(--josefin)" }} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5, color:"var(--pure-white)"
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Hekto Admin Panel
          </Typography>
          <IconButton
            onClick={handleLogOut}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            sx={{ "marginLeft": "auto", "marginRight": "30px", "&:hover .sinupBox": { visibility: "visible" } }}
            // onClick={handleMenu}
            color="inherit"
          >
            <Box visibility={"hidden"} className="sinupBox" sx={{ "color": "white", "fontSize": '15px', "fontFamily": "var(--josefin)" }}>Logout</Box>
            {
              name ? <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                      {name.charAt(0).toUpperCase()}
                    </Avatar> : 
                    <Link   to='/' style={{ "textDecoration": "none", "color": "white" }} ><AccountCircle /></Link>
            }
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: 'center' }}>
          {theme.direction === 'rtl' ? <img src={logo} alt="Hekto" /> : <img src={logo} alt="Hekto" />}
        </DrawerHeader>
      <Divider />
      <List>
        <Link
          to="/admin/settings"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem key={"configuration"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Configuration" />
            </ListItemButton>
          </ListItem>
        </Link>
        {
          dropdownList.map((dropdown, index) => (
            <ListDropdown icon={dropdown.icon} title={dropdown.title} key={index} items={dropdown.items} />
          ))
        }

      </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <Outlet />
      </Box>
    </Box>
  );
}