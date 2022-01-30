import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard 
                key={ product.id }
                product={ product }
                initialValues={{
                  count: 0,
                  maxCount: 15,
                }}
            >
              {
                ( { reset, increaseBy, maxCount, isMaxCountReached, count } ) => (
                  <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                  </>
                )
              }
            </ProductCard>
        </div>
    )
}

export default ShoppingPage
