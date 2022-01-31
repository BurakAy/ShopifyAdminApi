import { gql } from "apollo-boost";

export const GetPriceRule = gql`
    {
        priceRules(first: 10) {
            edges {
                node {
                    title
                }
            }
        }
    }
`;