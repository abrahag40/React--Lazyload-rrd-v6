import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCar";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface ProductImgProps {
    img?: string;
    className?: string;
    style?: CSSProperties
}

export const ProductImage = ({ img = '', className }: ProductImgProps) => {

    const { product } = useContext( ProductContext )
    let imgToShow: string

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img 
            className={ ` ${ styles.productImg } ${ className } ` } 
            src={ imgToShow } 
            alt="Product"
        />
    )
}