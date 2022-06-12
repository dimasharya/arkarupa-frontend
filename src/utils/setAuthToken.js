import Api from "../reducer/Api"

const setAuthToken = token => {
    if(token){
        Api.defaults.headers.common["x-auth-token"] = token
    }else{
        delete Api.defaults.headers.common["x-auth-token"]
    }
}

export default setAuthToken