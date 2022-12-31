import { PayloadAction } from "@reduxjs/toolkit";
import { Dispatch, SetStateAction } from "react";

export interface IRating {
  rate: number;
  count: number;
}

export interface IGoods {
  id?: number;
  price: number;
  category?: string;
  rating: IRating;
  image: string;
  title?: string;
  description?: string;
  quantity: number
}

export interface IGoodsInCart {
  id?: number;
  price: number;
  category?: string;
  image: string;
  title?: string;
  description?: string;
  quantity: number
}

export interface IAddGood {
  state: IGoods[],
  action: PayloadAction<IGoods>
}

export interface IRemoveGood {
  state: IGoods[],
  action: PayloadAction<{id: number}>
}

export interface TypeOut {
  ref: any,
  isShow: boolean,
  setIsShow: Dispatch<SetStateAction<boolean>>
  //initIsShow: boolean
}