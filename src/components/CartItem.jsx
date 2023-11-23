import { formatPrice, generateAmountOptions } from "../utils";
import { removeItems, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = () => {
  const { cartID, title, price, image, amount, company, productColor } =
    CartItem;
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 object-cover"
      />
      {/* COLOR */}
      {/* AMOUNT */}
      {/* REMOVE */}
      {/* PRICE */}
    </article>
  );
};
export default CartItem;
