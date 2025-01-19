import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface FormData {
  title: string;
  review: string;
  rating: number;
  file: File | null;
}

const ReviewSection2: React.FC = () => {
  const [infrastructure, setInfrastructure] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate(); // Get the navigate function for routing

  // Function to validate the form fields
  const validateForm = () => {
    const infraValid =
      Boolean(infrastructure.title.trim()) &&
      infrastructure.review.length >= 150 &&
      infrastructure.rating > 0 &&
      infrastructure.file !== null;

    setIsFormValid(infraValid);
  };

  // useEffect hook to run validation whenever form data changes
  useEffect(() => {
    validateForm();
  }, [infrastructure]);

  // Function to handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData
  ) => {
    const value = e.target.value;
    setInfrastructure((prev) => ({ ...prev, [field]: value }));
  };

  // Function to handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setInfrastructure((prev) => ({ ...prev, file }));
  };

  // Function to handle rating change
  const handleRatingChange = (rating: number) => {
    setInfrastructure((prev) => ({ ...prev, rating }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default form submission

    // If form is not valid, show alert and don't navigate
    if (!isFormValid) {
      alert('Please fill all required fields correctly.');
      return;
    }

    // Navigate to the next page when the form is valid
    navigate('/review3');
  };

  return (
    <div className="flex justify-center pt-1 sm:pt-14 w-full font-poppins">
      <div className="flex flex-col items-center p-8 px-4 sm:px-14 w-full sm:w-1/2 rounded-md bg-transparent sm:bg-white">
        <div className="w-full">
          {/* Infrastructure Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-primaryBtn">Infrastructure *</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Title"
                value={infrastructure.title}
                onChange={(e) => handleInputChange(e, 'title')}
                className="border p-2 w-full rounded"
              />
              <textarea
                placeholder="Review"
                value={infrastructure.review}
                onChange={(e) => handleInputChange(e, 'review')}
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
                    onClick={() => handleRatingChange(star)}
                    className={`cursor-pointer ${
                      star <= infrastructure.rating
                        ? 'text-primaryBtn'
                        : 'text-gray-400'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center gap-5">
            <Link to='/review1'>
            <button className='px-6 py-2 rounded bg-primaryBtn hover:bg-hoverBtn text-white'>PRE</button>
            </Link>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid} // Disable the button when form is not valid
              className={`px-6 py-2 rounded ${
                isFormValid ? 'bg-primaryBtn hover:bg-hoverBtn text-white' : 'bg-gray-300 text-gray-600'
              }`}
            >
              NEXT
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection2;
