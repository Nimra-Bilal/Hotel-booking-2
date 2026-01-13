import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Luxury Spa Retreat",
      description: "Indulge in ultimate relaxation with our premium spa treatments, designed to rejuvenate your mind and body.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
      price: "$299",
      duration: "3 hours"
    },
    {
      id: 2,
      title: "Private Beach Dinner",
      description: "Romantic candlelit dinner by the ocean with personalized chef service and stunning sunset views.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop",
      price: "$450",
      duration: "2 hours"
    },
    {
      id: 3,
      title: "City Tour with Guide",
      description: "Explore hidden gems of the city with our expert local guides and luxury transportation.",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&auto=format&fit=crop",
      price: "$199",
      duration: "5 hours"
    },
    {
      id: 4,
      title: "Wine Tasting Experience",
      description: "Exclusive wine tasting session with sommelier and gourmet cheese pairing.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
      price: "$150",
      duration: "2.5 hours"
    },
    {
      id: 5,
      title: "Adventure Safari",
      description: "Wildlife safari with professional guides, photography sessions, and luxury camping.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop",
      price: "$799",
      duration: "2 days"
    },
    {
      id: 6,
      title: "Cooking Masterclass",
      description: "Learn to cook local delicacies with our Michelin-starred chefs in a private kitchen.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
      price: "$350",
      duration: "4 hours"
    }
  ];

  const featuredDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
      experiences: "12+ Experiences"
    },
    {
      id: 2,
      name: "santonin, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop",
      experiences: "8+ Experiences"
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop",
      experiences: "15+ Experiences"
    },
    {
      id: 4,
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop",
      experiences: "10+ Experiences"
    }
  ];

  return (
    <div className="pt-24 md:pt-28 px-4 md:px-16 lg:px-24">
        <Navbar/>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
          Curated Experiences
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Discover unforgettable moments and exclusive activities designed to elevate your stay beyond ordinary accommodation.
        </p>
      </div>

      {/* Experiences Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-playfair font-semibold mb-8">Featured Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-playfair font-semibold mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((dest) => (
            <div key={dest.id} className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-1">{dest.name}</h3>
                <p className="text-gray-200 text-sm">{dest.experiences}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mb-20">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Our travel concierge is available 24/7 to help you plan the perfect itinerary tailored to your preferences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/rooms" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
          >
            Browse Hotels
          </Link>
          <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors">
            Contact Concierge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;