import { cn } from "@/lib/tailwind"
import { forwardRef , CSSProperties, HTMLAttributes, InputHTMLAttributes } from "react"
interface IconInputProps  extends InputHTMLAttributes<HTMLInputElement> {
Icon? : JSX.Element
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerStyle?: React.CSSProperties;
  label?: string;
  action?: React.ReactNode;
  error?: string;
  helperText?: string;
  children?: React.ReactNode;
  inputClassName? : string
  placeholder?: string;
};

const PrimaryInput: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      action,
      containerStyle,
      inputClassName ,
      label,
      helperText,
      error,
      children,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <div
        style={containerStyle}
        className={cn(
          'flex flex-col  w-full items-start justify-center',
          className
        )}
      >
        {label && (
          <label
            className={cn('text-sm font-bold capitalize' , {"text-red-500" : error})}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  ' , {"border-2 border-red-400 outline-red-500" : error} , inputClassName
          )}
          placeholder={placeholder}
          {...props}
        />
        <div className="flex items-center w-full justify-between">
          {error ? (
            <p className="text-red-600 text-xs px-2">{error}</p>
          ) : (
            <p className="text-xs px-2">{helperText || ''}</p>
          )}
          {action && (
            <p className="px-2 text-xs" style={{ fontWeight: 7000 }}>
              {action}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export const IconInput : React.FC<IconInputProps> = ({className , children , placeholder ,Icon })=>{
    return <div className="flex  px-2 py-2 border-2 border-grayDark  focus-within:border-2  focus-within:border-black rounded-lg focus-within:shadow-lg">
    <div className=" inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        {Icon}
    </div>
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={placeholder} aria-label="search">
         {children}
    </input>
  </div>
}

PrimaryInput.displayName = "PrimaryInput"


export {PrimaryInput}