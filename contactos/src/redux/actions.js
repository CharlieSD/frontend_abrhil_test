import Types from "./types";
import axios from "axios";

export const getContactos = () => {
    return dispatch => {
        dispatch({type:Types.CONTACTOS_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/contactos`)
            .then(response => {
                    dispatch({type:Types.GET_CONTACTOS, payload:response.data})
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.CONTACTOS_LOADING, payload:false})
                }
            );
    }
}

export const deleteContacto = (id,cb) => {
    return dispatch => {
        dispatch({type:Types.CONTACTOS_LOADING, payload:true})
        axios.delete(`${process.env.REACT_APP_HOST_IP_ADDRESS}/contactos/${id}/`)
            .then(response => {
                    dispatch({type:Types.DELETE_CONTACTO, payload:id});
                    cb();
                }
            )
            .catch(err => {
                    console.log(err)
                }
            );
    }
}

export const createContacto = (data,cb) => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_HOST_IP_ADDRESS}/contactos`, data)
            .then(response => {
                    console.log(response)
                    dispatch({type:Types.CREATE_CONTACTO, payload:response.data});
                    cb()
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.CONTACTOS_LOADING, payload:false})
                }
            );
    }
}
