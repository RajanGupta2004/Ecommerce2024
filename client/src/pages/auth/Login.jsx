import CommonForm from "@/components/common/Form";
import { LoginFormControls, registerFormControls } from "@/components/config";
import { useToast } from "@/hooks/use-toast";
import { userLogin } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log(formData);
  const { toast } = useToast()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(userLogin(formData)).then((data)=>{
      if(data.payload?.success){
        toast({title:data.payload?.message})
        navigate("/shop/home")

      }else{
        toast({title:"something went wrong.."})

      }
    })

  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" w-full md:w-[80%] lg:w-[60%] p-4 ">
        <h1 className="text-xl font-bold ">Create new account</h1>
        <p>
          Login with your account
          <Link
            to="/auth/register"
            className="text-blue-800 hover:underline ml-4 "
          >
            Register
          </Link>
        </p>
        <div className="max-w-lg ">
          <CommonForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            buttonText={"sign -in"}
            formControl={LoginFormControls}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
