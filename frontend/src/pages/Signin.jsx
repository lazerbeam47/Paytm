import {Heading} from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
export const Signin=()=>{
    return (
        <div className="bg bg-slate-400 flex justify-center h-screen">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg text-center pt-2 px-4 h-max">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter your credentials to access your account"}/>
                    <InputBox label={"Username"} placeholder={"johndoe@gmail.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"123456"}></InputBox>
                    <div className="pt-4">
                        <Button label={"Sign up"}/>
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    )
}
