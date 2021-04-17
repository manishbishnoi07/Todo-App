import './App.css';
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import { useSelector,useDispatch } from 'react-redux';
import { auth } from './firebase';
import { useEffect } from 'react';
import { signIn, signOut } from './actions/authActions';
function App() {
  const {user}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(signIn(userAuth))
      }
      else{
        dispatch(signOut())
      }
    })
    return unsubscribe
  },[dispatch])

  return (
    <div className="app">
      {!user?(
          <Login/>
        ):
        <>
          <Navbar/>
          <Dashboard/>
        </>
        }
    </div>
  );
}

export default App;
