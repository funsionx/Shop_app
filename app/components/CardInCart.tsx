import Image from "next/image";
import { FC } from 'react'
import { IGoods, IGoodsInCart } from '../interfaces'
import { useActions } from '../utils/hooks/useActions'
import { BsTrash } from 'react-icons/bs'

const CardInCart:FC<IGoods> = ({id, image, title, price, quantity=0}) => {
  const { removeItem, decrementQuantity, incrementQuantity } = useActions();

  return (
    <div className="cartItem">
      <Image src={image} alt={"test"} width={180} height={150} />
      <div>
        <p>{title}</p>
        <p>
        <section>
          {Math.round(price * 70)} RUB / шт.
        </section>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => decrementQuantity(id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => incrementQuantity(id)}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => removeItem(id)}>
            <BsTrash />
        </button>
      </div>
    </div>
  )
}

export default CardInCart