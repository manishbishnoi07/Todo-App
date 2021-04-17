export const getTodos=(docs)=>{
    return {
        type:'GET_TODOS',
        docs,
    }
}