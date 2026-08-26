export default function WhyExplore() {
  return (
    <section className="why-explore py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-warning fw-semibold mb-2">
            DISCOVER THE DIFFERENCE
          </p>

          <h2 className="display-5 fw-bold text-white">
            Why Explore Nepal?
          </h2>

          <p className="text-white-50 mx-auto mt-3" style={{ maxWidth: "700px" }}>
            From the highest mountains to peaceful valleys and rich
            cultural heritage, Nepal offers unforgettable experiences.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-3">
            <div className="explore-card h-100">
              <div className="explore-icon">🏔️</div>
              <h4>Himalayan Adventures</h4>
              <p>
                Discover breathtaking mountain landscapes and unforgettable
                Himalayan adventures.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="explore-card h-100">
              <div className="explore-icon">🦏</div>
              <h4>Wildlife & Nature</h4>
              <p>
                Explore Nepal's national parks, wildlife, forests and
                beautiful landscapes.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="explore-card h-100">
              <div className="explore-icon">🏛️</div>
              <h4>Culture & Heritage</h4>
              <p>
                Experience ancient temples, historic cities and Nepal's
                rich cultural heritage.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="explore-card h-100">
              <div className="explore-icon">🌱</div>
              <h4>Sustainable Travel</h4>
              <p>
                Travel responsibly while supporting local communities and
                protecting Nepal's natural beauty.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}