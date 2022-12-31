import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { IGoods, IRating } from "../interfaces";
import { useGetGoodsQuery } from "../utils/store/goodsApi";
import s from "../styles/Card.module.scss";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Rating: FC<IGoods> = ({ rating }) => {
  const stars = Array(5).fill(0);

  return (
    <>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={24}
            color={
              Math.round(rating.rate) > index ? colors.orange : colors.grey
            }
            style={{width: 10, height: 10}}
          />
        );
      })}
      <p style={{fontSize: 10}}>{rating.count} штук</p>
    </>
  );
};

export default Rating;
