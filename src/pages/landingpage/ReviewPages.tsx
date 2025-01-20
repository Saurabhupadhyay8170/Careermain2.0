import React, { useState } from 'react';
import ReviewSection1 from '../../components/main-website/admissions/landingpage/review/ReviewSection1';
import ReviewSection2 from '../../components/main-website/admissions/landingpage/review/ReviewSection2';
import ReviewSection3 from '../../components/main-website/admissions/landingpage/review/ReviewSection3';
import ReviewSection4 from '../../components/main-website/admissions/landingpage/review/ReviewSection4';
import ReviewSection5 from '../../components/main-website/admissions/landingpage/review/ReviewSection5';

// Define the structure of the `sectionCompletion` state
interface SectionCompletion {
  [key: number]: boolean;
}

const ReviewPages: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([1]); // Track visible sections
  const [sectionCompletion, setSectionCompletion] = useState<SectionCompletion>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  }); // Track completion of sections

  // Mark a section as complete
  const markSectionComplete = (section: number) => {
    setSectionCompletion((prev) => ({
      ...prev,
      [section]: true,
    }));
  };

  const handleNext = () => {
    const lastVisible = visibleSections[visibleSections.length - 1];
    if (sectionCompletion[lastVisible]) {
      setVisibleSections((prev) => [...prev, lastVisible + 1]);
    } else {
      alert('Please complete the current section before proceeding.');
    }
  };

  return (
    <div>
      {visibleSections.includes(1) && (
        <ReviewSection1 onComplete={() => markSectionComplete(1)} />
      )}
      {visibleSections.includes(2) && (
        <ReviewSection2 onComplete={() => markSectionComplete(2)} />
      )}
      {visibleSections.includes(3) && (
        <ReviewSection3 onComplete={() => markSectionComplete(3)} />
      )}
      {visibleSections.includes(4) && (
        <ReviewSection4 onComplete={() => markSectionComplete(4)} />
      )}
      {visibleSections.includes(5) && (
        <ReviewSection5/>
      )}

      {visibleSections.length < 5 && (
        <div className='flex justify-center w-full pt-3'>
          <button
        onClick={handleNext}
        disabled={!sectionCompletion[visibleSections[visibleSections.length - 1]]}
        className={`${
          sectionCompletion[visibleSections[visibleSections.length - 1]]
            ? 'bg-primaryBtn hover:bg-hoverBtn cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed'
        } text-white py-2 px-4 rounded`}
      >
        <h1>Next</h1>
      </button>
        </div>
      
      )}
    </div>
  );
};

export default ReviewPages;
