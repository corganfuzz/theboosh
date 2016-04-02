import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";


let _booshes = [];



class BooshEventEmitter extends AppEventEmitter {
       getAll() {
            return _booshes.map(boosh => {
                boosh.formattedDate = moment(boosh.created_at).fromNow();
                return boosh;
            });
        }

}

let BooshStore = new BooshEventEmitter();


AppDispatcher.register( action => {

switch(action.actionType) {
    case ActionTypes.RECEIVED_BOOSHES:
        _booshes = action.rawBooshes;
        BooshStore.emitChange();
       break;

    case ActionTypes.RECEIVED_ONE_BOOSH:
        _booshes.unshift(action.rawBoosh);
        BooshStore.emitChange();
    default:
        //no op
}
});

export default BooshStore;