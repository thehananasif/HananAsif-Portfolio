
import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Mail, UserRound, Award, Laptop, Globe, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingText from '@/components/FloatingText';
import Timeline, { TimelineItem } from '@/components/Timeline';
import SkillsGrid, { Skill } from '@/components/SkillsGrid';
import ProjectCard, { Project } from '@/components/ProjectCard';
import CertificationCard, { Certification } from '@/components/CertificationCard';
import ThreeDCard from '@/components/ThreeDCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Update document title for SEO
    document.title = "Hanan Asif - Digital Strategist Portfolio";
    
    // Update meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore the 3D portfolio of Hanan Asif, showcasing expertise in social media management, content creation, digital marketing, and web development.');
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Define all our navigation sections
  const sections = [
    { id: 'welcome', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'contact', title: 'Contact' },
  ];

  // Experience timeline data
  const timelineData: TimelineItem[] = [
    {
      year: '2017',
      title: 'Self-managed Social Media & Websites',
      description: 'Started self-managing various social media accounts and websites, building a foundation in digital marketing and content creation.'
    },
    {
      year: '2018',
      title: 'Social Media Manager at The Lyceum Group (PK)',
      description: 'Joined The Lyceum Group in Pakistan as a Social Media Manager, handling their digital presence and marketing initiatives.'
    },
    {
      year: '2019',
      title: 'Expanded to Oman branch',
      description: 'Extended management responsibilities to include the Oman branch, broadening international experience in digital marketing strategies.'
    },
    {
      year: '2020',
      title: 'Managed British Lyceum Online & Royal Lyceum',
      description: 'Took over management of British Lyceum Online and Royal Lyceum digital platforms, implementing successful marketing campaigns during the pandemic shift to online education.'
    },
    {
      year: '2021',
      title: 'Added Sociogenic & Zaabta Real Estate',
      description: 'Expanded portfolio to include Sociogenic and Zaabta Real Estate, diversifying experience across different industries.'
    },
    {
      year: '2022',
      title: 'Projects with Toddlers App, E-School, Khane Makeup',
      description: 'Managed multiple specialized projects including Toddlers App, E-School educational platform, and Khane Makeup brand.'
    },
    {
      year: '2023-2025',
      title: 'Current ongoing roles',
      description: 'Currently managing digital strategies for multiple schools and businesses, focusing on comprehensive marketing solutions and platform growth.'
    }
  ];

  // Skills data
  const skillsData: Skill[] = [
    { 
      name: 'Social Media Management', 
      description: 'Strategic management of social media platforms to build brand presence and engage with target audiences.',
      icon: <Globe className="w-10 h-10" />
    },
    { 
      name: 'Content Creation', 
      description: 'Creating engaging visual and written content tailored to different platforms and audiences.',
      icon: <Camera className="w-10 h-10" />
    },
    { 
      name: 'Digital Marketing', 
      description: 'Implementing comprehensive digital marketing strategies to drive growth and engagement.',
      icon: <Briefcase className="w-10 h-10" />
    },
    { 
      name: 'Analytics', 
      description: 'Using data analysis to track performance and inform strategic decisions.',
      icon: <Code className="w-10 h-10" />
    },
    { 
      name: 'Production', 
      description: 'Managing shoots and executing production processes for high-quality content.',
      icon: <Camera className="w-10 h-10" />
    },
    { 
      name: 'Canva', 
      description: 'Expert in using Canva for professional graphic design and visual content creation.',
      icon: <Code className="w-10 h-10" />
    },
    { 
      name: 'CapCut', 
      description: 'Proficient in using CapCut for professional video editing and content creation.',
      icon: <Code className="w-10 h-10" />
    },
    { 
      name: 'Branding', 
      description: 'Developing and maintaining consistent brand identities across multiple platforms.',
      icon: <Briefcase className="w-10 h-10" />
    },
    { 
      name: 'Time Management', 
      description: 'Expert in efficient time allocation and project management for optimal results.',
      icon: <Briefcase className="w-10 h-10" />
    },
    { 
      name: 'Web Development', 
      description: 'Creating and maintaining websites with focus on user experience and functionality.',
      icon: <Code className="w-10 h-10" />
    },
    { 
      name: 'Web Designing', 
      description: 'Designing visually appealing and user-friendly web interfaces.',
      icon: <Laptop className="w-10 h-10" />
    },
    { 
      name: 'SEO', 
      description: 'Implementing search engine optimization strategies to improve online visibility.',
      icon: <Globe className="w-10 h-10" />
    },
    { 
      name: 'Content Writing', 
      description: 'Crafting engaging and effective written content for various platforms and purposes.',
      icon: <Code className="w-10 h-10" />
    }
  ];

  // Projects data
  const projectsData: Project[] = [
    {
      title: 'American Lyceum International School',
      description: 'Developed and executed comprehensive social media campaigns for American Lyceum International School, resulting in increased engagement and brand awareness. The strategy included content creation, community management, and targeted advertising.'
    },
    {
      title: 'Zaabta Real Estate',
      description: 'Designed and implemented a modern, user-friendly website for Zaabta Real Estate, featuring property listings, search functionality, and lead generation forms. The project included SEO optimization and integration with social media marketing.'
    },
    {
      title: 'Khane Makeup',
      description: 'Created branding and content strategy for Khane Makeup, including visual identity, product photography, and marketing materials. The comprehensive approach helped establish a distinctive brand presence in a competitive market.'
    },
    {
      title: 'British Lyceum Online',
      description: 'Managed the digital transition for British Lyceum during the pandemic, implementing online learning platforms and creating engaging educational content for remote students.'
    },
    {
      title: 'E-School Platform',
      description: 'Developed content strategy and marketing plan for E-School educational platform, focusing on user acquisition and engagement through targeted digital campaigns.'
    },
    {
      title: 'Toddlers App',
      description: 'Contributed to the marketing and content strategy for a mobile application designed for toddler education, including user experience consultation and promotional content creation.'
    }
  ];

  // Certifications data
  const certificationsData: Certification[] = [
    {
      title: 'Foundations of Business Intelligence',
      issuer: 'Google & Coursera'
    },
    {
      title: 'Introduction to Marketing',
      issuer: 'University of Pennsylvania & Coursera'
    },
    {
      title: 'Introduction to Social Media Marketing',
      issuer: 'Meta & Coursera'
    },
    {
      title: 'Foundations of Digital Marketing & E-commerce',
      issuer: 'Google & Coursera'
    },
    {
      title: 'Introduction to Meta',
      issuer: 'Meta & Coursera'
    },
    {
      title: 'Introduction to Database',
      issuer: 'Meta & Coursera'
    }
  ];

  return (
    <>
      <Preloader loading={loading} />
      
      {!loading && (
        <>
          <Navbar sections={sections} />
          <ParticleBackground />
          
          {/* Welcome Section */}
          <section id="welcome" className="min-h-screen relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              {/* Background video would go here */}
              <div className="absolute inset-0 bg-portfolio-dark-purple bg-opacity-70"></div>
            </div>
            
            <div className="container mx-auto px-4 z-10 text-center">
              <FloatingText 
                text=""
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
                  <span className="text-portfolio-light-purple">Hanan</span> Asif
                </h1>
              </FloatingText>
              
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                <h2 className="text-xl md:text-2xl text-white font-light mb-8">
                  Digital Strategist | Social Media Expert | Web Specialist
                </h2>
              </div>
              
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium"
                >
                  Explore My Work
                </button>
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <section id="about" className="py-24 relative bg-gradient-to-b from-portfolio-dark-purple to-portfolio-dark-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                  About <span className="text-portfolio-light-purple">Me</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <ThreeDCard className="bg-portfolio-dark-gray/60 rounded-xl overflow-hidden border border-portfolio-purple/20">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                        <UserRound className="w-24 h-24 text-portfolio-light-purple/70" />
                      </div>
                    </div>
                  </ThreeDCard>
                  
                  <div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      A dynamic digital marketing professional with over 7 years of experience in social media management, content creation, and web development. Passionate about creating impactful digital strategies that drive engagement and growth for businesses and educational institutions.
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      Specializing in comprehensive digital solutions, from social media campaigns to website development, with a proven track record of success across multiple industries and international markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section id="skills" className="py-24 relative bg-portfolio-dark-gray">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                My <span className="text-portfolio-light-purple">Skills</span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <SkillsGrid skills={skillsData} />
              </div>
            </div>
          </section>
          
          {/* Experience Section */}
          <section id="experience" className="py-24 relative bg-gradient-to-b from-portfolio-dark-gray to-portfolio-dark-purple">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Work <span className="text-portfolio-light-purple">Experience</span>
              </h2>
              
              <div className="max-w-5xl mx-auto">
                <Timeline items={timelineData} />
              </div>
            </div>
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="py-24 relative bg-portfolio-dark-purple">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Featured <span className="text-portfolio-light-purple">Projects</span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Certifications Section */}
          <section id="certifications" className="py-24 relative bg-gradient-to-b from-portfolio-dark-purple to-portfolio-dark-gray">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                <span className="text-portfolio-light-purple">Certifications</span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certificationsData.map((certification, index) => (
                    <CertificationCard key={index} certification={certification} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="py-24 relative bg-portfolio-dark-gray">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Get In <span className="text-portfolio-light-purple">Touch</span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <ContactForm />
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="py-8 bg-portfolio-dark-purple border-t border-portfolio-purple/20">
            <div className="container mx-auto px-4 text-center">
              <div className="animate-rotate-slow inline-block mb-4">
                <div className="text-2xl font-bold text-portfolio-light-purple">HA</div>
              </div>
              
              <p className="text-gray-400 text-sm">
                © 2025 Hanan Asif. All Rights Reserved.
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Index;
