import "./AboutUs.css"; // Custom styles for the About Us page

export default function AboutUs() {
  return (
    <section className="about-us text-center mt-4">
      <h2 className="animated-title">We Deliver Happiness</h2>
      <p className="subheading">
        The greatest, most sustainable happiness comes from making others happy. It is our privilege to deliver happiness every single day.
      </p>

      {/* Features Section */}
      <div className="features fade-in">
        <div className="feature">
          <h3>Our Mission</h3>
          <p>Make communications frictionless and secure.</p>
        </div>
        <div className="feature">
          <h3>Our Vision</h3>
          <p>Communications empowering people to accomplish more.</p>
        </div>
        <div className="feature">
          <h3>Our Value</h3>
          <p>Care: Community, Customers, Company.</p>
        </div>
        <div className="feature">
          <h3>Our Culture</h3>
          <p>Delivering happiness.</p>
        </div>
      </div>
    </section>
  );
}
