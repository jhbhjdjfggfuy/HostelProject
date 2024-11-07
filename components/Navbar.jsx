import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle, AiOutlineSearch } from 'react-icons/ai';
import hostelImage from './hostel.jpg';
import './input.css';

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
      
      {/* Hostel Listing Section */}
      <div className="relative z-10 mt-20 px-8 grid grid-cols-4 gap-8">
        {/* Hostel Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\hostel.jpg" alt="Hostel 1" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 2" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 3" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 4" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:/HostelProject/components/HostelPic.png" alt="Hostel 5" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 6" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:/HostelProject/components/HostelPic.png" alt="Hostel 7" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 8" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:/HostelProject/components/HostelPic.png" alt="Hostel 9" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 10" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:/HostelProject/components/HostelPic.png" alt="Hostel 11" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 12" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:/HostelProject/components/HostelPic.png" alt="Hostel 13" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 14" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:/HostelProject/components/HostelPic.png" alt="Hostel 15" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 16" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:/HostelProject/components/HostelPic.png" alt="Hostel 17" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 18" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 20" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img src="D:\HostelProject\components\HostelPic.png" alt="Hostel 22" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4 text-2xl font-semibold text-gray-800">Abeka, Accra</div>
          <div className="text-gray-500">GoldStar Hostel</div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">View Details</button>
        </div>     
        

      </div>

      <nav
      className="relative bg-cover bg-center p-8 h-screen w-full "
      style={{ backgroundImage: `url(${hostelImage.src})`, backgroundSize: 'cover', marginTop: '5vh' }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
      {/* Categories */}
      <div className="relative z-10 text-center mt-12">
        <h2 className="text-3xl text-gray-300 font-semibold">Categories</h2>
        <div className="flex justify-center mt-6 space-x-8">
          {/* Economy Hostel */}
          <div className="p-6 rounded-lg  max-w-xs">
            <img src={hostelImage} alt="" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl text-gray-300 font-semibold mt-4">Economy Hostel</h3>
            <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full mt-4">View</button>
          </div>

          {/* Premium Economy Hostel */}
          <div className="p-6 rounded-lg max-w-xs">
            <img src={hostelImage} alt="" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl text-gray-300 font-semibold mt-4">Premium Economy Hostel</h3>
            <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full mt-4">View</button>
          </div>

          {/* First Class Hostel */}
          <div className="p-6 rounded-lg  max-w-xs">
            <img src={hostelImage} alt="" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl text-gray-300 font-semibold mt-4">First Class Hostel</h3>
            <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full mt-4">View</button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative z-10 flex justify-center items-center" style={{ marginTop: '15vh' }}>
        <div className="relative w-full max-w-5xl">
          <input
            type="text"
            placeholder="Search Hostel | Location | University"
            className="w-full px-12 py-4 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 p-4 rounded-full">
            <AiOutlineSearch className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </nav>
      {/* Footer */}
      <div className="bg-blue-900 text-gray-300 py-8 mt-16 w-full" style={{ marginTop: '-2vh' }}>
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-around text-lg">
            <div className="mb-4">
              <h4 className="font-bold mb-2">Visit All Our Socials</h4>
              <div className="flex space-x-4 justify-center">
                <span className="cursor-pointer">Facebook</span>
                <span className="cursor-pointer">YouTube</span>
                <span className="cursor-pointer">Instagram</span>
                <span className="cursor-pointer">Twitter</span>
                <span className="cursor-pointer">TikTok</span>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Support</h4>
              <ul>
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Hostel HUBGH</h4>
              <p>We Care For Your Comfort</p>
              <p>Email Us: HostelHUBGH@gmail.com</p>
            </div>
          </div>
          <p className="text-center mt-4">Copyright © 2024 MGTECH SOLUTION. All rights reserved.</p>
        </div>
      </div>
    </nav>
  );
}
