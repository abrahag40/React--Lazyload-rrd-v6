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
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number ) => void;
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

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: ( value: number ) => void;
  reset: () => void;

}