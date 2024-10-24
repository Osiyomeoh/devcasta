import React, { HTMLInputTypeAttribute } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";


const CustomSelect = <TFieldValues extends FieldValues>({
  form,
  name,
  selectContent,
  label,
  placeholder,
  labelStyles,
  selectTriggerStyles,
  formItemStyles,
  selectContentStyles,
}: {
  type?: HTMLInputTypeAttribute | undefined;
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder: string;
  selectContent: ISelectContent[];
  formItemStyles?: string;
  labelStyles?: string;
  selectTriggerStyles?: string;
  selectContentStyles?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={formItemStyles}>
          <FormLabel className={labelStyles}>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={selectTriggerStyles}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className={selectContentStyles}>
              {selectContent.map((item) => (
                <SelectItem key={item.name} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
