import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
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
    type,
}) => {

    // const notify = () => toast.success(title , {position: position, autoClose: autoClose, hideProgressBar: hideProgressBar, newestOnTop: newestOnTop, closeOnClick: closeOnClick, rtl: rtl, pauseOnFocusLoss: pauseOnFocusLoss, draggable: draggable, pauseOnHover: pauseOnHover });
  
    const notify = () => {
        switch(type) {
            case "success":
                toast.success(title , {position: position, autoClose: autoClose, hideProgressBar: hideProgressBar, newestOnTop: newestOnTop, closeOnClick: closeOnClick, rtl: rtl, pauseOnFocusLoss: pauseOnFocusLoss, draggable: draggable, pauseOnHover: pauseOnHover });
                break;

            case "warning":
                toast.warning(title , {position: position, autoClose: autoClose, hideProgressBar: hideProgressBar, newestOnTop: newestOnTop, closeOnClick: closeOnClick, rtl: rtl, pauseOnFocusLoss: pauseOnFocusLoss, draggable: draggable, pauseOnHover: pauseOnHover });
                break;

            case "info":
                toast.info(title , {position: position, autoClose: autoClose, hideProgressBar: hideProgressBar, newestOnTop: newestOnTop, closeOnClick: closeOnClick, rtl: rtl, pauseOnFocusLoss: pauseOnFocusLoss, draggable: draggable, pauseOnHover: pauseOnHover });
                break;

            case "default":
                toast.default(title , {position: position, autoClose: autoClose, hideProgressBar: hideProgressBar, newestOnTop: newestOnTop, closeOnClick: closeOnClick, rtl: rtl, pauseOnFocusLoss: pauseOnFocusLoss, draggable: draggable, pauseOnHover: pauseOnHover });
                break;

            default:
                toast.success(title , {position: position, autoClose: autoClose, hideProgressBar: hideProgressBar, newestOnTop: newestOnTop, closeOnClick: closeOnClick, rtl: rtl, pauseOnFocusLoss: pauseOnFocusLoss, draggable: draggable, pauseOnHover: pauseOnHover });
                break; 
        }
    }

    return (
        <>
            <button onClick={() => notify()}>Notify!</button>
            <ToastContainer />
        </>
  )
}

export default ToasterBase;