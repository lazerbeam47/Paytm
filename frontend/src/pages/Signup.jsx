// import {Heading} from "../components/Heading"
// import { SubHeading } from "../components/SubHeading"
// import {InputBox} from "../components/InputBox"
// import { Button } from "../components/Button"
// import { BottomWarning } from "../components/BottomWarning"
// import axios from "axios"
// import { useState } from "react"
// export const Signup=()=>{
//     const [firstName,setFirstName]=useState("");
//     const [lastName,setLastName]=useState("");
//     const [username,setUsername]=useState("");
//     const [password,setPassword]=useState("");

//     return (
//         <div className="bg-slate-400 flex justify-center h-screen">
//             <div className="flex flex-col justify-center">
//                 <div className="bg-white rounded-lg text-center pt-2 px-4 h-max">
//                     <Heading label={"Sign up"}/>
//                     <SubHeading label={"Enter your information to create an account"}/>
//                     <InputBox onChange={e=>{
//                         setFirstName(e.target.value);
//                     }}
//                         label={"First Name"} placeholder={"John"}></InputBox>
//                     <InputBox onChange={e=>{
//                         setLastName(e.target.value);
//                     }}label={"Last Name"} placeholder={"Doe"}></InputBox>
//                     <InputBox onChange={e=>{
//                         setUsername(e.target.value);
//                     }}label={"Email"} placeholder={"johndoe@gmail.com"}></InputBox>
//                     <InputBox onChange={e=>{
//                         setPassword(e.target.value);
//                     }}label={"Password"} placeholder={"123456"}></InputBox>
//                     <div className="pt-4">
//                     <Button onClick={ () => {
//                         const response =  axios.post("http://localhost:3000/api/v1/user/signup", {
//                             username,
//                             firstName,
//                             lastName,
//                             password
//                         });
//                         localStorage.setItem("token", response.data.token)
//                         // navigate("/dashboard")
//                         }}
//                         label={"Sign up"}/>
//                     </div>
//                     <BottomWarning label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"}/>
//                 </div>
//             </div>
//         </div>
//     )
// }
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFirstName(e.target.value);
        }} placeholder="John" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
        <Button 
  onClick={async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); // Navigate after successful signup
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again."); // Provide user-friendly feedback
    }
  }} 
 label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}