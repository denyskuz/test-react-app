import React from 'react';
import { Control } from 'react-hook-form';
import Radio from './Radio';

interface Item {
  key: string | number;
  label: React.ReactNode;
  value: string | number;
}

interface RadioGroupProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  items: Item[];
  disabled?: boolean;
  classes?: {
    root?: string;
    radioContainer?: string;
    radioLabel?: string;
  };
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  control,
  items,
  disabled,
  classes = {}
}) => {
  return (
    <div className={classes.root}>
      {items.map((item) => (
        <Radio
          key={item.value}
          name={name}
          value={item.value}
          label={item.label}
          control={control}
          disabled={disabled}
          classes={{
            root: classes.radioContainer,
            label: classes.radioLabel
          }}
          id={`${name}-${item.value}`}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
