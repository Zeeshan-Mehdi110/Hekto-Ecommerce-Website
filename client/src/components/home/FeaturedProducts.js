import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { themeStyles } from "../../themeStyles";
import ProductCardVertical from "../commonComponents/ProductCardVertical";
import Slider from "react-slick";
import { useSelector } from "react-redux";

function FeaturedProducts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const featuredProducts = useSelector(({ home: { data } }) => data?.featuredProducts || []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    arrows: false
  };

  if (!featuredProducts.length) {
    return (
      <Box mt={5} textAlign="center">
        <Typography variant="h1" sx={{ ...themeStyles.mainHeading, fontSize: !isMobile ? '42px' : '32px' }}>No Featured Products Available</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box mt={5} textAlign="center">
        <Typography variant="h1" sx={{ ...themeStyles.mainHeading, fontSize: !isMobile ? '42px' : '32px' }}>Featured Products</Typography>
      </Box>
      <Slider key={isMobile ? "mobile" : "desktop"} {...settings}>
        {featuredProducts.map((product) => (
          <ProductCardVertical
            viewDetailsLink={`/products/details/${product._id}`}
            key={product._id}
            productImage={product.productPictures && product.productPictures.length > 0 ? process.env.REACT_APP_BASE_URL + `content/products/${product._id}/${product.productPictures[0]}` : null}
            isMobile={isMobile}
            productTitle={product.name}
            productPrice={product.sale_price}
          />
        ))}
      </Slider>
    </>
  );
}

export default FeaturedProducts;
