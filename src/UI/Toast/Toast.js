import { toast } from "react-toastify";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck,faInfo,faExclamation} from '@fortawesome/free-solid-svg-icons'

const attributes={
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
}

export const successToast = text =>{
    return toast.success(
        <>
            <FontAwesomeIcon icon={faCheck}/>
            {"  "+text}
        </>,attributes
    );
}

export const infoToast=text=>{
    return toast.info(
        <>
            <FontAwesomeIcon icon={faInfo}/>
            {"  "+text}
        </>,attributes
    )
}

export const warningToast=text=>{
    return toast.error(
        <>
            <FontAwesomeIcon icon={faExclamation}/>
            {"  "+text}
        </>,attributes
    )
}