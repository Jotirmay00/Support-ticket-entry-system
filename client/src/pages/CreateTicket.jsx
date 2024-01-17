// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const CreateTicket = () => {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("low");
  const [status, setStatus] = useState("new");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      topic,
      description,
      status,
      severity,
      type,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/api/support-tickets", data)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        setLoading(false);
        setTopic("");
        setDescription("");
        setType("");
        setSeverity("");
        setStatus("");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const STATUS = ["new" , "assigned","resolved"]

  const SEVERITY =["low" , "medium" ,"high"]

  return (
    <form onSubmit={handleSubmit}>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col rounded-xl w-[600px] p-6 mx-auto bg-gray-100 ">
        <h1 className="text-3xl my-4 mx-auto text-center weight-5">
          Create Ticket
        </h1>
        <FormInput place="Topic" value={topic} onChange={setTopic} />
        <FormInput
          place="Description"
          value={description}
          onChange={setDescription}
        />
        <select  className="border rounded p-2 m-2 bg-gray-300 text-gray-700 focus:outline-none hover:bg-gray-200" name="severity" value={severity} onChange={e => setSeverity(e.target.value)}>
      {
          SEVERITY.map(sev => <option key={sev}>{sev}</option>)
      }
       </select>
        <FormInput place="Type" value={type} onChange={setType} />
       <select className="border rounded p-2 m-2 bg-gray-300 text-gray-700 focus:outline-none hover:bg-gray-200" name="status" value={status} onChange={e => setStatus(e.target.value)}>
      {
          STATUS.map(stat => <option key={stat}>{stat}</option>)
      }
       </select>
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

export default CreateTicket;
