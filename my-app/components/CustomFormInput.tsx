import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { HTMLInputTypeAttribute } from 'react';

const CustomFormInput = <TFieldValues extends FieldValues>({
  form,
  name,
  type,
  label,
  placeholder,
  labelStyles,
  inputStyles,
  formItemStyles,

}: {
  type?: HTMLInputTypeAttribute | undefined;
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder: string;
  formItemStyles?: string;
  labelStyles?: string;
  inputStyles?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={formItemStyles}>
          <FormLabel className={labelStyles}>{label}</FormLabel>
          <FormControl>
            <Input type={type?? "text"} className={inputStyles} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormInput