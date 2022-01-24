import { ProductCard as ProductCardHOC } from './ProductCar';
import { ProductCardHOCProps, InitialValues } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
} )

export default ProductCard