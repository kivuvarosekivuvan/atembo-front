import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faList, faTachometerAlt, faCog, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/6 bg-green-100 text-white flex flex-col justify-between">
        <div className="p-4 flex items-center">
          <img src="/images/Logo.png" alt="Logo" className="h-40 ml-10" />
        </div>
        <ul className="p-2 py-10">
          <li className="py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faTachometerAlt} className="text-green-500 mr-2" />
            <span className="ml-1 capitalize text-xl">DASHBOARD</span>
          </li>
          <li className="py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faList} className="text-green-500 mr-2" />
            <span className="ml-1 capitalize text-xl">SYSTEM LIST</span>
          </li>
          <li className="py-4 text-green-900 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faChartBar} className="text-green-500 mr-2" />
            <span className="ml-1 capitalize text-xl">ANALYSIS</span>
          </li>
        </ul>
        <div className="flex-grow"></div>
        <div className="p-4">
          <div className="text-green-900 font-bold ml-10 hover:text-black cursor-pointer">
            <FontAwesomeIcon icon={faCog} className="text-green-500 mr-2" />
            <span className="ml-1 capitalize text-xl">Settings</span>
          </div>
          <div className="text-green-900 mt-4 font-bold ml-10 hover:text-black cursor-pointer">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-green-500 mr-2" />
            <span className="ml-1 capitalize text-xl">Logout</span>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-white">
        <div className="flex justify-end p-4">
          <div className="relative mr-40 mt-8">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="py-2 pr-40 pl-5 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            />
            <button className="absolute right-0 top-0 h-full w-10 bg-green-500 text-white rounded-r-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          .text-green-500:hover {
            color: white !important;
          }
          .hover\:px-2:hover {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          .hover\:bg-green-500:hover {
            background-color: #34D399 !important;
          }
        `}
      </style>
    </div>
  );
};

export default DashboardPage;