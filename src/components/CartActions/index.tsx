import Button from "../Button"
import Styles from "./CartActions.module.css"

type CartActionsProp = {
    handleRedirect: () => void
}

export const CartActions = ({handleRedirect}: CartActionsProp) => (
<div className={Styles.cartActions}>
    <Button
      onClick={handleRedirect}
      variant="secondary"
    >Continuar comprando</Button>
    <Button
      onClick={() => console.log("pagamento")}
    >Ir para pagamento</Button>
  </div>
)