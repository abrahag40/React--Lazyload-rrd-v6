import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import useShoppingCart from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'
import { products } from '../data/products';

const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map( product => (
                        <ProductCard 
                            key={ product.id }
                            product={ product }
                            className="bg-dark"
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-img" />
                            <ProductTitle className="text-white" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">

                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product }
                            className="bg-dark"
                            style={{ width: '100px' }}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-img" />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

export default ShoppingPage
