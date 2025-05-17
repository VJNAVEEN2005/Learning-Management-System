import React from 'react';
import { Users, Briefcase, Award, Heart, Clock, Globe } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years of industry experience"
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Award-winning designer driving our visual identity"
    },
    {
      name: "Marcus Williams",
      role: "Chief Technology Officer",
      bio: "Tech innovator passionate about cutting-edge solutions"
    }
  ];

  const companyValues = [
    { icon: <Heart className="w-8 h-8 text-purple-500" />, title: "Passion", description: "We're driven by our love for what we do" },
    { icon: <Award className="w-8 h-8 text-purple-500" />, title: "Excellence", description: "We strive for the highest quality in everything" },
    { icon: <Globe className="w-8 h-8 text-purple-500" />, title: "Impact", description: "We create meaningful change in our community" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:w-2/3">
            We're a passionate team dedicated to creating innovative solutions that transform how people interact with technology.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mb-6"></div>
            <p className="text-gray-600 mb-4">
              Founded in 2018, our company set out with a clear vision: to create digital experiences that empower and delight users while solving real-world challenges.
            </p>
            <p className="text-gray-600 mb-4">
              We believe in the transformative power of technology when it's designed with people at its center. Our team combines technical expertise with creative thinking to build solutions that stand out in today's digital landscape.
            </p>
            <p className="text-gray-600">
              Whether we're working with startups or enterprise organizations, our approach remains the same – deliver exceptional quality and exceed expectations at every turn.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">45+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">7+</h3>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Our Values</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Our Team</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
              <p className="text-purple-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16 rounded-2xl">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 md:w-2/3 mx-auto">
            We're always looking for passionate individuals to join our growing team. Let's create something amazing together.
          </p>
          <button className="bg-white text-indigo-600 font-extrabold py-3 cursor-pointer px-8 rounded-lg hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;