import { ShoppingBagIcon } from "../../common/icons/ShoppingBagIcon";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Field from "../../components/Field";
import Typography from "../../components/Typography";
import Styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";

import { Product } from "../../common/types/product";
import { CartItem } from "../../components/CartItem";
import { CartSumary } from "../../components/CartSumary";
import { CartEmpty } from "../../components/CartEmpty";
import { CartList } from "../../components/CartList";

type CartPageProps = {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartItems, removeFromCart }: CartPageProps) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = cartItems.length > 0 ? 8 : 0;

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <main className="container">
      <div className={Styles.cartTitle}>
        <Typography variant="h4">Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <CartList cartItems={cartItems} removeFromCart={removeFromCart} />
        <CartSumary cartItems={cartItems} total={total} freight={freight} handleRedirect={handleRedirect} />
      </section>
    </main>
  );
};

export default CartPage;
