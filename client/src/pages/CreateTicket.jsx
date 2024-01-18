// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import Swal from 'sweetalert2'
import FormInput from "../components/FormInput";


const initialData ={
  topic:'',
  type:'',
  severity :'',
  status :'',
  description:'',
}

const CreateTicket = () => {
  const[formData,setFormData] =useState(initialData)
  const [loading, setLoading] = useState(false);

  const handleChange =(e) =>{
    const {name,value} = e.target 
    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoading(true);
    axios
      .post("http://localhost:8000/api/support-tickets", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        Swal.fire({
          title: "Good job!",
          text: "You created a Ticket!",
          icon: "success"
        });
        setLoading(false);
        setFormData(initialData)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const STATUS = ["new", "assigned", "resolved"];

  const SEVERITY = ["low", "medium", "high"];

  return (
    <div className="flex items-center justify-center p-[70px] bg-gradient-to-r from-orange-50 to-orange-200">
      <form onSubmit={handleSubmit}>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col rounded-xl w-[600px] p-6 mx-auto bg-white ">
          <h1 className="text-3xl font-serif my-4 mx-auto text-center weight-5">
            CREATE TICKET
          </h1>
          <label htmlFor="topic" className="block text-sm font-medium text-orange-500">TOPIC</label>
          <FormInput place="Enter Topic" name='topic' value={formData.topic} onChange={handleChange} />

          <label htmlFor="description" className="block text-sm font-medium text-orange-500">DESCRIPTION</label>
          <FormInput
            place="Enter Description"
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
          <label htmlFor="severity" className="block text-sm font-medium text-orange-500">SEVERITY</label>
          <select
            className="border border-black rounded-lg p-2 m-2 text-gray-700 focus:outline-none hover:bg-gray-100"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
          >
            {SEVERITY.map((sev) => (
              <option key={sev}>{sev}</option>
            ))}
          </select>
          <label htmlFor="name" className="block text-sm font-medium text-orange-500">TYPE</label>
          <FormInput place="Enter type of ticket" name='type' value={formData.type} onChange={handleChange} />

          <label htmlFor="status" className="block text-sm font-medium text-orange-500">STATUS</label>
          <select
            className="border border-black rounded-lg p-2 m-2 text-gray-700 focus:outline-none hover:bg-gray-100"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            {STATUS.map((stat) => (
              <option key={stat}>{stat}</option>
            ))}
          </select>
          <div className="flex flex-col rounded-xl w-[600px] p-4 mx-auto items-center">
            <button
              type="submit"
              className="bg-orange-400 text-white px-4 py-2 rounded-md mt-4"
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
