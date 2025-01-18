import ReviewSection1 from "src/components/main-website/admissions/landingpage/review/ReviewSection1";
import ReviewSection2 from "src/components/main-website/admissions/landingpage/review/ReviewSection2";
import ReviewSection3 from "src/components/main-website/admissions/landingpage/review/ReviewSection3";
import ReviewSection4 from "src/components/main-website/admissions/landingpage/review/ReviewSection4";
import ReviewSection5 from "src/components/main-website/admissions/landingpage/review/ReviewSection5";

const ReviewRoutes = [
  {
    path:"/review1",
    element:ReviewSection1,
  },
  {
    path:"/review2",
    element:ReviewSection2,
  },
  {
    path:"/review3",
    element:ReviewSection3,
  },
  {
    path:"/review4",
    element:ReviewSection4,
  },
  {
    path:"/review5",
    element:ReviewSection5,
  }
]
export default ReviewRoutes;