import { Box, Button, Container, Typography } from "@mui/material"
import { globalStyles } from "../../../globalStyle"
import { Link } from "react-router-dom"

const BreadCrumbs = ({breadCrumbs}) => {
    return (
        <Container maxWidth={"md"}  >
            <Box sx={{...globalStyles.breadcrumbsBox}} >
                <Box>
                    <Typography sx={{...globalStyles.breaCrumbsHeading }} >Shop Grid Default</Typography>
                </Box>
                <Box>
                    {
                        breadCrumbs.map((obj,index) => (
                            <Button style={globalStyles.navbarMenu}key={index} >
                                <Link style={{...globalStyles.breaCrumbsLink,"color":'black'}} to={obj.path} >{obj.label}.</Link>
                            </Button>
                        ))
                    }
                    <Button style={globalStyles.navbarMenu} >
                        <Link style={{...globalStyles.breaCrumbsLink}} >Shop Grid Default</Link>
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default BreadCrumbs
