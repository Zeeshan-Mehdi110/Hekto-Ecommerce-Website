import { Container } from "@mui/material";
import FeaturedProduct from "./FeaturedProduct";
import InfoSlider from "./InfoSlider";
import LatestProducts from "./LatestProducts";
import OffersList from "./OffersList";
import UniqueFeatures from "./UniqueFeatures";

export default function Home() {
    return (
        <>
            <InfoSlider />
            <Container maxWidth='md' disableGutters >
                <FeaturedProduct />
                <LatestProducts />
                <OffersList />
            </Container>
                <UniqueFeatures />
        </>
    )
}
