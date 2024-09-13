import React from 'react'
import { ButtonProps } from '@/app/Utils/type'
import {  useRouter } from 'next/navigation';


  export const Button = ({
    title,
    bgColor,
    border,
    color,
    size,
    hover,
    padding,
    margin,
    action
  }: ButtonProps) => {
    const { push } = useRouter();

      return (
        <button
            className={`${bgColor} ${border} ${color} ${size} ${hover} ${padding} ${margin}`}
            onClick={() => push(`/${action}`)}
        >
            {title}
        </button>
    )
  }


export default Button