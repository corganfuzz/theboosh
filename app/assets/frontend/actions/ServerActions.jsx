import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
    receivedBooshes(rawBooshes) {
          AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_BOOSHES,
            rawBooshes
        })

    },
    receivedOneBoosh(rawBoosh) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_ONE_BOOSH,
            rawBoosh
        })
    },

    receivedUsers(rawUsers) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_USERS,
            rawUsers
        })

    },

    receivedOneFollower(rawFollower) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
            rawFollower
        })


    }
}