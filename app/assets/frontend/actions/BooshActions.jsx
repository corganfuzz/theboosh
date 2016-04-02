import API from "../API"

export default {
    getAllBooshes() {

        API.getAllBooshes();
    },
    sendBoosh(body) {
        API.createBoosh(body);
    }
}