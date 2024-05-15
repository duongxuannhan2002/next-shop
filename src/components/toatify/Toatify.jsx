import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Err = ({info}) => {
    toast.error(info);
    return (
        <div>
            <ToastContainer />
        </div>
    )
}

const Suc = ({info}) => {
    toast.success(info);
    return (
        <div>
            <ToastContainer />
        </div>
    )
}

export {Err, Suc}