import ServerActions from "./actions/ServerActions"
export default {
    getAllBooshes() {
        $.get("/booshes")
            .success( rawBooshes => ServerActions.receivedBooshes(rawBooshes) )
            .error(error => console.log(error));
    },

    createBoosh(body) {
        $.post("/booshes", { body })
            .success( rawBoosh => ServerActions.receivedOneBoosh(rawBoosh) )
            .error(error => console.log(error));
    },

    getAllUsers() {
        $.get("/followers/random")
            .success( rawUsers => ServerActions.receivedUsers(rawUsers) )
            .error(error => console.log(error));
    },

    followUser(userId) {
        $.post("/followers", { user_id: userId } )
             .success( rawFollower => ServerActions.receivedOneFollower(rawFollower) )
             .error(error => console.log(error));
    }
}