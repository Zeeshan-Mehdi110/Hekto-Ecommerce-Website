import * as React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
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
import { Link, Outlet } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import { AddCircleOutline, PeopleOutline } from '@mui/icons-material';
import { LinearProgress } from '@mui/material';
import ListDropdown from '../common/ListDropdown';
import GroupIcon from '@mui/icons-material/Group';
import { connect } from 'react-redux';
import SimpleSnackbar from '../library/SnackBar';
import AvatarMenu from '../library/AvatarMenu';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';

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

const AppBarWrapper = styled(AppBar, {
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

const DrawerWrapper = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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

const drodownsList = [
  {
    title: 'Categories',
    icon: <CategoryIcon />,
    items: [{ to: '/admin/categories/add', text: 'Add Category', icon: <AddCircleOutline /> }, { to: '/admin/categories/', text: 'Categories', icon: <Inventory2Icon /> }],
  },
  {
    title: 'Brands',
    icon: <CategoryIcon />,
    items: [{ to: '/admin/brands/add', text: 'Add Brand', icon: <AddCircleOutline /> }, { to: '/admin/brands/', text: 'Brands', icon: <Inventory2Icon /> }],
  },
  {
    title: 'Products',
    icon: <PeopleOutline />,
    items: [{ to: '/admin/products/add', text: 'Add Product', icon: <AddCircleOutline /> }, { to: '/admin/products', text: 'Products', icon: <Inventory2Icon /> }],
  },
  {
    title: 'Users',
    icon: <ListIcon />,
    items: [{ to: '/admin/users/add', text: 'Add user', icon: <AddCircleOutline /> }, { to: '/admin/users', text: 'Users', icon: <GroupIcon /> }],
  },
];

function Sidebar({ progressBar, configuration }) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const handleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarWrapper position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                color: 'var(--pure-white)',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {configuration.siteName} Admin Panel
            </Typography>
          </Box>
          <AvatarMenu />
        </Toolbar>
      </AppBarWrapper>
      <DrawerWrapper variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: 'center' }}>
          <img
            width={50}
            src={process.env.REACT_APP_BASE_URL + `content/site/${configuration.siteLogo}`}
            alt="Hekto"
          />
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/admin/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key="dashboard" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {drodownsList.map((dropdown, index) => (
            <ListDropdown icon={dropdown.icon} title={dropdown.title} key={index} items={dropdown.items} collapseOpen={collapseOpen} handleCollapse={handleCollapse} />
          ))}
        </List>
      </DrawerWrapper>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {progressBar && <LinearProgress color="secondary" />}
        <Outlet />
        <SimpleSnackbar />
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  progressBar: state.progressBar.loading,
  configuration: state.auth.configuration,
});

export default connect(mapStateToProps)(Sidebar);
