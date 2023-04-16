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
    fontFamily: 'Josefin Sans',
    fontSize: '16px'
  },
  mainHeading: {
    fontSize: "42px",
    lineHeight: "49px",
    color: "#1A0B5B",
    fontWeight: '700'
  },
  headerIcon: {
    marginRight: {md : "10px", xs : "0px"},
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
    "fontSize": { xs: "28px", md: '36px' },
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
  breadcrumbsBox: {
    "padding": { md: "72px" },
    "paddingTop": { xs: "40px" },
    "paddingBottom": { xs: "40px" }
  },

  footerLogo: {
    fontFamily: 'Josefin Sans',
    fontSize: '38px !important',
    lineHeight: '45px',
    color: '#000000',
    fontWeight: "700 !important",
    marginBottom: "20px !important"
  },
  footerInput: {
    background: '#FFFFFF',
    borderRadius: '3px',
    marginRight: '10px',
  },
  footerButton: {
    backgroundColor: 'var(--pink) !important',
    borderRadius: '3px',
    '&:hover': {
      background: 'var(--pink)',
    },
  },
  footerButtonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#EEEFFB',
  },
  footerAddress: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#8A8FB9',
  },
  footerSection: {
    marginBottom: '20px',
  },
  footerHeading: {
    fontFamily: 'Josefin Sans',
    fontSize: '22px !important',
    lineHeight: '26px',
    color: '#000000',
    fontWeight: "700 !important",
    marginBottom: "20px !important"
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLink: {
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
  productListProductTitle: {
    fontFamily: 'Josefin Sans',
    fontStyle: 'normal',
    fontHeight: 700,
    fontSize: '18px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#151875',
    fontWeight: "bold"
  },
  // horizontal filters
  filterResults: {
    color: "var(--soft-blue)",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "14px",
    textAlign: "center",
  },
  filterPerPageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-around", md: "space-between" },
  },
  filterPerPageText: {
    color: "var(--off-blue-blue)",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
  },
  filterSortText: {
    color: "var(--off-blue-blue)",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
  },
  filterSearchInputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center" },
    marginTop: { xs: "20px", md: "0" },
  },
  filterViewText: {
    color: "var(--off-blue)",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    marginRight: "10px",
    display : {md : "flex", xs :"none"}
  },
  filterWindowIcon: {
    color: "var(--off-blue)",
    fontSize: "20px",
    marginRight: "5px",
    display : {md : "flex", xs :"none"}

  },
  filterSearchInput: {
    marginLeft: "20px",
    padding: "0",
    borderWidth: "1px",
    borderRadius: 0,
    borderColor: "#E7E6EF",
    "& input": {
      padding: "6px 14px",
      borderColor: "var(--off-blue)",
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#E7E6EF",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E7E6EF",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E7E6EF !important",
      borderWidth: "1px",
    },
  },

  // horizontal filters

  checkOutpageInput: {
    borderBottom: '1px solid #C1C8E1',
    '&::placeholder': { color: "#C1C8E1" },
    '& .MuiInput-underline::before': {
      borderBottom: '1px solid #C1C8E1'
    },
    '&:hover .MuiInput-underline::before': {
      borderBottom: '1px solid #C1C8E1!important'
    },
    '& .MuiInput-underline::after': {
      borderBottom: '1px solid #C1C8E1'
    },
  },

  // Product description Details Tabs Styling is Started
  productDescriptionContainer: {
    background: "var(--product-description-background)"
  },
  prductDescriptionTabsTitle: {
    fontFamily: 'Josefin Sans',
    fontSize: '18px',
    lineHeight: '28px',
    textDecorationzine: 'underline',
    color: '#151875',
    fontWeight: "bold",
    textTransform: "capitalize",

  },
  prductDescriptionHeading: {
    fontFamily: 'Josefin Sans',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#151875',
    fontWeight: "bold"
  },
  productDescriptionText: {
    fontFamily: 'Josefin Sans',
    fontSize: '16px',
    lineHeight: '29px',
    color: '#A9ACC6',
    display: 'flex',
    alignItems: "center"
  },
  productDescriptionPoints: {
    fontFamily: 'Josefin Sans',
    fontSize: '14px',
    lineHeight: '29px',
    color: '#A9ACC6',
    display: 'flex',
    alignItems: "center",
    '&:hover .MuiSvgIcon-root': {
      color: "blue"
    }
  },
  productDescriptionPointIcon: {
    color: "black",
    fontSize: '20px',
  },
  relatedProductHeading: {
    fontFamily: 'Josefin Sans',
    fontSize: '36px',
    lineHeight: '42px',
    color: '#101750',
    fontWeight: "bold",
  },

  // product detain style code is starting from here
  //product details page
  productDetailsPrice: {
    fontFamily: 'Josefin Sans',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#111C85',
    marginRight: '10px'
  },
  productDetailsDiscountedPrice: {
    fontFamily: 'Josefin Sans',
    fontSize: '14px',
    lineHeight: '16px',
    textDecoration: 'line-through',
    color: "#FF2AAA",
    marginBottom: '20px'
  },
  productDetailsDescription: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontHeight: '400',
    fontSize: '16px',
    lineHeight: '28px',
    color: '#9295AA',
    marginBottom: '20px'
  },
  productDetailsAddToCartButton: {
    backgroundColor: 'var(--pink) !important',
    borderRadius: '0',
    boxShadow: '0',
    '&:hover': {
      background: 'var(--pink)',
      boxShadow: '0'
    }
  },
  productDetailsSubTitle: {
    fontFamily: 'var(--josefin)',
    fontSize: '18px',
    lineHeight: '21px',
    fontWeight: "bold",
    color: "#0D134E"
  },
  productDetailsTotalRating: {
    fontFamily: "var(--josefin)",
    fontSize: "14px",
    lineHeight: "29px",
    textTransform: "capitalize",
    color: '#151875',
    marginLeft: '5px',
    marginBottom: '20px'
  },
}