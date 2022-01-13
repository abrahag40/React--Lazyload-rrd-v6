import { CSSProperties, ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCar";
import { ProductImgProps } from "../components/ProductImage";
import { ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title:  ( Props: ProdTitleProps) => JSX.Element,
    Image:  ( Props: ProductImgProps) => JSX.Element,
    Buttons:( Props: ProductButtonsProps) => JSX.Element,
}

export interface ProdTitleProps {
    className?: string;
    title?: string;
    style?: CSSProperties
}