import { Container } from "@mui/material";
import FeaturedProduct from "./FeaturedProduct";
import InfoSlider from "./InfoSlider";

export default function Home() {
    return (
        <>
            <InfoSlider />
            <Container maxWidth='md' disableGutters >
                <FeaturedProduct />
            </Container>
        </>
    )
}
