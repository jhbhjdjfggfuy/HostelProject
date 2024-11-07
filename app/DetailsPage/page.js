import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import hostelImage from './hostel.jpg';

const HotelPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Main Image */}
      <div className="w-full h-64 md:h-96 mb-8 relative rounded-lg overflow-hidden">
        <Image
          src={hostelImage}
          alt="Hotel"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Side - Hotel Info */}
        <div className="md:w-1/2">
          <div className="space-y-4">
            <div className="mb-2">
              <span className="text-3xl text-yellow-400">★★★★★</span>
              <span className="ml-2 text-xl font-semibold">Gold Star</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-gray-600" />
              <span className="ml-2 text-lg">Accra</span>
            </div>
          </div>
        </div>

        {/* Right Side - Room Options */}
        <div className="md:w-auto bg-gray-50 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-orange-500 border-b pb-2">
            Rooms Available
          </h2>
          
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm">One in a room</span>
                <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors">
                  Book Now
                </button>
              </div>
              <span className="text-green-500 text-xs">Room Available</span>
            </div>

            <div className="flex flex-col space-y-1 pt-2 border-t">
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm">Two in a room</span>
                <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors">
                  Book Now
                </button>
              </div>
              <span className="text-green-500 text-xs">Room Available</span>
            </div>

            <div className="flex flex-col space-y-1 pt-2 border-t">
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm">Three in a room</span>
                <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors">
                  Book Now
                </button>
              </div>
              <span className="text-green-500 text-xs">Room Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Hostels Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Related Hostels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Related Hostel Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={hostelImage}
                alt="Related Hostel 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Silver Star Hostel</h3>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="ml-1 text-sm text-gray-600">East Legon</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-sm text-green-500">Rooms Available</span>
              </div>
            </div>
          </div>

          {/* Related Hostel Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={hostelImage}
                alt="Related Hostel 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Bronze Gardens</h3>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="ml-1 text-sm text-gray-600">Cantonment</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-green-500">Rooms Available</span>
              </div>
            </div>
          </div>

          {/* Related Hostel Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={hostelImage}
                alt="Related Hostel 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Platinum Plaza</h3>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="ml-1 text-sm text-gray-600">Airport Area</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="text-sm text-green-500">Rooms Available</span>
              </div>
            </div>
          </div>

          {/* Related Hostel Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={hostelImage}
                alt="Related Hostel 4"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Diamond Rest</h3>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="ml-1 text-sm text-gray-600">Osu</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-green-500">Rooms Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;