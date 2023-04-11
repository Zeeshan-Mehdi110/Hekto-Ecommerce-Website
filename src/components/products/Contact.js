import { Container, Grid, Typography, Box, Button, Checkbox, TextField } from "@mui/material"
import BreadCrumbs from "../common/products/BreadCrumbs"
import contact1 from "../../static/images/contact/contact1.png"
import contact2 from "../../static/images/contact/contact2.png"
import contact3 from "../../static/images/contact/contact3.png"
import contact4 from "../../static/images/contact/contact4.png"
import contact5 from "../../static/images/contact/contact5.png"
const Contact = () => {
  const breadCrumbs = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
  ]

  return (
    <Box>
      <Container maxWidth={'xl'} disableGutters sx={{ 'background': 'var(--bread-crumbs)' }}  >
        <BreadCrumbs breadCrumbs={breadCrumbs} active={"Shipping"} />
      </Container>
      <Container maxWidth={"md"} disableGutters >
        <Grid container mt={9} mb={9}   >
          <Grid item md={7} xs={12} mr={'20px'} sx={{"backgroundColor":'#F8F8FD'}} >
            <Box px={3} py={8} >
              <Box display={"flex"} justifyContent={"space-between"} mb={2} >
                <Box>
                  <Typography fontSize={'18px'} fontFamily={"var(--josefin)"} fontWeight={700} >Contact Information</Typography>
                </Box>
                <Box display={"flex"} >
                  <Typography>Already have an account?</Typography>
                  <Typography>Log in</Typography>
                </Box>
              </Box>
              <Box mb={2}>
                <TextField fullWidth style={{ "borderBottom": "2px solid #E8E6F1" }} label="Email or mobile phone number" variant="standard" />
              </Box>
              <Box mb={5} display={"flex"} alignItems={"center"} >
                <Checkbox size="small" color="success" defaultChecked />
                <Typography fontFamily={"var(--josefin)"} fontSize={"10px"} >Keep me up to date on news and excluive offers</Typography>
              </Box>
              <Box mt={9} mb={2} >
                  <Typography fontSize={'18px'} fontFamily={"var(--josefin)"} fontWeight={700} >Shipping address</Typography>
              </Box>
              <Box mb={2} display={"flex"} justifyContent={"space-between"} >
                <Box width={"265px"} >
                <TextField fullWidth style={{ "borderBottom": "2px solid #E8E6F1" }} label="First name (optional)" variant="standard" />
                </Box>
                <Box width={"265px"}>
                <TextField fullWidth style={{ "borderBottom": "2px solid #E8E6F1" }} label="Last name" variant="standard" />
                </Box>
              </Box>
              <Box mb={2}>
                <TextField fullWidth style={{ "borderBottom": "2px solid #E8E6F1" }} label="Appaetnentment,suit,e.t.c (optinal)" variant="standard" />
              </Box>
              <Box mb={2}>
                <TextField fullWidth style={{ "borderBottom": "2px solid #E8E6F1" }} label="City" variant="standard" />
              </Box>
              <Box mb={2} display={"flex"} justifyContent={"space-between"} >
                <Box width={"265px"} >
                <TextField fullWidth style={{ "borderBottom": "2px solid #E8E6F1" }} label="Bangladesh" variant="standard" />
                </Box>
                <Box width={"265px"}>
                <TextField fullWidth style={{ "borderBottom": "2px solid #E8E6F1" }} label="Postal Code" variant="standard" />
                </Box>
              </Box>
              <Box mt={14} >
                <Button variant='contained' style={{ 'backgroundColor': 'var(--pink)', 'borderRadius': 0, 'padding': '6px 30px', 'fontFamily': 'Josefin Sans', 'fontSize': '16px', 'letterSpacing': '0.02em' }} >Continue Shipping</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} sx={{ 'marginTop': { xs: '30px', md: "0px" } }} display={"flex"} flexDirection={"column"} >
            <Grid item md={12} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={1} pb={1} borderBottom={"1px solid #E1E1E4"} >
              <Grid item md={9} display={"flex"}   >
                <Box display={"flex"} justifyContent={'space-between'} >
                  <Box width={'84px'} >
                    <img src={contact1} alt="img1" width={"100%"} />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={'space-evenly'} >
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"}  >Ut diam consequat</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Color : Brown</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Size : XL</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} >
                <Box display={"flex"} justifyContent={"flex-end"} >
                  <Box>
                    <Typography>$ 32.00</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid><Grid item md={12} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={1} pb={1} borderBottom={"1px solid #E1E1E4"} >
              <Grid item md={9} display={"flex"}   >
                <Box display={"flex"} justifyContent={'space-between'} >
                  <Box width={'84px'} >
                    <img src={contact2} alt="img1" width={"100%"} />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={'space-evenly'} >
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"}  >Ut diam consequat</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Color : Brown</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Size : XL</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} >
                <Box display={"flex"} justifyContent={"flex-end"} >
                  <Box>
                    <Typography>$ 32.00</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={12} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={1} pb={1} borderBottom={"1px solid #E1E1E4"} >
              <Grid item md={9} display={"flex"}   >
                <Box display={"flex"} justifyContent={'space-between'} >
                  <Box width={'84px'} >
                    <img src={contact3} alt="img1" width={"100%"} />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={'space-evenly'} >
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"}  >Ut diam consequat</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Color : Brown</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Size : XL</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} >
                <Box display={"flex"} justifyContent={"flex-end"} >
                  <Box>
                    <Typography>$ 32.00</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={12} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={1} pb={1} borderBottom={"1px solid #E1E1E4"} >
              <Grid item md={9} display={"flex"}   >
                <Box display={"flex"} justifyContent={'space-between'} >
                  <Box width={'84px'} >
                    <img src={contact4} alt="img1" width={"100%"} />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={'space-evenly'} >
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"}  >Ut diam consequat</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Color : Brown</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Size : XL</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} >
                <Box display={"flex"} justifyContent={"flex-end"} >
                  <Box>
                    <Typography>$ 32.00</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={12} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={1} pb={1} borderBottom={"1px solid #E1E1E4"} >
              <Grid item md={9} display={"flex"}   >
                <Box display={"flex"} justifyContent={'space-between'} >
                  <Box width={'84px'} >
                    <img src={contact5} alt="img1" width={"100%"} />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={'space-evenly'} >
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"}  >Ut diam consequat</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Color : Brown</Typography>
                    <Typography color="#000000" fontSize={"14px"} fontFamily={"var(--josefin)"} lineHeight={"16px"} >Size : XL</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} >
                <Box display={"flex"} justifyContent={"flex-end"} >
                  <Box>
                    <Typography>$ 32.00</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid item md={12} mt={3} >
              <Box sx={{ "backgroundColor": "#F4F4FC" }} p={3} pb={0} >
                <Box mb={5} display={"flex"} justifyContent={"space-between"} borderBottom={"2px solid #E8E6F1"} >
                  <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} lineHeight={"20px"} >Subtotals :</Typography>
                  <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} >$219.00</Typography>
                </Box>
                <Box mb={5} display={"flex"} justifyContent={"space-between"} borderBottom={"2px solid #E8E6F1"} >
                  <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} lineHeight={"20px"} >Totals :</Typography>
                  <Typography fontSize={"16px"} fontFamily={"var(--lato)"} color="#1D3178" fontWeight={600} >$325.00</Typography>
                </Box>
                <Box mb={4} display={"flex"} flexDirection={'column'}   >
                  <Box mb={3} display={"flex"} alignItems={"center"} >
                    <Checkbox size="small" color="success" defaultChecked />
                    <Typography fontFamily={"var(--josefin)"} fontSize={"10px"} >Shipping & taxes calculated at checkout</Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}  >
                    <Button variant="contained" style={{ "backgroundColor": "#19D16F", "width": "100%", "color": "white", "fontSize": "14px", "fontFamily": "var(--lato)", "fontWeight": "700", "fontStyle": "normal" }} >Proceed To Checkout</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
