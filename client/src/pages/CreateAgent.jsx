// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const CreateAgent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState({});

  const validation = () => {
    let err = {};
    let param = true;

    if (name == "") {
      err.name = "Please Enter your name";
      param = false;
    }

    if (email == "") {
      err.email = "Please Enter the mail";

      param = false;
    } else {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(email)) {
        err.email = "Invalid email format";
        param = false;
      }
    }

    if (phone == "") {
      err.phone = "Please Enter the number";
      param = false;
    }
    if (description == "") {
      err.description = "Please Enter description";
      param = false;
    }
    setErrorData({ ...err });
    return param;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValidate = validation();

    const data = {
      name,
      email,
      phone,
      description,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/api/support-agents", data)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
        navigate("/ticket");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
      <div className="flex items-center justify-center p-[70px] bg-gray-400 ">
          <form className="space-y-4 " onSubmit={handleSubmit}>
            {loading ? <Spinner /> : ""}
            <div className="flex flex-col rounded-xl w-[600px] p-4 mx-auto bg-gray-200">
              <h1 className="text-3xl font-serif my-4 mx-auto text-center weight-5">
                CREATE AGENT
              </h1>
              <FormInput place="Name" value={name} onChange={setName} />
              <span className="text-red-500 text-center">{errorData.name}</span>

              <FormInput place="Email" value={email} onChange={setEmail} />
              <span className="text-red-500 text-center">
                {errorData.email}
              </span>

              <FormInput place="Phone-no." value={phone} onChange={setPhone} />
              <span className="text-red-500 text-center">
                {errorData.phone}
              </span>

              <FormInput
                place="Description"
                value={description}
                onChange={setDescription}
              />
              <span className="text-red-500 text-center">
                {errorData.description}
              </span>

              <div className="flex flex-col rounded-xl w-[600px] p-4 mx-auto items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
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
