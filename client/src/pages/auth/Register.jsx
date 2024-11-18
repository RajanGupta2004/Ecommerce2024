import CommonForm from "@/components/common/Form";
import { registerFormControls } from "@/components/config";
import { useToast } from "@/hooks/use-toast";
import { userRegistration } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { toast } = useToast()
  // console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(userRegistration(formData)).then((data)=>{
      if(data.payload.success){
        toast({
          title: data?.payload.message,
        })
        navigate("/auth/login")
      }else{
        toast({
          title: "user registration failed"
        })

      }
    
    })
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" w-full md:w-[80%] lg:w-[60%] p-4 ">
        <h1 className="text-xl font-bold ">Create new account</h1>
        <p>
          Already have an account
          <Link to="/auth/login" className="text-blue-800 hover:underline ">
            Login
          </Link>
        </p>
        <div className="max-w-lg ">
          <CommonForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            buttonText={"sign up"}
            formControl={registerFormControls}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
