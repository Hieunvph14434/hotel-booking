import { toast } from 'react-toastify';

const toastSuccess = (message) => {
    toast.success(`${message}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};

const toastError = (message,) => {
   
        toast.error(`Error: ${message}!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
};

export {
    toastSuccess,
    toastError
}

