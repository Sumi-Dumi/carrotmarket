import { InputHTMLAttributes } from "react";

interface FormInputProps {
    name: string;
    errors?: string[];
}

export default function FormInput({errors = [], name}: FormInputProps & InputHTMLAttributes<HTMLInputElement>){
    return(
        <div className="flex flex-col gap-2">
            <input
            name={name}
            className="bg-transparent rounded-md w-full h-10 focus:outline-none transition ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            />
            {errors.map((error, index) => (
                <span key={index} className="text-red-500 font-medium">
                {error}
                </span>
            ))}
      </div>
    )
}