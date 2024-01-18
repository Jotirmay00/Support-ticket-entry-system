// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const initialData = {
  name: '',
  email: '',
  phone: '',
  description: '',

}

const CreateAgent = () => {
  const[formData,setFormData] =useState(initialData)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState({});

  const handleChange =(e) =>{
    const {name,value} = e.target 
    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }))
  }

  const validation = () => {
    let err = {};
    let param = true;

    if (formData.name == "") {
      err.name = "Please Enter your name";
      param = false;
    }

    if (formData.email == "") {
      err.email = "Please Enter the mail";

      param = false;
    } else {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(formData.email)) {
        err.email = "Invalid email format";
        param = false;
      }
    }

    if (formData.phone == "") {
      err.phone = "Please Enter the number";
      param = false;
    }
    if (formData.description == "") {
      err.description = "Please Enter description";
      param = false;
    }
    setErrorData({ ...err });
    return param;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidate = validation();
    setLoading(true);
    axios
      .post("https://support-ticket-entry-system-jade.vercel.app/api/support-agents", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        setLoading(false);
        setFormData(initialData)
        navigate("/ticket");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
      <div className="flex items-center justify-center p-[70px] bg-gradient-to-r from-orange-50 to-orange-200 ">
          <form className="space-y-4 " onSubmit={handleSubmit}>
            {loading ? <Spinner /> : ""}
            <div className="flex flex-col rounded-xl w-[600px] p-4 mx-auto bg-white">
              <h1 className="text-3xl font-serif my-4 mx-auto text-center weight-5">
                CREATE AGENT
              </h1>
              <FormInput place="Name" name='name' value={formData.name} onChange={handleChange} />
              <span className="text-red-500 text-center">{errorData.name}</span>

              <FormInput place="Email" name='email' value={formData.email} onChange={handleChange} />
              <span className="text-red-500 text-center">
                {errorData.email}
              </span>

              <FormInput place="Phone-no." name='phone' value={formData.phone} onChange={handleChange} />
              <span className="text-red-500 text-center">
                {errorData.phone}
              </span>

              <FormInput
                place="Description"
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
              <span className="text-red-500 text-center">
                {errorData.description}
              </span>

              <div className="flex flex-col rounded-xl w-[600px] p-4 mx-auto items-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      
   
  );
};

export default CreateAgent;
