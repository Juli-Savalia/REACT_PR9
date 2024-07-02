export const Add_User = (data) => {
    return {
        type: 'add-user',
        payload: data,
    };
};

export const Delete_User = (id) => {
    return {
        type: 'delete-user',
        payload: id,
    };
};

export const Edit_User = (id) => {
    return {
        type: 'edit-user',
        payload : id,    
    };
};

export const Update_User = (data) => {
    return {
        type: 'update-user',
        payload: data,
    };
};