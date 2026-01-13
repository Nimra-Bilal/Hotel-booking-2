import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60",
      bio: "15+ years in hospitality industry"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop",
      bio: "Former luxury hotel manager"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Guest Experience Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop",
      bio: "Specializes in personalized service"
    },
    {
      id: 4,
      name: "David Park",
      role: "Technology Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
      bio: "Built award-winning booking platform"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Guests" },
    { number: "150+", label: "Global Partners" },
    { number: "24/7", label: "Support Available" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const values = [
    {
      icon: "⭐",
      title: "Excellence",
      description: "We never compromise on quality, ensuring every experience exceeds expectations."
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Transparent pricing and honest reviews build lasting relationships with our guests."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "From boutique stays to luxury resorts, we connect you to the world's best accommodations."
    },
    {
      icon: "❤️",
      title: "Personalization",
      description: "Every journey is unique, and we tailor our services to match your individual preferences."
    }
  ];

  return (
    <div className=" mb-24 pt-24 md:pt-28 px-4 md:px-16 lg:px-24">
        <Navbar/>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
          Our Story
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Founded in 2015, QuickStay has redefined luxury travel by connecting discerning travelers with exceptional accommodations and curated experiences worldwide.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop" 
              alt="Luxury hotel lobby"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-playfair font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-4">
              To transform ordinary stays into extraordinary memories by providing seamless access to the world's most sought-after accommodations and experiences.
            </p>
            <p className="text-gray-600 mb-6">
              We believe travel should be effortless, luxurious, and unforgettable. Our team works tirelessly to vet every property, ensuring they meet our strict standards of quality, service, and authenticity.
            </p>
            <Link 
              to="/rooms" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-playfair font-semibold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-playfair font-semibold text-center mb-12">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Ready to Experience Luxury?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied guests who have transformed their travel experiences with QuickStay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/rooms" 
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
          >
            Book Your Stay
          </Link>
          <Link 
            to="/experience" 
            className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors"
          >
            Explore Experiences
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;