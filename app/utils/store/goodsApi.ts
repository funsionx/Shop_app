import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGoods } from "../../interfaces";
//import { IDog, Response } from "../interfaces";

const baseUrl = "https://fakestoreapi.com/products";

export const goodsApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
  //   getClothesByTitle: builder.query<IClothes[], string>({
  //     query: (breed: string) => ({
  //       url: `breed/${breed}`,
  //     }),
  //     //transformResponse: (response: Response<IDog>) => response.dogs,
  //   }),
    getGoods: builder.query<IGoods[], number>({
      query: (limit) => `?limit=${limit}`,
    }),
  }),
});

export const { useGetGoodsQuery } = goodsApi
