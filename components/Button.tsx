'use client';

import { ButtonProps } from '@/types/interface';
import Image from 'next/image';

function Button({ title, containerStyles, handleClick, btnType }: ButtonProps) {
  return (
    <button 
    disabled={false}
    type={btnType || 'button'}
    className={`p-4 ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default Button