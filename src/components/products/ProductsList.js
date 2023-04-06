import { Box ,Container } from "@mui/material"
import BreadCrumbs from "../common/products/BreadCrumbs"

const ProductsList = () => {
    return (
        <Container maxWidth={'xl'} disableGutters sx={{ 'background': 'var(--bread-crumbs)' }}  >
            <BreadCrumbs breadCrumbs={breadCrumbs} />
        </Container>
    )
}
const breadCrumbs = [
    { to: 'home', label: 'Home' },
    { to: 'pages', label: 'Products' },
]

export default ProductsList
