import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../Globals";

function UserForm(props) {
  const [formType, setFormType] = useState({
    type: "login",
    userCheck: "",
    userCheckID: "",
    ///// will literally print the password when searching for user... ther has to be a better way
    userPasswordCheck: ""
  })
  const [user, setUser] = useState ({
    nameUser: "",
    password: "",
    passwordConfirm: ""
  })
  useEffect(()=>{async function userCheck () {
    const res = await axios.get(`${BASE_URL}/user/${user.nameUser}`)
    setFormType({...formType, userCheck:res.data.esteUsername[0].nameUser, userCheckID: res.data.esteUsername[0]._id, userPasswordCheck: res.data.esteUsername[0].password})
  }
  userCheck()
},[user])
const form = useRef()


  function handleChange (e){
    setUser({...user, [e.target.id]: e.target.value})

  }

  console.log(formType.userPasswordCheck)

  function login(){
    if ((formType.userCheck === user.nameUser)&&(formType.userPasswordCheck === user.password)){
      props.setUserStatus({...props.userStatus , userForm:false, loginStatus:true, userID:formType.userCheckID})
    } else {
      alert("Username or password does not match any user in the database. Please check your info or create a new account")
    }
  }

  async function signup(){
    if (formType.userCheck === user.nameUser){
      alert("This usernam is taken, please choose a new username")
    } else if ((user.password !== "") && (user.password === user.passwordConfirm)){
    const res = await axios.post(`${BASE_URL}/users`, user)
    props.setUserStatus({...props.userStatus , userForm:false, loginStatus:true, userID:res.data.esteUser._id})
    } else {
    alert("Please check the passwords")
    }
  }

  let displayForm
  if (formType.type === "login"){
    displayForm = 
    <div className="displayForm">
      <h2>Log In</h2>
      <input onChange={handleChange}  placeholder="username" id="nameUser" type="text" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="password" id="password" type="password" className="displayFormInput"></input>
      <button onClick={login}>submit</button>
      <p className="toSignUp" onClick={()=>{setFormType({...formType, type:"signup"})}}>Don't have an account? Sign up</p>
    </div>
  } else if (formType.type === "signup"){
    displayForm = 
    <div className="displayForm">
      <h2>Create an account</h2>
      <input onChange={handleChange} placeholder="username" id="nameUser" type="text" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="password" id="password" type="password" className="displayFormInput"></input>
      <input onChange={handleChange} placeholder="passwordConfirm" id="passwordConfirm" type="password" className="displayFormInput"></input>
      <button onClick={signup}>submit</button>
      <p className="toSignUp" onClick={()=>{setFormType({...formType, type:"login"})}}>Already have an account? Log in</p>
    </div>
  }


  function closePop (e){
    if(form.current === e.target){
    props.setUserStatus({...props.userStatus , userForm:false})}
  }

  return (
    <div className="userForm" ref={form} onClick={closePop} >
    {displayForm}
    </div>
  );
}

export default UserForm