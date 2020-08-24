import { useState } from 'react';

export const useInput = (defaultValue: string) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};
