import React, {useCallback, useState} from "react";
import NumberField from "../components/numberfield";
import { Heading, Page, Card, FormLayout, Button } from "@shopify/polaris";

import { GetPriceRule } from "../admin_api/price-rule";

const Index = () => {
  const getCodes = () => {
    console.log(GetPriceRule)
  }

  return(
  <Page narrowWidth>
    <Card title="Discount Code Configuration" sectioned>
      <FormLayout>
        <NumberField></NumberField>
        <Button primary onClick={() => getCodes()}>Save</Button>
      </FormLayout>
    </Card>
  </Page>
  )
};

export default Index;
