import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faList, faTachometerAlt, faCog, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const DashboardPage = () => {
  const systemList = [
    { id: '001', location: 'Kisumu', status: 'Working' },
    { id: '002', location: 'Kariokor', status: 'Not working' },
    { id: '003', location: 'Nakuru', status: 'Working' },
    { id: '004', location: 'Karen', status: 'Working' },
    { id: '005', location: 'Kikuyu', status: 'Not working' },
    { id: '006', location: 'BabaDogo', status: 'Working' },
    { id: '007', location: 'Kawangware', status: 'Working' },
    { id: '008', location: 'AkiraChix', status: 'Not working' },
    { id: '009', location: 'Kakamega', status: 'Working' },
  ];

  return (
    <div className="flex h-screen">
     
      <div className="w-1/6 bg-green-100 text-white flex flex-col justify-start">
        <div className="p-4 flex items-center mt-4">
          <img src="/images/Logo.png" alt="Logo" className="h-40 ml-10" />
        </div>
        <ul className="p-2">
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
        <div className="p-4 mt-auto">
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
          <h2 className="text-green-900 font-bold text-4xl mb-4">SYSTEM LISTS</h2>
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
      
        <div className="p-4 ml-4">
          <table className="border-collapse border-spacing-0">
            <thead>
              <tr>
                <th className="pr-4 pb-2 border-b border-gray-400">System ID</th>
           
                <th className="pr-4 pb-2 border-b border-gray-400">Location</th>
              
                <th className="pb-2 border-b border-gray-400">Status</th>
             
              </tr>
            </thead>
            <tbody>
              {systemList.map((system) => (
                <tr
                  key={system.id}
                  className="bg-gray-100 hover:bg-gray-200"
                  style={{
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    marginBottom: '10px',
                    transition: 'box-shadow 0.3s, background-color 0.3s',
                  }}
                >
                  <td className="pr-4 py-2 text-36" style={{ borderBottom: '1px solid #e2e8f0' }}>{system.id}</td>
                  <td className="pr-4 py-2 text-36" style={{ borderBottom: '1px solid #e2e8f0' }}>{system.location}</td>
                  <td className={`py-2 text-36 ${system.status === 'Working' ? 'text-green-500' : 'text-red-500'}`} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    {system.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
