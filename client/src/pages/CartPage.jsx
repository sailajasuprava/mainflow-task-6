import EmptyCartUI from "../components/EmptyCartUI";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { useEffect } from "react";

function CartPage() {
  const { cart, fetchCartItems } = useCart();
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {!cart.length ? (
              <EmptyCartUI />
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
