import Sidebar from "src/components/main-website/admissions/landingpage/sidebar/Sidebar"
import LandingPages from "./LandingPages"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"

const UniversityLayout = () => {
  return (
    <>
      <div>
        <CollegeLandingPage />
        <div className="flex flex-col md:flex-row">
          {/* Main Content */}
          <div
            className="w-full md:w-4/5 h-screen md:h-auto overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
            }}
          >
            <LandingPages />
          </div>
          {/* Sidebar */}
          <div
            className="hidden md:block w-full md:w-2/5 h-auto"
            style={{
              position: "sticky",
              top: "10vh", // Sidebar top se fix rahega jab tak scroll na ho.
              height: "90vh", // Full height tak fix.
              overflowY: "auto",
            }}
          >
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityLayout;
