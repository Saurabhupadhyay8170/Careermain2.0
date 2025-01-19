import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  workingDays: string;
  workingHours: string;
}

const ReviewSection5: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    workingDays: "",
    workingHours: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user starts typing
    setErrors((prevErrors: any) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const formErrors: any = {};
    let isValid = true;

    // Name validation (should not contain numbers)
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      formErrors.name = "Name should not contain numbers";
      isValid = false;
    }

    // Email validation (should be a valid email format)
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Mobile number validation (should be exactly 10 digits)
    if (!formData.contactNumber.trim()) {
      formErrors.contactNumber = "Contact Number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      formErrors.contactNumber = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    // Working days and hours validation (should not be empty)
    if (!formData.workingDays.trim()) {
      formErrors.workingDays = "Working days are required";
      isValid = false;
    }

    if (!formData.workingHours.trim()) {
      formErrors.workingHours = "Working hours are required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const SubmitFinal = () => {
    const formIsValid = validateForm();
    setIsValid(formIsValid);
    if (formIsValid) {
      alert("Form submitted successfully!");
      navigate("/");
      // Perform next step action
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <div className="flex justify-center pt-1 sm:pt-14 w-full font-poppins">
      <div className="mx-auto p-6 px-4 sm:px-14 w-full sm:w-1/2 rounded-md bg-transparent sm:bg-white">
        <h1 className="text-2xl font-bold mb-4 text-primaryBtn">Contact Information</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Contact Number"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-xs">{errors.contactNumber}</p>
            )}
          </div>
          {/* Working Days */}
          <div>
            <label className="block text-sm font-medium mb-1">Working Days</label>
            <input
              type="text"
              name="workingDays"
              value={formData.workingDays}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="e.g., Monday to Friday"
            />
            {errors.workingDays && <p className="text-red-500 text-xs">{errors.workingDays}</p>}
          </div>
          {/* Working Hours */}
          <div>
            <label className="block text-sm font-medium mb-1">Working Hours</label>
            <input
              type="text"
              name="workingHours"
              value={formData.workingHours}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="e.g., 10:30 am to 6:30 pm"
            />
            {errors.workingHours && <p className="text-red-500 text-xs">{errors.workingHours}</p>}
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          We will strive to address your feedback and concerns in a timely and effective manner.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Please note that the details of the Data Protection Officer/Grievance Officer may be changed by us from time
          to time by updating this Privacy Policy.
        </p>
        <div className="mt-6 flex justify-center gap-5">
          <Link to='/review4'>
            <button className='px-6 py-2 rounded bg-primaryBtn hover:bg-hoverBtn text-white'>PRE</button>
          </Link>
          <button
            onClick={SubmitFinal}
            className="px-4 py-2 bg-primaryBtn hover:bg-hoverBtn text-white rounded-lg disabled:bg-gray-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection5;
