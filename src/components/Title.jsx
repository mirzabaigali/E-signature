import React from 'react'

const Title = ({text,classes}) => {
  return (
    <>
    <h1 className={!classes?"App":classes}>{!text?"Title":text}</h1>
    </>
  )
}

export default Title