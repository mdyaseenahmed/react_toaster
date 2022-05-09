import React from 'react'
import ToasterBase from './ToasterBase'

const MyToaster = () => {
  return (
        <>
            <ToasterBase title="Hello World.!" position="bottom-left" type="warning" buttonName="Hello World bottom left warning"/>
            <ToasterBase title="Hello World.!" position="bottom-right" type="info" buttonName="bottom right info"/>
            <ToasterBase title="Hello World.!" position="bottom-left" type="warning" buttonName="bottom left warning" />
            <ToasterBase title="A sample toaster on bottom right.!" position="bottom-right" type="error" autoClose={10000} buttonName="sample button with 10000 delay & error" />
            <ToasterBase />
        </>
    )
}

export default MyToaster;