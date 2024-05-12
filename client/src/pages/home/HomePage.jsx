import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/');
  }, []);

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <div className='grid main__bg font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full p-1 items-center justify-center'>
        <section className='grid gap-4'>
          <h1 className='text-3xl font-bold text-center'>
            Welcome to Plastering Services
          </h1>
          <p className='text-center'>
            We provide professional plastering services for your home or
            business.
          </p>
          <p className='text-center'>
            We offer a wide range of services, including plastering, rendering,
            and dry lining.
          </p>
          <p className='text-center'>
            Our team of experienced plasterers will ensure that your project is
            completed to the highest standards.
          </p>
          <p className='text-center'>
            Contact us today for a free quote or to discuss your requirements.
          </p>
          <div className='grid gap-4 justify-center'>
            <Link
              to='/quote'
              id='/quote'
              onClick={navigateToPage}
              className='btn btn-primary'
            >
              Get a Quote
            </Link>
            <Link
              to='/contact'
              id='/contact'
              onClick={navigateToPage}
              className='btn btn-secondary'
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
