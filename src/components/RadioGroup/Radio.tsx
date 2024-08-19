import React from 'react';
import { useController, Control } from 'react-hook-form';

interface RadioProps {
  name: string;
  value: string | number;
  label: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  disabled?: boolean;
  classes?: {
    label?: string;
    root?: string;
  };
  id?: string;
}

const Radio: React.FC<RadioProps> = ({
  name,
  value,
  label,
  control,
  disabled,
  classes = {},
  id
}) => {
  const {
    field: { onChange, onBlur, ref, value: fieldValue }
  } = useController({
    name,
    control,
    defaultValue: ''
  });

  return (
    <label className={classes.root} htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={fieldValue === value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        disabled={disabled}
        className="hidden"
      />
      <div className={`${classes.label} flex items-center cursor-pointer`}>
        <span
          className={`w-4 h-4 inline-block rounded-full border-2 border-gray-300 mr-2 ${
            fieldValue === value ? 'bg-indigo-600 border-indigo-600' : ''
          }`}></span>
        {label}
      </div>
    </label>
  );
};

export default Radio;
