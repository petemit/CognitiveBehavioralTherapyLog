import { RECEIVE_CDS } from "../actions/CognitiveDistortionsActions";


export default function CognitiveDistortionsReducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_CDS: 
            return {
                ...state,
                ...action.cds
            }
    }
}