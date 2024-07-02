let initialState = {
    userList : JSON.parse(localStorage.getItem("users"))
             ? JSON.parse(localStorage.getItem("users"))
             : [],
    error : null
}

export const noteReducer = (state = initialState,action) => {
    switch(action.type){
        case 'add-user' : 
            let old = [...state.userList , action.payload];
            localStorage.setItem("users", JSON.stringify(old));
            return {
                ...state , 
                userList : old
            };

        case 'delete-user' : 
            let d = action.payload;
            let delNote = state.userList.filter((val) => val.id != d);
            localStorage.setItem("users", JSON.stringify(delNote));
            return {
                ...state , 
                userList : delNote,
            };

        case 'edit-user' : 
            let editNote = state.userList.find((val) => {
                return val.id == action.payload.editid;
            });
            console.log(editNote);
            return {
                ...state , 
                userList : editNote,
            };

        case 'Update-user' : 
            let updateNote = state.userList.map((val) => {
              if (val.id == action.payload.id){
                (val.name = action.payload.name), (val.phone = action.payload.phone) 
              }  
              return val;
            });
            localStorage.setItem("users", JSON.stringify(updateNote));


        default :
            return state;
    }
}