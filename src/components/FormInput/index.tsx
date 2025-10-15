import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

interface FormInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
}

export const FormInput = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder = "",
}: FormInputProps<TFieldValues>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xs text-gray-500">{label}</FormLabel>
        <FormControl>
          <Input
            {...field}
            placeholder={placeholder}
            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
          />
        </FormControl>
      </FormItem>
    )}
  />
);
