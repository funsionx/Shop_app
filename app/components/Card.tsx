import Image from "next/image";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { IGoods, IRating } from "../interfaces";
import s from "../styles/Card.module.scss";
import { useActions } from "../utils/hooks/useActions";
import { useTypedSelector } from "../utils/hooks/useTypedSelector";
import Rating from "./Rating";
import {FaHeart} from 'react-icons/fa'

const Card: FC<IGoods> = ({ category, title, price, image, rating, id }) => {
  const { addToCart } = useActions();

  const [count, setCount] = useState(0);
  return (
    <div className={s.card}>
      <div className={s.image}>
        <Image src={image} alt={"test"} width={180} height={150} />
      </div>

      <main className={s.info}>
        <section className={s.info__top}>
          <div className={s.category}>{category}</div>
          <div className={s.rightSide}>
            <Rating rating={rating} image={""} price={0} quantity={0} />
          </div>
        </section>

        <section className={s.info__title}>{title}</section>

        <section className={s.info__price}>
          {Math.round(price * 70)} RUB / шт.
        </section>
      </main>
      
      <footer className={s.bottom_line}>
        
          <button
            onClick={() =>
              addToCart({
                title,
                image,
                price,
                id
              })
            }
            className={s.cardButton}
          >
            В корзину
          </button>
       
        <button className={s.fav}><FaHeart/></button>
      </footer>
    </div>
  );
};

export default Card;
