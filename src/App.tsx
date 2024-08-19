import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import RadioGroup from 'components/RadioGroup';
import { variants } from 'constants/data';
import DiscountCode from 'components/DiscountCode';
import Textarea from 'components/Textarea';
import { RootState } from 'store';
import { setFormData } from 'store/actions/formActions';
import { FormValues } from 'types/form';
import { useDispatch, useSelector } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const { handleSubmit, control, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      variant: formData.variant || 'variant1',
      discount: formData.discount || '',
      comments: formData.comments || ''
    }
  });
  const commentsValue = watch('comments') || '';
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(setFormData(data));
    console.log('chosen variant:', data);
  };

  const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue('comments', e.target.value);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white shadow-sm rounded-lg"
    >
      <h2 className="text-lg font-medium text-gray-900 mb-4">Please choose your variant</h2>
      <RadioGroup
        name="variant"
        control={control}
        items={variants}
        classes={{
          root: 'space-y-4',
          radioContainer: 'flex items-center p-4 border rounded-lg cursor-pointer',
          radioLabel: 'text-sm font-medium'
        }}
      />
      <DiscountCode control={control} name="discount" />

      <div className="mt-4">
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
          Note:
        </label>
        <Textarea
          value={commentsValue}
          onChange={handleChangeNote}
          placeholder="Enter your comments here"
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default App;
