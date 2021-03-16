import Types from "./types";
const initialState = {
    contactos: [],
    loading:false
};

const contactoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CONTACTOS_LOADING: {
            console.log("create_item");
            return {...state,loading: action.payload};
        }

        case Types.GET_CONTACTOS: {
            return {...state, contactos: action.payload};
        }

        case Types.GET_CONTACTO: {
            console.log("get contacto");
            return {...state, contactos: action.payload};
        }

        case Types.DELETE_CONTACTO: {
            return {...state, contacto: state.contactos.filter(contacto => contacto.id !== action.payload)}
        }
        default:
            return state;
    }
}

export default contactoReducer;