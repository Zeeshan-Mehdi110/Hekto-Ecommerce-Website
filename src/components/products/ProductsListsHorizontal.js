import { Grid, IconButton, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import shop5 from "../../static/images/products/shop_list_products/shop5.png"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { globalStyles } from '../../globalStyle';

function ProductsListsHorizontal() {
  return (

      <Grid item md={12} mb={3} sx={{ ...globalStyles.horizontalproductsListContainer }} display="flex">
        <Box sx={{
          width: "284px",
          height: "197px"
        }}>
          <img width={"auto"} height={"100%"} src={shop5} />
        </Box>
        <Box ml={3} sx={{...globalStyles.horizontalProductsListDetailArea}}>
          <Typography sx={{ ...globalStyles.horizontalProductsListTitle }}>Dictum morbi</Typography>
          <Box display={"flex"}alignItems={"center"}>
            <Box display={"flex"} mr={"10px"}>
              <Typography sx={{ ...globalStyles.horizontalProductsListPrice }}>$26.00</Typography>
              <Typography sx={{ ...globalStyles.horizontalProductsListDiscountedPrice }}>$56.00</Typography>
            </Box>
            <Rating name="HorizontalProductReadOnly" sx={{ fontSize: "15px" }} value={4} readOnly />
          </Box>
          <Box width={"90%"}>
            <Typography sx={{ ...globalStyles.horizontalProductsListDescription }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{...globalStyles.horizontalProductsListButtons}}> <AddShoppingCartIcon sx={{...globalStyles.horizontalProductsListIcons}} /> </IconButton>
            <IconButton sx={{...globalStyles.horizontalProductsListButtons}}> <FavoriteBorderIcon sx={{...globalStyles.horizontalProductsListIcons}} /> </IconButton>
            <IconButton sx={{...globalStyles.horizontalProductsListButtons}}> <ZoomInIcon sx={{...globalStyles.horizontalProductsListIcons}} /> </IconButton>
          </Box>
        </Box>
      </Grid>

  )
}

export default ProductsListsHorizontal