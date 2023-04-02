import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--lato)',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                },
            },
        },
    },
});

export const globalStyles = {

    gridContainer: {
        backgroundColor: 'var(--voilet)',
        height: "44px",
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f1f1f1',
        fontSize: '16px'
    },
    mainHeading: {
        fontFamily: 'Josefin Sans',
        fontSize: "42px",
        lineHeight: "49px",
        color: "#1A0B5B",
        fontWeight: '700'
    },
    headerIcon: {
        marginRight: "10px",
        verticalAlign: "middle",
        fontSize: "16px",
    },
    links: {
        fontFamily: "var(--josifin)",
        textDecoration: "none",
        color: "#F1F1F1",
        fontWeight: '600'
    },
    btnMenu: {
        color: "#F1F1F1",
        fontSize: "15px",
        fontWeight: "600",
        fontFamily: 'var(--josifin)',
        fontStyle: 'normal',
        textTransform: 'none' // sets text to all lowerCase
    },
    menuOptions: {
        color: '#000',
        "textDecoration": "none"
    },
    navbarMenu: {
        color: "black",
        fontSize: "16px",
        fontWeight: "400",
        fontFamily: 'var(--lato)',
        fontStyle: 'normal',
        textTransform: 'none' // sets text to all lowerCase
    },
    headerSearchInputIcon: {
        border: 0,
        borderRadius: 0,
        backgroundColor: 'var(--pink)',
        '&:hover': {
            backgroundColor: 'var(--pink)',
        },
        '&:focus': {
            backgroundColor: 'var(--pink)',
        },
    },
    productTitle: {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '22px',
        color: 'var(--pink)',
    },
    productPrice: {
        fontFamily: 'var(--josefin)',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '17px',
        color: 'var(--off-blue)',
    },
    productCode: {
        fontFamily: 'var(--josefin)',
        fontSize: '14px',
        lineHeight: '16px',
        color: 'var(--off-blue)',
    },
    singleTab: {
        fontFamily: "var(--lato)!important",
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '22px',
        textTransform: 'capitalize',
    },
    uniqueFeature: {
        fontFamily: 'var(--josefin)',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: " 0.02em",
        color: '#151875',

    },
    uniqueFeaturePrice: {
        fontFamily: 'var(--lato)',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#151875',
    },
}