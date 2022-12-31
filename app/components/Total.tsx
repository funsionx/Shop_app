import { useTypedSelector } from "../utils/hooks/useTypedSelector";

function Total() {
  const { cart } = useTypedSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({cart.length} items) :{" "}
          <section>
            {Math.round(getTotal().totalPrice * 70)} RUB / шт.
          </section>
        </p>
      </div>
    </div>
  );
}

export default Total;
