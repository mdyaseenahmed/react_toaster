import React from 'react'
import ToasterBase from './ToasterBase'

const MyToaster = () => {
  return (
        <>
            <ToasterBase title="Hello World.!" position="bottom-left" type="warning" />
            <ToasterBase title="Hello World.!" position="bottom-right" type="info" />
            <ToasterBase title="Hello World.!" position="bottom-left" type="warning" />
            <ToasterBase title="A sample toaster on bottom right.!" position="bottom-right" autoClose={10000} />
            <ToasterBase />
        </>
    )
}

export default MyToaster;