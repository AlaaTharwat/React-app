export function users(state={},action){

    
    switch(action.type){
        case 'USERS_LIST':{
            console.log("kdjk")
            return {...state,list:action.payload}
        }
        case 'USER_DETAILS':{
            return  {...state,details:action.payload}
        }
        case 'CLEAR_DETAILS':{
            return  {...state,details:action.payload}
        }

        case 'DELETE_USER' :{
            return {...state,IsDeleted:action.payload}
        }

        case 'ADD_USER':{
            return {...state,user:action.payload}

        }
    }
    return state;
}
