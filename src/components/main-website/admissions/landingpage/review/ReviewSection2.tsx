import React, { useState, useEffect } from 'react';

interface FormData {
  title: string;
  review: string;
  rating: number;
  file: File | null;
}

interface ReviewSection2Props {
  onComplete: () => void; // Prop to notify parent about form completion
}

const ReviewSection2: React.FC<ReviewSection2Props> = ({ onComplete }) => {
  const [Overall, setOverall] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Function to validate the form fields
  const validateForm = () => {
    const infraValid =
      Boolean(Overall.title.trim()) &&
      Overall.review.length >= 150 &&
      Overall.rating > 0 &&
      Overall.file !== null;

    setIsFormValid(infraValid);
  };

  // useEffect hook to run validation whenever form data changes
  useEffect(() => {
    validateForm();
  }, [Overall]);

  // Function to handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData
  ) => {
    const value = e.target.value;
    setOverall((prev) => ({ ...prev, [field]: value }));
  };

  // Function to handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setOverall((prev) => ({ ...prev, file }));
  };

  // Function to handle rating change
  const handleRatingChange = (rating: number) => {
    setOverall((prev) => ({ ...prev, rating }));
  };

  // useEffect to call onComplete when form is valid
  useEffect(() => {
    if (isFormValid) {
      onComplete(); // Notify parent that the section is complete
    }
  }, [isFormValid, onComplete]);

  return (
    <div className="flex justify-center pt-1 sm:pt-8 w-full font-poppins">
      <div className="flex flex-col items-center p-8 px-4 sm:px-14 w-full sm:w-1/2 rounded-md bg-transparent sm:bg-white">
        <div className="w-full">
          {/* Overall Section */}
          <div className="mb-8">
            <h1 className="text-lg font-bold mb-4 text-primaryBtn">Overall Review*</h1>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Title"
                value={Overall.title}
                onChange={(e) => handleInputChange(e, 'title')}
                className="border p-2 w-full rounded"
              />
              <textarea
                placeholder="Review"
                value={Overall.review}
                onChange={(e) => handleInputChange(e, 'review')}
                className="border p-2 w-full rounded"
                minLength={150}
              />
              <p className="text-sm text-red-500">
                {Overall.review.length < 150
                  ? 'Description cannot be less than 150 characters.'
                  : ''}
              </p>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    className={`cursor-pointer ${star <= Overall.rating ? 'text-primaryBtn' : 'text-gray-400'}`}
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
        </div>
      </div>
    </div>
  );
};

export default ReviewSection2;
