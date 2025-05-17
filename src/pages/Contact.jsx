import { IconBrandInstagramFilled, IconBrandLinkedin, IconBrandLinkedinFilled, IconLocation, IconMail, IconPhone, IconPhoneFilled } from '@tabler/icons-react'
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left side - Contact Info */}
        <div className="lg:w-2/5 bg-gradient-to-r from-indigo-500 to-purple-500 p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-8">Let's talk.</h2>
            <p className="mb-12 text-indigo-100">
              Have questions or want to work together? We'd love to hear from you.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                <IconMail className="text-purple-500"/>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-indigo-100 mt-1">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                 <IconPhone className="text-purple-500"/>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-indigo-100 mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                 <IconLocation className="text-purple-500"/>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-indigo-100 mt-1">123 Innovation Drive<br/>Tech City, CA 90210</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                <IconBrandLinkedinFilled className="text-purple-500"/>
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                 <IconBrandInstagramFilled className="text-purple-500"/>
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                 <IconPhoneFilled className="text-purple-500"/>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="lg:w-3/5 p-12">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-gray-800">Send us a message</h3>
            <p className="text-gray-500 mt-2">Feel free to reach out to us with any questions or inquiries.</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-0"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-0"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-0"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div>
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact