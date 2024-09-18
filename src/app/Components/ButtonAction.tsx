import React from 'react'
import { ButtonActionProps } from '@/app/Utils/type'
import {  useRouter } from 'next/navigation';


  export const ButtonAction = ({
    title,
    bgColor,
    border,
    color,
    size,
    hover,
    padding,
    margin,
    action
  }: ButtonActionProps) => {
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


export default ButtonAction