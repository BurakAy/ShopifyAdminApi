import React, {useCallback, useState, useEffect} from "react";
import NumberField from "../components/numberfield";
import { Heading, Page, Card, FormLayout, Button } from "@shopify/polaris";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const Index = () => {
  const [codes, setCodes] = useState([]);

  const queryDiscountCodes = gql`
    {
        priceRules(first: 10) {
            edges {
                node {
                    title
                }
            }
        }
    }`

  let data = useQuery(queryDiscountCodes)

  const getCodes = () => {
    const discountCodes = data.data.priceRules.edges.map(element => { 
      return element.node.title
    });
    setCodes(discountCodes)
    console.log('clicked')
  };

  return(
  <Page narrowWidth>
    <Card title="Discount Codes" sectioned>
      <FormLayout>
        <Button primary onClick={getCodes}>Get Discount Codes</Button>
        { codes.map(element => { 
          return <pre>{ element }</pre>
        })}
      </FormLayout>
    </Card>
  </Page>
  )
};

export default Index;
