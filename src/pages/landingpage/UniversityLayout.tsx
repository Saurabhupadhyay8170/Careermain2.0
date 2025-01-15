import Sidebar from "src/components/main-website/admissions/landingpage/sidebar/Sidebar"
import LandingPages from "./LandingPages"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"

const UniversityLayout = () => {
  return (
    <>
      <div>
        <CollegeLandingPage/>
        <div className="flex flex-col md:flex-row h-screen">
          {/* Main Content */}
         <div className="w-full md:w-4/5 h-3/4 md:h-full overflow-y-auto"
          style={{
            scrollbarWidth: "thin"
          }}>
          <LandingPages/>
         </div>
         {/* Sidebar */}
         <div className="hidden md:block w-full md:w-2/5 h-1/4 md:h-full">
          <Sidebar />
         </div>
         
       </div>
      </div>
    </>
  )
}

export default UniversityLayout