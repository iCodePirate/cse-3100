import { Link, Outlet, NavLink } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout" style={{ fontFamily: 'Verdana, sans-serif', color: '#333' }}>
      <header className="d-flex align-items-center p-3" style={{ backgroundColor: '#27ae60', color: '#ecf0f1' }}>
        <h1>
          <Link className="text-decoration-none" to="/" style={{ color: '#ecf0f1', fontWeight: 'bold' }}>
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/available-cats" 
                style={({ isActive }) => ({
                  color: isActive ? '#2c3e50' : '#ecf0f1', 
                  fontSize: '1rem',
                  backgroundColor: isActive ? '#ecf0f1' : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '4px'
                })}
              >
                Available Cats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/contact-us" 
                style={({ isActive }) => ({
                  color: isActive ? '#2c3e50' : '#ecf0f1', 
                  fontSize: '1rem',
                  backgroundColor: isActive ? '#ecf0f1' : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '4px'
                })}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/about-us" 
                style={({ isActive }) => ({
                  color: isActive ? '#2c3e50' : '#ecf0f1', 
                  fontSize: '1rem',
                  backgroundColor: isActive ? '#ecf0f1' : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '4px'
                })}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content" className="container my-4">
        <Outlet />
      </main>
      <footer className="text-center py-3" style={{ backgroundColor: '#ecf0f1', color: '#2c3e50' }}>
        <p>© Copyright 2024 - Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
