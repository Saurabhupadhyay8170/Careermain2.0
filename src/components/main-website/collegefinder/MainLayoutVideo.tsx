
import React from 'react';
import { Outlet } from 'react-router-dom';
import VideoFinder from './VideoFinder';
import FinderContent from './FinderContent';
import UnivercitiesLogoSlider from '../homePage/UnivercitiesLogoSlider';
import ScrollTop from '../ScrollTop';
import PrivacyForm from '../privacypolicy/PrivacyForm';

const MainLayoutVideo: React.FC = () => {
  return (
    <div className='font-poppins'>
      <ScrollTop/>
      <VideoFinder />
      <div className="relative">
        <Outlet /> 
      </div>
      <FinderContent/>
      
      <div className='px-4'><UnivercitiesLogoSlider/></div>
      <PrivacyForm/>
    </div>
  );
};

export default MainLayoutVideo;