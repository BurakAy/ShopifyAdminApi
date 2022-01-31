import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const GetPriceRule = () => { 
    const queryCode = gql`
    {
        priceRules(first: 10) {
            edges {
                node {
                    title
                }
            }
        }
    }`

    let data = useQuery(queryCode)

    return data
};

export default GetPriceRule;