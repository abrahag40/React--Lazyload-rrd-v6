import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Hola mundos'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className="bg-dark"
                >
                    <ProductImage className="custom-img" />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className="bg-dark"
                    style={{
                        backgroundColor: 'red',
                    }}
                >
                    <ProductImage className="custom-img" />
                    <ProductTitle 
                        className="text-white"
                        style={{
                            fontWeight: 'bold'
                        }}
                    />
                    <ProductButtons 
                        className="custom-buttons" 
                        style={{ 
                            display: 'flex',
                            justifyContent: 'end'
                     }} />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage
