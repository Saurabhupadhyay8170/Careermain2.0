import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  title: string;
  review: string;
  rating: number;
  file: File | null;
}

const ReviewSection4: React.FC = () => {
  const [Placements, setPlacements] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });
  const [Hostel, setHostel] = useState<FormData>({
    title: '',
    review: '',
    rating: 0,
    file: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever the state changes
  useEffect(() => {
    const infraValid =
      Boolean(Placements.title.trim()) &&
      Placements.review.length >= 150 &&
      Placements.rating > 0 &&
      Placements.file !== null;

    const HostelValid =
      Boolean(Hostel.title.trim()) &&
      Hostel.review.length >= 150 &&
      Hostel.rating > 0 &&
      Hostel.file !== null;

    setIsFormValid(infraValid && HostelValid);
  }, [Placements, Hostel]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData,
    section: 'Placements' | 'Hostel'
  ) => {
    const value = e.target.value;
    if (section === 'Placements') {
      setPlacements((prev) => ({ ...prev, [field]: value }));
    } else {
      setHostel((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: 'Placements' | 'Hostel'
  ) => {
    const file = e.target.files?.[0] || null;
    if (section === 'Placements') {
      setPlacements((prev) => ({ ...prev, file }));
    } else {
      setHostel((prev) => ({ ...prev, file }));
    }
  };

  const handleRatingChange = (
    rating: number,
    section: 'Placements' | 'Hostel'
  ) => {
    if (section === 'Placements') {
      setPlacements((prev) => ({ ...prev, rating }));
    } else {
      setHostel((prev) => ({ ...prev, rating }));
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isFormValid) {
      e.preventDefault(); // Prevent navigation
      alert('Please fill all required fields correctly.');
    }
  };

  return (
    <div className='flex justify-center font-poppins w-full pt-1 sm:pt-14'>
      <div className="flex flex-col items-center p-8 px-4 sm:px-14 w-full sm:w-1/2 rounded-md bg-transparent sm:bg-white">
      <div className="w-full ">
        {/* Placements Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-primaryBtn">Placements *</h2>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Title"
              value={Placements.title}
              onChange={(e) => handleInputChange(e, 'title', 'Placements')}
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Review"
              value={Placements.review}
              onChange={(e) => handleInputChange(e, 'review', 'Placements')}
              className="border p-2 w-full rounded"
              minLength={150}
            />
            <p className="text-sm text-red-500">
              {Placements.review.length < 150
                ? 'Description cannot be less than 150 characters.'
                : ''}
            </p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star, 'Placements')}
                  className={`cursor-pointer ${
                    star <= Placements.rating
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
              onChange={(e) => handleFileChange(e, 'Placements')}
              className="border p-2 w-full rounded"
            />
          </div>
        </div>

        {/* Hostel Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-primaryBtn">Hostel *</h2>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Title"
              value={Hostel.title}
              onChange={(e) => handleInputChange(e, 'title', 'Hostel')}
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Review"
              value={Hostel.review}
              onChange={(e) => handleInputChange(e, 'review', 'Hostel')}
              className="border p-2 w-full rounded"
              minLength={150}
            />
            <p className="text-sm text-red-500">
              {Hostel.review.length < 150
                ? 'Description cannot be less than 150 characters.'
                : ''}
            </p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star, 'Hostel')}
                  className={`cursor-pointer ${
                    star <= Hostel.rating
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
              onChange={(e) => handleFileChange(e, 'Hostel')}
              className="border p-2 w-full rounded"
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center gap-5">
          <Link to='/review3'>
            <button className='px-6 py-2 rounded bg-primaryBtn hover:bg-hoverBtn text-white'>PRE</button>
          </Link>
          <Link to="/review5">
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

export default ReviewSection4;
