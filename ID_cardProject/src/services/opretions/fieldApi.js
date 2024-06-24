import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { fildsEndpoints } from "../apis";

const { CREAT_FIELDS_API,
    SAVE_USER_DATA_API,
} = fildsEndpoints;


export const createFields = async (data) => {
    const toastId = toast.loading("Loading...");
    try {
        console.log("data in filds Api : ", data);
        const res = await apiConnector("POST", CREAT_FIELDS_API, data);
        console.log("res of fiels ", res);
    }
    catch (error) {
        console.log(error);
    }
    toast.dismiss(toastId);
}

export const saveFormData = async (data, navigate) => {
    const toastId = toast.loading("Loading...");
    let response = null;
    try {
        console.log("data in saveFormData fun : ", data);
        const res = await apiConnector("POST", SAVE_USER_DATA_API, data);
        response = res;
        console.log("res of SAVE_USER_DATA_API : ", res);
        toast.success("Data saved Successfully");
        navigate("/")
    }
    catch (error) {
        console.log("Error : ",error)
        console.log("SAVE_USER_DATA_API Error")
        toast.error(error.response?.data?.message)
    }
    toast.dismiss(toastId);
    return response;
}