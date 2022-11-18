import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Popup() {
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    return (
        <div>
            <button onClick={showToastMessage}>Notify</button>
            <ToastContainer />
        </div>
    );
}