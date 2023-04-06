import { Link } from 'react-router-dom';
import { Typography, Button, Grid, OutlinedInput, InputAdornment, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({

    logo: {
        fontFamily: 'Josefin Sans',
        fontSize: '38px !important',
        lineHeight: '45px',
        color: '#000000',
        marginBottom: '20px',
        fontWeight: "700 !important",
        marginBottom: "20px !important"
    },
    input: {
        background: '#FFFFFF',
        borderRadius: '3px',
        marginRight: '10px',
    },
    button: {
        backgroundColor: 'var(--pink) !important',
        borderRadius: '3px',
        '&:hover': {
            background: 'var(--pink)',
        },
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#EEEFFB',
    },
    address: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#8A8FB9',
    },
    section: {
        marginBottom: '20px',
    },
    heading: {
        fontFamily: 'Josefin Sans',
        fontSize: '22px !important',
        lineHeight: '26px',
        color: '#000000',
        marginBottom: '10px',
        fontWeight: "700 !important",
        marginBottom: "20px !important"
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '35px',
        color: '#8A8FB9',
        marginBottom: '5px',
        textDecoration: 'none',
        '&:hover': {
            color: '#FB2E86',
        },
    },
}));


function Footer() {

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item md={5}>
                <Typography variant="h1" className={classes.logo}>
                    Hekto
                </Typography>

                <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
                    <OutlinedInput
                        className={classes.input}
                        sx={{
                            paddingRight: "0",
                            "& fieldset": {
                                border: "none !important",
                                borderColor: "transparent !important"
                            }
                        }}
                        id="outlined-adornment-password"
                        endAdornment={
                            <InputAdornment position="end">
                                <Button disableElevation variant="contained" className={classes.button}>
                                    <Typography className={classes.buttonText}>Subscribe</Typography>
                                </Button>
                            </InputAdornment>
                        }
                        placeholder="asdas"
                        size='small'
                    />
                </FormControl>
                <Typography className={classes.address}>
                    123 Main Street, New York, NY 10001
                </Typography>
            </Grid>
            <Grid container item md={7} spacing={2}>
                <Grid item xs={6} sm={6} md={4} className={classes.section}>
                    <Typography variant="h2" className={classes.heading}>
                        Categories
                    </Typography>
                    <div className={classes.links}>
                        <Link to="/" className={classes.link}>
                            Laptops & Computers
                        </Link>
                        <Link to="/" className={classes.link}>
                            Cameras & Photography
                        </Link>
                        <Link to="/" className={classes.link}>
                            Smart Phones & Tablets
                        </Link>
                        <Link to="/" className={classes.link}>
                            Video Games & Consoles
                        </Link>
                        <Link to="/" className={classes.link}>
                            Waterproof Headphones
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4} className={classes.section}>
                    <Typography variant="h2" className={classes.heading}>
                        Customer Care
                    </Typography>
                    <div className={classes.links}>
                        <Link to="/" className={classes.link}>
                            My Account                        </Link>
                        <Link to="/" className={classes.link}>
                            Discount                        </Link>
                        <Link to="/" className={classes.link}>
                            Returns                        </Link>
                        <Link to="/" className={classes.link}>
                            Orders History                        </Link>
                        <Link to="/" className={classes.link}>
                            Order Tracking                        </Link>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={4} className={classes.section}>
                    <Typography variant="h2" className={classes.heading}>
                        Pages
                    </Typography>
                    <div className={classes.links}>
                        <Link to="/" className={classes.link}>
                            Blog                        </Link>
                        <Link to="/" className={classes.link}>
                            Browse the Shop                        </Link>
                        <Link to="/" className={classes.link}>
                            Category                        </Link>
                        <Link to="/" className={classes.link}>
                            Pre-Built Pages                        </Link>
                        <Link to="/" className={classes.link}>
                            Visual Composer Elements                        </Link>

                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Footer;