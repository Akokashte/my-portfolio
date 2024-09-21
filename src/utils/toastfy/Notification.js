import { toast } from 'react-toastify';

const notifySuccess =(notification)=>{
    toast.success(notification)
}

const notifyError =(notification)=>{
    toast.error(notification)
}

const notifyInfo=(notification)=>{
    toast.info(notification)
}

export {
    notifySuccess,
    notifyError,
    notifyInfo
}