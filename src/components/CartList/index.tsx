import { Product } from "../../common/types/product";
import { CartEmpty } from "../CartEmpty"
import { CartItem } from "../CartItem"
import Typography from "../Typography";
import Styles from "./CartList.module.css"

type CartListProps = {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
};

export const CartList = ({cartItems, removeFromCart}: CartListProps) => (
  <div className={Styles.cartItems}>
    <Typography
      variantStyle="body-large-bold"
    >
      Detalhes da compra
    </Typography>
  { cartItems?.length > 0 ? (
    cartItems.map((item) => (
    <CartItem item={item}  removeFromCart={removeFromCart} />
  ))) : (
  <CartEmpty />
  )}
  </div>
);