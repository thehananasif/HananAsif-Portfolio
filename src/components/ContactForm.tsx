
import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import ThreeDCard from './ThreeDCard';
import WhatsAppQR from './WhatsAppQR';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would normally send the form data to a server
    alert('Thanks for your message! This form is a demo and doesn\'t actually send emails.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ThreeDCard className="bg-portfolio-dark-purple rounded-xl border border-portfolio-purple/20 overflow-hidden">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="contact-form-field"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="contact-form-field"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="contact-form-field"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-portfolio-purple text-white font-medium transition-colors duration-300 hover:bg-portfolio-light-purple"
            >
              Send Message
            </button>
          </form>
        </div>
      </ThreeDCard>
      
      <ThreeDCard className="bg-portfolio-dark-purple rounded-xl border border-portfolio-purple/20 overflow-hidden">
        <div className="p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-portfolio-purple/20 flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-portfolio-light-purple" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <p className="text-white">hananasif902@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-portfolio-purple/20 flex items-center justify-center mr-4">
                <Phone className="h-6 w-6 text-portfolio-light-purple" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Phone</p>
                <p className="text-white">+92 320 4814497</p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <h4 className="text-lg font-bold text-white mb-4">WhatsApp</h4>
            <div className="flex justify-center">
              <WhatsAppQR phoneNumber="+923204814497" />
            </div>
            <p className="text-sm text-gray-300 mt-2 text-center">Scan to connect on WhatsApp</p>
          </div>
        </div>
      </ThreeDCard>
    </div>
  );
};

export default ContactForm;
