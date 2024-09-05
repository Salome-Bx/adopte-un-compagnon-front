import React from 'react'
import { ButtonProps } from '@/app/Utils/type'

  export const Button = ({
    title,
    bgColor,
    border,
    color,
    size,
    hover,
    padding,
    margin
  }: ButtonProps) => {
      return (
        <button
            className={`${bgColor} ${border} ${color} ${size} ${hover} ${padding} ${margin}`}
        >
            {title}
        </button>
    )
  }


export default Button