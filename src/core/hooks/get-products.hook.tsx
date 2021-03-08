import { gql, useQuery } from "@apollo/client";
import { IProduct } from "../interfaces";

const GET_PRODUCTS = gql`
  query($currency: Currency) {
    products { 
      id
      title
      image_url
      price(currency:$currency)
    }
  }
`;


export const useGetProducts = (currency = "USD"): IProduct[] | undefined => {
  const { data } = useQuery<{products: IProduct[]}>(GET_PRODUCTS, {
    variables: {
      currency
    }
  });

  return data?.products;
}