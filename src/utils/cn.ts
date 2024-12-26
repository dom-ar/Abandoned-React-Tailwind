import clsx from "clsx"
import { ClassValue } from "clsx"
import { twMerge } from 'tailwind-merge'


// merge tailwind 
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))

}