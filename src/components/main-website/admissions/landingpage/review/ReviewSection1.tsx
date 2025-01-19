import { useState } from "react";
import { Link } from "react-router-dom";

const ReviewSection1: React.FC = () => {
  const [formData, setFormData] = useState({
    college: "",
    course: "",
    level: "",
    passingYear: "",
  });

  const [errors, setErrors] = useState({
    college: "",
    course: "",
    level: "",
    passingYear: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const courseOptions = [
    "-- Select Stream --",
    "Engineering",
    "Management",
    "Commerce and Banking",
    "Medical",
    "Science",
    "Hotel Management",
    "Information Technology",
    "Arts & Humanities",
    "Agriculture",
    "Law",
    "Pharmacy",
    "Education",
    "Design",
    "Media and Mass Combination",
    "Retail",
    "Vocational",
    "Physical Education",
    "Paramedical",
    "Nursing",
    "Dental",
    "Performing Arts",
    "Others",
  ];

  const levelOptions = [
    "-- Select Level --",
    "Undergraduate",
    "Postgraduate",
    "Diploma",
    "Certificate",
    "Doctorate",
  ];

  const passingYearOptions = Array.from(
    { length: 25 },
    (_, index) => 2001 + index
  );

  const isFormValid =
    formData.college &&
    formData.course &&
    formData.level &&
    formData.passingYear;

  return (
    
    <div className="flex justify-center pt-0 sm:pt-14 w-full font-poppins">
      <div className="p-8 w-full sm:w-1/2 rounded-md bg-transparent sm:bg-white">
      <form className="space-y-4">
        {/* College/University Input */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="college">
            Enter College/University <span className="text-red-500">*</span>
          </label>
          <input
            id="college"
            name="college"
            type="text"
            value={formData.college}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primaryBtn"
            placeholder="e.g., Chandigarh University"
          />
          {errors.college && <p className="text-red-500 text-sm">{errors.college}</p>}
        </div>

        {/* Course Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="course">
            Select Course <span className="text-red-500">*</span>
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primaryBtn"
          >
            {courseOptions.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
        </div>

        {/* Level Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="level">
            Select Level <span className="text-red-500">*</span>
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primaryBtn"
          >
            {levelOptions.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.level && <p className="text-red-500 text-sm">{errors.level}</p>}
        </div>

        {/* Passing Year Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="passingYear">
            Passing Year <span className="text-red-500">*</span>
          </label>
          <select
            id="passingYear"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primaryBtn"
          >
            <option value="">-- Select Year --</option>
            {passingYearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.passingYear && (
            <p className="text-red-500 text-sm">{errors.passingYear}</p>
          )}
        </div>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center">
        <Link to="/review2">
          <button
            className="px-4 py-2 rounded text-white font-bold bg-primaryBtn hover:bg-hoverBtn focus:outline-none disabled:bg-gray-400"
            disabled={!isFormValid}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ReviewSection1;
