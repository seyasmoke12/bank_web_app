import React from 'react'
import styles from '../style'

function Button({styles}) {

  return (
    <button type='button' className={`font-poppins py-4 px-6 bg-blue-gradient font-medium text-primary text-[18px] outline-none rounded-xl ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button