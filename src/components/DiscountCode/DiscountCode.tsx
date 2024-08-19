import React from 'react';
import { Controller, Control } from 'react-hook-form';

interface DiscountCodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ control, name }) => {
  const discountPattern = /^(?=.*[A-Z])(?=.*\d)[A-Z0-9]+$/;

  const generateDiscountCode = (setValue: (name: string, value: string) => void) => {
    const newCode = `DISCOUNT${Math.floor(Math.random() * 9000) + 1000}`;
    setValue(newCode, name);
  };

  return (
    <div className="mb-4 mt-4">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: 'Discount code is required',
          pattern: {
            value: discountPattern,
            message: 'Invalid code format. Only uppercase letters and numbers are allowed.'
          }
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="flex items-center">
              <input
                {...field}
                type="text"
                className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg mr-2`}
                placeholder="Enter code (e.g., DISCOUNT2024)"
              />
              <button
                type="button"
                onClick={() => generateDiscountCode(field.onChange)}
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
                Generate
              </button>
            </div>
            <p className="text-red-500 mt-1">{error?.message}</p>
          </>
        )}
      />
    </div>
  );
};

export default DiscountCode;
