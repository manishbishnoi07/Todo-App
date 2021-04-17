const initState=[]
const todoReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'GET_TODOS': 
            return action.docs.map((doc)=>{
                return(
                    {
                        title:doc.data().title,
                        id:doc.id
                    }
                )
            })
    
        default:
            return state;
    }
}
export default todoReducer