import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help! Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Information Cards */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-primary-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600 mb-2">Call us anytime</p>
          <a href="tel:+94771234567" className="text-primary-600 font-medium hover:underline">
            +94 77 123 4567
          </a>
          <p className="text-sm text-gray-500 mt-2">Mon - Sat: 8 AM - 8 PM</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <div className="bg-fresh-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-fresh-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600 mb-2">Send us a message</p>
          <a href="mailto:info@farmfoods.lk" className="text-primary-600 font-medium hover:underline">
            info@farmfoods.lk
          </a>
          <p className="text-sm text-gray-500 mt-2">We'll reply within 24 hours</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600 mb-2">Visit our store</p>
          <p className="text-primary-600 font-medium">
            123 Main Street<br />
            Colombo, Sri Lanka
          </p>
          <p className="text-sm text-gray-500 mt-2">Free parking available</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          {submitted ? (
            <div className="bg-fresh-50 border border-fresh-200 rounded-lg p-6 text-center">
              <div className="bg-fresh-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-fresh-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-fresh-800 mb-2">Message Sent!</h3>
              <p className="text-fresh-700">Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+94 77 123 4567"
                />
              </div>

              <div className="mb-4">
                <Input
                  label="Subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          )}
        </div>

        {/* Map and Additional Info */}
        <div>
          {/* Map Placeholder */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Map placeholder</p>
                <p className="text-sm text-gray-500">123 Main Street, Colombo</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-primary-600" size={24} />
              <h3 className="text-xl font-semibold">Opening Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Monday - Friday</span>
                <span className="text-gray-600">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Saturday</span>
                <span className="text-gray-600">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-700">Sunday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-fresh-50 rounded-lg">
              <p className="text-sm text-fresh-800 font-medium">
                💚 Same-day delivery available for orders placed before 12 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your delivery hours?</h3>
            <p className="text-gray-600">
              We deliver from 9 AM to 7 PM, Monday to Saturday. Same-day delivery is available for orders placed before 12 PM.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you have a minimum order value?</h3>
            <p className="text-gray-600">
              Yes, our minimum order value is Rs. 1,000. Free delivery is available for orders above Rs. 5,000.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How fresh are your products?</h3>
            <p className="text-gray-600">
              All our products are delivered fresh daily. We maintain strict quality control and hygiene standards.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept cash on delivery, card payments, and bank transfers for your convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
