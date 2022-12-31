import Image from "next/image";
import { FC } from "react";
import { BsCart, BsTrash, BsX } from "react-icons/bs";

import { IGoods, IGoodsInCart } from "../interfaces";
import { useActions } from "../utils/hooks/useActions";
import { useOutside } from "../utils/hooks/useOutside";
import { useTypedSelector } from "../utils/hooks/useTypedSelector";
import CardInCart from "./CardInCart";
import PlaceOrder from "./PlaceOrder";
import Total from "./Total";

const Cart: FC = () => {
  const { ref, isShow, setIsShow } = useOutside(false);
  const { cart } = useTypedSelector((state) => state.cart);

  const { removeItem, decrementQuantity, incrementQuantity } = useActions();

  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <BsX /> : <BsCart />}
      </button>

      {isShow && (
        <div
          style={{ minHeight: "45%" }}
          ref={ref}
        >
          {cart?.length ? (
            <>
              {cart?.map((g: IGoods) => (
                <div
                key={`Cart item: ${g.id}`}
                className='flex items-center justify-between bg-green-100 rounded-lg p-4 mb-4'
              >
                <div className='w-3/4 flex items-center'>
                  <div className='mr-4'>
                    <Image
                      src={g.image}
                      alt={'pic'}
                      width='33'
                      height='48'
                      className='rounded-lg'
                    />
                  </div>
                  <div className='text-sm mr-4 w-3/4 '>
                    <div className='overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-green-900 mb-1'>
                      {g.title}
                    </div>
                    <div className='text-green-800'>${g.price}</div>
                    <button onClick={() => decrementQuantity(g.id)}>-</button>
          <p>{g.quantity}</p>
          <button onClick={() => incrementQuantity(g.id)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeItem( g.id )}>
                  <BsTrash className='text-green-600' />
                </button>
              </div>
              ))}
              <Total />
            </>
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
