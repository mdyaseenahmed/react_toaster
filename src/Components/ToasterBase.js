import React from 'react'
import { ToastContainer, toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToasterBase = ({
    title= "My Title",
    // description= "Toaster Description",
    position,
    autoClose,
    hideProgressBar=false,
    newestOnTop=false,
    closeOnClick,
    rtl=false,
    pauseOnFocusLoss,
    draggable,
    pauseOnHover,
    // type="default",
}) => {

    const notify = () => toast.success(title , {position: position, autoClose: autoClose, hideProgressBar: hideProgressBar, newestOnTop: newestOnTop, closeOnClick: closeOnClick, rtl: rtl, pauseOnFocusLoss: pauseOnFocusLoss, draggable: draggable, pauseOnHover: pauseOnHover });
  
    return (
        <>
            <button className="center" onClick={notify}>Notify!</button>
            <ToastContainer />
        </>
  )
}

export default ToasterBase;