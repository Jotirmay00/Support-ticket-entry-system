// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import Swal from 'sweetalert2'
//import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const CreateTicket = () => {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("low");
  const [status, setStatus] = useState("new");
  const [description, setDescription] = useState("");
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
        Swal.fire({
          title: "Good job!",
          text: "You created a Ticket!",
          icon: "success"
        });
        setLoading(false);
        setTopic("");
        setDescription("");
        setType("");
        setSeverity("");
        setStatus("");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const STATUS = ["new", "assigned", "resolved"];

  const SEVERITY = ["low", "medium", "high"];

  return (
    <div className="flex items-center justify-center p-[70px] bg-gray-400">
      <form onSubmit={handleSubmit}>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col rounded-xl w-[600px] p-6 mx-auto bg-gray-200 ">
          <h1 className="text-3xl font-serif my-4 mx-auto text-center weight-5">
            CREATE TICKET
          </h1>
          <label htmlFor="topic" className="block text-sm font-medium text-blue-500">Topic</label>
          <FormInput place="Enter Topic" value={topic} onChange={setTopic} />

          <label htmlFor="description" className="block text-sm font-medium text-blue-500">Description</label>
          <FormInput
            place="Enter Description"
            value={description}
            onChange={setDescription}
          />
          <label htmlFor="severity" className="block text-sm font-medium text-blue-500">Select Severity</label>
          <select
            className="border rounded-full p-2 m-2 bg-gray-300 text-gray-700 focus:outline-none hover:bg-gray-100"
            name="severity"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            {SEVERITY.map((sev) => (
              <option key={sev}>{sev}</option>
            ))}
          </select>
          <label htmlFor="name" className="block text-sm font-medium text-blue-500">Type</label>
          <FormInput place="Enter Type of ticket" value={type} onChange={setType} />

          <label htmlFor="status" className="block text-sm font-medium text-blue-500">Select Status</label>
          <select
            className="border rounded-full p-2 m-2 bg-gray-300 text-gray-700 focus:outline-none hover:bg-gray-100"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {STATUS.map((stat) => (
              <option key={stat}>{stat}</option>
            ))}
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
    </div>
  );
};

export default CreateTicket;
