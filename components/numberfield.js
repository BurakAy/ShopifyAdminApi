import React, {useCallback, useState} from 'react';
import {TextField} from '@shopify/polaris';

export default function NumberField() {
  const [value, setValue] = useState('1');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <TextField
      label="Percentage (%)"
      type="number"
      value={value}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}