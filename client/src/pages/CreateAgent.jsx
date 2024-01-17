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

  const handleSubmit = (e) => {
    e.preventDefault();
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
        setName("")
        setEmail("")
        setPhone("")
        setDescription("")
        navigate("/ticket");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col rounded-xl w-[600px] p-4 mx-auto bg-gray-100">
        <h1 className="text-3xl my-4 mx-auto text-center weight-5">
          Create Agent
        </h1>
        <FormInput place="Name" value={name} onChange={setName} />
        <FormInput place="Email" value={email} onChange={setEmail} />
        <FormInput place="Phone-no." value={phone} onChange={setPhone} />
        <FormInput
          place="Description"
          value={description}
          onChange={setDescription}
        />
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
  );
};

export default CreateAgent;
