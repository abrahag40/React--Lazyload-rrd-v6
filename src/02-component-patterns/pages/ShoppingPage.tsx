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
                className="bg-dark"
                initialValues={{
                  count: 0,
                  maxCount: 15,
                }}
            >
              {
                ( { reset, increaseBy, maxCount, isMaxCountReached, count } ) => (
                  <>
                    <ProductImage className="custom-img" />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                    <button onClick={reset}> Reset</button>
                    <button onClick={() => increaseBy(-2)}> -2</button>
                    {
                      !isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2</button>
                    }
                    <span> { `${count} ${maxCount}` } </span>
                  </>
                )
              }
            </ProductCard>
        </div>
    )
}

export default ShoppingPage
