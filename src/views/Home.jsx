import { useEffect, useState } from 'react';
import './Home.css';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Snowball', age: '3', breed: 'Abyssinian' },
  { name: 'Boots', age: '4', breed: 'Persian' },
  { name: 'Luna', age: '1', breed: 'Bengal' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
  { name: 'Bella', age: '3', breed: 'Sphynx' },
  { name: 'Charlie', age: '4', breed: 'Bengal' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };

  const closeModal = () => {
    setSelectedCat(null);
  };

  return (
    <>
      <section className="text-center mt-4 fade-in">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
        Your purr-fect furry friend is just a paw-step away!  Discover our heartwarming selection of adorable cats, each eagerly waiting to find their forever home.         </p>
      </section>

      <section className="mt-5 fade-in">
        <h2>Featured Cats</h2>
        <input
          type="text"
          placeholder="Search cats by name..."
          className="form-control my-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="mt-2 row g-4">
            {filteredCats.map((cat, i) => (
              <div key={i} className="col-md-4 slide-in">
                <div
                  className="cat-card"
                  onClick={() => handleCatClick(cat)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid mb-2"
                    style={{
                      borderRadius: '5px',
                      height: '75%',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
                    <p className="mb-0">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedCat && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close" onClick={closeModal}></button>
            <img
              src={selectedCat.image}
              alt={selectedCat.name}
              className="img-fluid mb-3"
              style={{
                borderRadius: '8px',
                width: '100%',
                maxHeight: '300px',
                objectFit: 'cover',
              }}
            />
            <h3>{selectedCat.name}</h3>
            <p>Age: {selectedCat.age}</p>
            <p>Breed: {selectedCat.breed}</p>
            <p>
              Fun Fact: {selectedCat.name} loves cuddles and chasing laser pointers!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
