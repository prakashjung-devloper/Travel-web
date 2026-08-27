import Image from "next/image";
import Link from "next/link";

export default function FeaturedDestinations() {
  const destinations = [
    {
      name: "Kailali",
      location: "Suduraschim Province",
      image: "/Travel-web/ghodaghodi.jpg",
      description:
        "Kailali District is famous for unique wetlands, historical parks, and its role as the primary economic hub of far-western Nepal."
    },
    {
      name: "Pokhara",
      location: "Gandaki Province",
      image: "/Travel-web/pokhara.jpg",
      description:
        "Experience peaceful lakes, breathtaking mountain views, and unforgettable adventures.",
    },
    {
      name: "Bardiya",
      location: "Lumbini Province",
      image: "/Travel-web/Bardiya.jpg",
      description:
        "Bardiya is famous for being Asia's premier destination to see wild Royal Bengal tigers..",
    },
    {
      name: "Mustang",
      location: "Gandaki Province",
      image: "/Travel-web/mustang.jpg",
      description:
        "Explore dramatic landscapes, ancient villages, and the unique beauty of Nepal's Himalayas.",
    },
  ];

  return (
    <section id="featured-destinations" className="featured-destinations py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-warning fw-semibold text-uppercase mb-2">
            Explore Nepal
          </p>

          <h2 className="display-5 fw-bold text-white">
            Featured Destinations
          </h2>

          <p className="text-white-50 mx-auto mt-3 destination-intro">
            Discover some of Nepal's most beautiful places, from ancient
            cultural cities to peaceful Himalayan landscapes.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {destinations.map((destination, index) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              key={index}
            >
              <div className="destination-card h-100">

                <div className="destination-image">
                  <Image
                    src={destination.image}
                    alt={destination.name} 
                         
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <div className="destination-content">

                  <span className="destination-location">
                    📍 {destination.location}
                  </span>

                  <h3>{destination.name}</h3>

                  <p>{destination.description}</p>

                  <Link
                    href="/nature-city"
                    className="destination-link"
                  >
                    Explore Destination →
                  </Link>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}