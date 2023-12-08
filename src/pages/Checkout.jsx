import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.CartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid pag-8 md:grid-cols-2 item-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
