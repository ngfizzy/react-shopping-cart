import { gql, useQuery } from '@apollo/client';

const GET_CURRENCIES = gql`
  query {
    currency
  }
`;


export const useGetCurrencies = (): string[] | undefined => {
  const { data } = useQuery<{currency: string[]}>(GET_CURRENCIES);

  return data?.currency;
}