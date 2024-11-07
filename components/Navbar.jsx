import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle, AiOutlineSearch } from 'react-icons/ai';
import hostelImage from './hostel.jpg'; 
import './input.css'

export default function Navbar() {
  return (
    <nav
      className="relative bg-cover bg-center p-8 h-screen w-full "
      style={{ backgroundImage: `url(${hostelImage.src})`, backgroundSize: 'cover' }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex justify-between items-center">
        {/* Left - Site Name */}
        <div className="text-gray-300 font-bold text-4xl">
          HostelHubGH
        </div>

        {/* Right - Links with Icons in Round White Background */}
        <div className="space-x-8 flex items-center">
          <span className="flex items-center bg-white p-2 rounded-lg hover:shadow-lg cursor-pointer">
            <AiOutlineHome className="text-gray-600 text-xl" />
            <span className="ml-2 text-gray-600">Home</span>
          </span>
          <span className="flex items-center bg-white p-2 rounded-lg hover:shadow-lg cursor-pointer">
            <AiOutlineMail className="text-gray-600 text-xl" />
            <span className="ml-2 text-gray-600">Contact</span>
          </span>
          <span className="flex items-center bg-white p-2 rounded-lg hover:shadow-lg cursor-pointer">
            <AiOutlineInfoCircle className="text-gray-600 text-xl" />
            <span className="ml-2 text-gray-600">About</span>
          </span>
        </div>
      </div>

      {/* Centered Search Bar with Icon */}
      <div className="relative z-10 flex justify-center items-center" style={{ marginTop: '25vh' }}>
        <div className="relative w-full max-w-5xl"> 
          <input
            type="text"
            placeholder="Search Hostel | Location | University"
            className="w-full px-12 py-4 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            style={{ color: 'black' }} 
          />

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 p-4 rounded-full">
            <AiOutlineSearch className="text-white text-2xl" />
          </div>
        </div>
      </div>

      {/* Large Text Below the Search */}
      <div className="relative z-10 mt-8 text-center text-5xl text-gray-300">
        Find Your Preferred Hostel That Best Suits You Within 
        <h1 className="mt-4"> Accra</h1>    
      </div>
    </nav>
  );
}