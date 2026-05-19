import React from 'react'
import { useNavigate } from 'react-router-dom';

const Femhome = () => {
  const navigate = useNavigate();

  const sendInput = () => {
    navigate('/input');
  };

  return (
    <div className="femaura-home min-h-screen bg-pink-50 flex flex-col">
      
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-600">FemAura</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-pink-600" onClick={()=>navigate('/about')}>About</a>
          {/* <a href="#services" className="hover:text-pink-600">Services</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a> */}
           <button className="hover:text-pink-600" onClick={()=>navigate('/')}>Register</button>
             <button className="hover:text-pink-600" onClick={()=>navigate('/login')}>Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 leading-tight">
            Empowering Women's Wellness & Care
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            FemAura is your trusted companion for women’s health, wellness, and empowerment.
            Explore curated services designed to support your journey.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-xl text-lg hover:bg-pink-700"
            onClick={sendInput}
          >
            Get Started
          </button>
        </div>

        <img
          // src="https://www.orfonline.org/public/uploads/posts/image/menstrual.jpg"
          src="https://asiapacific.unfpa.org/sites/default/files/styles/original/public/news/mhm.24.001.1.jpg?itok=mVw9uHBs"
          alt="FemAura Wellness"
          className="w-90 md:w-90 rounded-2xl shadow-lg mt-10 md:mt-0"
        />
      </section>

      {/* Features Section */}
      {/* <section id="services" className="bg-white py-16 px-10 text-center">
        <h3 className="text-3xl font-bold text-pink-700">Our Services</h3>
        <p className="text-gray-600 mt-2 mb-10">
          Carefully designed services to support every woman.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-pink-100 rounded-2xl shadow">
            <h4 className="text-xl font-semibold text-pink-700">Health Tracking</h4>
            <p className="text-gray-700 mt-2" onClick={()=>navigate('/input')}>
              Monitor your health and wellness with smart tools.
            </p>
          </div>

          <div className="p-6 bg-pink-100 rounded-2xl shadow">
            <h4 className="text-xl font-semibold text-pink-700">Consultations</h4>
            <p className="text-gray-700 mt-2">
              Generate Reports 
            </p>
          </div>

          <div className="p-6 bg-pink-100 rounded-2xl shadow">
            <h4 className="text-xl font-semibold text-pink-700">Community</h4>
            <p className="text-gray-700 mt-2">
              Join a safe, supportive space for women.
            </p>
          </div>
        </div>
      </section> */}


{/* Features Section */}
<section id="services" className="bg-white py-16 px-10 text-center">
  <h3 className="text-3xl font-bold text-pink-700">Our Services</h3>
  <p className="text-gray-600 mt-2 mb-10">
    Carefully designed services to support every woman.
  </p>

  <div className="grid md:grid-cols-2 gap-10">
    
    {/* Health Tracking Card */}
    <div
      onClick={() => navigate('/input')}
      className="p-6 bg-pink-100 rounded-2xl shadow cursor-pointer 
                 hover:bg-pink-200 hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <h4 className="text-xl font-semibold text-pink-700">
        Health Tracking
      </h4>
      <p className="text-gray-700 mt-2">
        Monitor your health and wellness with smart tools.
      </p>
    </div>

    {/* Consultations Card */}
    <div
      className="p-6 bg-pink-100 rounded-2xl shadow cursor-pointer
                 hover:bg-pink-200 hover:shadow-lg transition transform hover:-translate-y-1"
                 onClick={()=>{navigate("/reports")}}
    >
      <h4 className="text-xl font-semibold text-pink-700">
        Generate Reports
      </h4>
      <p className="text-gray-700 mt-2">
        Get all your reports under one click
      </p>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center p-4 mt-auto">
        © {new Date().getFullYear()} FemAura. All rights reserved.
      </footer>

    </div>
  );
};

export default Femhome;

