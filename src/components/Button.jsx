import React from 'react'

function Button({
  text,
  className = "",
  type,
  width = 20,
  onCurrencySwip,
  icon,
  ...props
}) {
  return (
    <div className='text-center'>
      <button type={type} onClick={onCurrencySwip && onCurrencySwip} className={`btn btn-main ${className}`} style={{ width: `${width}%` }} {...props}>
        {text}
        <span className='ms-1 d-inline-block' style={{ marginBottom: "-.3rem" }}>
          {icon && icon}
        </span>
      </button>
    </div>
  )
}

export default Button
