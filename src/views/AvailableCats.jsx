import { useEffect, useState } from 'react';
import './AvailableCats.css'; // Make sure to import the CSS file for styles

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter((cat) => {
    const breedFilter =
      selectedBreed === 'All' || cat.breed.toLowerCase() === selectedBreed.toLowerCase();
    const nameFilter = cat.name.toLowerCase().includes(search.toLowerCase());
    return breedFilter && nameFilter;
  });

  return (
    <section className="available-cats text-center mt-4">
      <h2>Available Cats</h2>
      <p className="subheading">Meet our adorable cats looking for their forever home! A part of our family!!!</p>

      {/* Filters */}
      <div className="filter-container mb-4">
        <select
          className="form-select breed-select mb-3"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="All">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Siamese">Siamese</option>
          <option value="Birman">Birman</option>
        </select>

        <input
          type="text"
          className="form-control search-box"
          placeholder="Search cats by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-2 row g-4 cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="cat-image mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-age">Age: {cat.age}</p>
                <p className="cat-breed">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
