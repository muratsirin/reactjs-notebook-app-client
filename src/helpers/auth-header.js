import {authService} from "../services/auth";

function authHeader(){
    const currentUser = authService.currentUserValue;
    if (currentUser && currentUser.token){
        return {Authorization: 'Bearer' + currentUser.token}
    }else{
        return {};
    }
}

export default authHeader;