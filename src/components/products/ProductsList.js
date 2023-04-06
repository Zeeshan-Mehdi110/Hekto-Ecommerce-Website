import { Box ,Container } from "@mui/material"
import BreadCrumbs from "../common/products/BreadCrumbs"
import ProductsFilters from "../common/ProductsFilters"
import ProductsListVertical from "./ProductsListVertical"

const ProductsList = () => {
    return (
        <>
            <Container maxWidth={'xl'} disableGutters sx={{ 'background': 'var(--bread-crumbs)' }}  >
                <BreadCrumbs breadCrumbs={breadCrumbs} />
            </Container>
            <Container maxWidth={'md'} disableGutters  >
                <ProductsFilters />
                <ProductsListVertical />
            </Container>
        </>
    )
}
const breadCrumbs = [
    { to: 'home', label: 'Home' },
    { to: 'pages', label: 'Products' },
]

export default ProductsList
