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
    imageBoxStyle: {
        width: '209px',
        height: '236px',
        backgroundColor: 'var(--product-background-hover)',
    },

    discountItemHeading: {
        fontFamily: 'var(--josefin)',
        fontSize: "30px",
        lineHeight: "132%",
        letterSpacing: "0.015em",
        color: "var(--off-blue)",
        margin: "10px 0 ",
        fontWeight: "bold",
    },
    discountedItemSubHeading: {
        fontFamily: 'var(--josefin)',
        fontSize: "21px",
        lineHeight: "30px",
        letterSpacing: "0.015em",
        color: "var(--pink)",
        margin: "10px 0 ",
    },
    discountedItemDescription: {
        fontFamily: 'var(--lato)',
        fontStyle: "normal",
        fontHeight: 400,
        fontSize: "16px",
        lineHeight: "30px",
        letterSpacing: "0.02em",
        color: "var(--light-gray)",
    },
    discountedItemDescriptionPoints: {
        fontFamily: 'var(--lato)',
        fontStyle: "normal",
        fontHeight: 400,
        fontSize: "15px",
        lineHeight: "30px",
        letterSpacing: "0.02em",
        color: "var(--light-gray)",
    },
    Btn: {
        borderRadius: 0,
        color: "var(--white)",
        padding: "15px 48px",
        marginTop: "20px",
        backgroundColor: 'var(--pink)',
        '&:hover': {
            backgroundColor: 'var(--pink)',
        },
        '&:focus': {
            backgroundColor: 'var(--pink)',
        },
    },
    btn: {
        borderRadius: 0,
        color: "var(--white)",
        padding: { md: "12px 40px", xs: '5px 10px' },
        fontFamily: 'var(--josefin)',
        backgroundColor: 'var(--pink)',
        '&:hover': {
            backgroundColor: 'var(--pink)',
        },
        '&:focus': {
            backgroundColor: 'var(--pink)',
        },

    },
    btnText: {
        fontFamily: 'var(--josefin)',
        fontSize: '17px',
        lineHeight: '20px',
        letterSpacing: '0.02em',
        color: '#FFFFFF',
    },
    updatesHeading: {
        fontFamily: 'var(--josefin)',
        fontSize: '35px',
        lineHeight: '155%',
        color: '#151875',
        textAlign: 'center',
        letterSpacing: '0.0015em'
    },
    latestBlogsHeading: {
        fontFamily: 'Josefin Sans',
        fontSize: '18px',
        color: '#151875',
        fontStyle: "600",
        margin: "20px 0"
    },
    latestBlogDescription: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontHeight: 400,
        fontSize: '16px',
    },
    latestBlogAuthor: {
        fontFamily: 'Josefin Sans',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#151875',
    },
    latestBlogButton: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '30px',
        textDecoration: ' underline',
        marginBottom: "20px"
    },
    breaCrumbsHeading: {
        "fontFamily": 'var(--josefin)',
        "fontSize": {xs : "28px" , md : '36px'},
        "lineHeight": "42px",
        "color": "#101750",
        "fontWeight": "600",
        
    },
    breaCrumbsLink: {
        "my": 2,
        "color": 'var(--pink)',
        "display": 'block',
        'fontSize': '16px',
        "fontFamily": "var(--lato)",
        'fontWeight': '500',
        'textDecoration': 'none',
    },
    breadcrumbsBox : {
        "padding" : { md : "72px" } ,
        "paddingTop" : {xs : "40px"},
        "paddingBottom" : { xs :"40px"}
    }
}