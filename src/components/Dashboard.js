import React, { useState,useEffect } from 'react'
import "./Dashboard.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase/app'
import { getTodos } from '../actions/todoActions';
import ClearIcon from '@material-ui/icons/Clear';
const Dashboard = () => {
    const [todo,setTodo]=useState("")
    const {user}=useSelector(state=>state.auth)
    const todos=useSelector(state=>state.todo)
    const dispatch=useDispatch()
    const handleSubmit=()=>{  
        if(todo===""){
            alert("Enter something")
            return
        }
        const unsubscribe=db.collection('todos').doc(user?.email).collection("titles").add({
            title:todo,
            date:firebase.firestore.FieldValue.serverTimestamp(),    
        })
        setTodo("")
        return unsubscribe
    }

    const handleRemove=id=>{
        db.collection("todos").doc(user?.email)?.collection("titles")?.doc(id).delete().then(() => {
            console.log("Todo Removed Successfully");
        }).catch((error) => {
            console.error("Error in removing todo ", error);
        });
        
    }

    useEffect(()=>{
        const unsubscribe=db.collection('todos').doc(user?.email)?.collection('titles')?.orderBy("date", "desc")
        .onSnapshot((snapshot)=>{
            dispatch(getTodos(snapshot.docs))    
        })
        return unsubscribe 
    },[dispatch,user])

    return (
        <section className="dashboard__container">
            <div className='dashboard'> 
                <div className="dashboard__upper">
                    <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Add a todo'/>
                    <IconButton style={{marginLeft:"5px"}} onClick={handleSubmit} >
                        <AddCircleIcon style={{color:"black"}} />    
                    </IconButton>
                </div>
                <h1>Todo's List</h1>
                <div className="dashboard__lower">
                    {
                        todos.length>0?(
                            todos.map(todo=>(
                                <div className="todo" key={todo.id}>
                                    <h3>{todo.title}</h3>
                                    <IconButton onClick={()=>handleRemove(todo.id)}>
                                        <ClearIcon style={{color:"black"}}/>
                                    </IconButton>
                                </div>
                            ))
                        ):
                        <h3 style={{color: "#229ee5",textTransform:"uppercase",letterSpacing:"1px",margin:"35px"}}>No Todo's exist</h3>
                    }
                </div>
            </div>
        </section>
    )
}

export default Dashboard
 