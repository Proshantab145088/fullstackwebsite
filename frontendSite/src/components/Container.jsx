import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-9/10 mx-auto p-1 ${className}`}>{children}</div>
  )
}

export default Container