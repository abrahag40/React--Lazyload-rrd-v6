import { useContext } from "react"
import { ProductContext } from "./ProductCar"
import styles from "../styles/styles.module.css";
import { ProdTitleProps } from "../interfaces/interfaces";

export const ProductTitle = ({ title, className, style }: ProdTitleProps) => {

    const { product } = useContext( ProductContext )

    return(
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        > 
            { title ? title : product.title }
        </span>
    )
}