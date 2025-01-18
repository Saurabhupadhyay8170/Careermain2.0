import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  title: string;
  review: string;
  rating: number;
  file: File | null;
}

const ReviewSection3: React.FC = () => {
  const [infrastructure, setInfrastructure] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });
  const [faculty, setFaculty] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever the state changes
  useEffect(() => {
    const infraValid =
      Boolean(infrastructure.title.trim()) &&
      infrastructure.review.length >= 150 &&
      infrastructure.rating > 0 &&
      infrastructure.file !== null;

    const facultyValid =
      Boolean(faculty.title.trim()) &&
      faculty.review.length >= 150 &&
      faculty.rating > 0 &&
      faculty.file !== null;

    setIsFormValid(infraValid && facultyValid);
  }, [infrastructure, faculty]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData,
    section: 'infrastructure' | 'faculty'
  ) => {
    const value = e.target.value;
    if (section === 'infrastructure') {
      setInfrastructure((prev) => ({ ...prev, [field]: value }));
    } else {
      setFaculty((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: 'infrastructure' | 'faculty'
  ) => {
    const file = e.target.files?.[0] || null;
    if (section === 'infrastructure') {
      setInfrastructure((prev) => ({ ...prev, file }));
    } else {
      setFaculty((prev) => ({ ...prev, file }));
    }
  };

  const handleRatingChange = (
    rating: number,
    section: 'infrastructure' | 'faculty'
  ) => {
    if (section === 'infrastructure') {
      setInfrastructure((prev) => ({ ...prev, rating }));
    } else {
      setFaculty((prev) => ({ ...prev, rating }));
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isFormValid) {
      e.preventDefault(); // Prevent navigation
      alert('Please fill all required fields correctly.');
    }
  };

  return (
    <div className='flex justify-center w-full pt-1 sm:pt-14 font-poppins'>
      <div className="flex flex-col items-center p-8 px-4 sm:px-14 w-full sm:w-1/2 rounded-md bg-transparent sm:bg-white">
      <div className="w-full ">
        {/* Infrastructure Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-primaryBtn">Infrastructure *</h2>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Title"
              value={infrastructure.title}
              onChange={(e) => handleInputChange(e, 'title', 'infrastructure')}
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Review"
              value={infrastructure.review}
              onChange={(e) => handleInputChange(e, 'review', 'infrastructure')}
              className="border p-2 w-full rounded"
              minLength={150}
            />
            <p className="text-sm text-red-500">
              {infrastructure.review.length < 150
                ? 'Description cannot be less than 150 characters.'
                : ''}
            </p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star, 'infrastructure')}
                  className={`cursor-pointer ${
                    star <= infrastructure.rating
                      ? 'text-yellow-500'
                      : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 'infrastructure')}
              className="border p-2 w-full rounded"
            />
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-primaryBtn">Faculty *</h2>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Title"
              value={faculty.title}
              onChange={(e) => handleInputChange(e, 'title', 'faculty')}
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Review"
              value={faculty.review}
              onChange={(e) => handleInputChange(e, 'review', 'faculty')}
              className="border p-2 w-full rounded"
              minLength={150}
            />
            <p className="text-sm text-red-500">
              {faculty.review.length < 150
                ? 'Description cannot be less than 150 characters.'
                : ''}
            </p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star, 'faculty')}
                  className={`cursor-pointer ${
                    star <= faculty.rating
                      ? 'text-yellow-500'
                      : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 'faculty')}
              className="border p-2 w-full rounded"
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center gap-5">
          <Link to='/review2'>
           <button className='px-6 py-2 rounded bg-primaryBtn hover:bg-hoverBtn text-white'>PRE</button>
          </Link>
          <Link to="/review4">
            <button
              onClick={handleSubmit}
              className={`px-6 py-2 rounded ${
                isFormValid
                  ? 'bg-primaryBtn hover:bg-hoverBtn text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReviewSection3;
