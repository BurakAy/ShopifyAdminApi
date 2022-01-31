import React, {useCallback, useState} from "react";
import NumberField from "../components/numberfield";
import { Heading, Page, Card, FormLayout, Button } from "@shopify/polaris";

async function GetDiscounts() {
  // Load the current session to get the `accessToken`.
  const session = await Shopify.Utils.loadCurrentSession(req, res);
  // Create a new client for the specified shop.
  const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
  // Use `client.get` to request the specified Shopify REST API endpoint, in this case `price rules`.
  const data = await client.get({
    path: 'price_rules',
  });

  console.log(data);
} 

const Index = () => {

  return(
  <Page narrowWidth>
    <Card title="Discount Code Configuration" sectioned>
      <FormLayout>
        <NumberField></NumberField>
        <Button primary onClick={() => console.log('clicked')}>Save</Button>
      </FormLayout>
    </Card>
  </Page>
  )
  };

export default Index;
