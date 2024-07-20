import React from 'react';
import { ComplexNavbar } from '../Navbar';

const BaseLayout = ({ children }) => {
  return (
    <div className="bg-[#fff] w-full min-h-screen ">
      <ComplexNavbar />
      <div className={`relative top-14 flex flex-col w-full`}>{children}</div>
    </div>
  );
};

export default BaseLayout;
