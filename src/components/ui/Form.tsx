import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, onSubmit, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className={cn("space-y-4", className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = "Form";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "input-field",
            error && "border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: SelectOption[];
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
        <select
          ref={ref}
          className={cn(
            "input-field",
            error && "border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";

export default Form; 