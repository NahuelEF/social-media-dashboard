import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Social Media Dashboard</h1>
        <h2>Total Followers: 23,004</h2>
        <label htmlFor="">Dark Mode</label>
      </header>
      <main>
        <section>
          <div>@nathanf 1987 Followers 12 Today</div>
          <div>@nathanf 1044 Followers 99 Today</div>
          <div>@realnathanf 11k Followers 1099 Today</div>
          <div>Nathan F. 8239 Subscribers 144 Today</div>
        </section>

        <section>
          <h3>Overview - Today</h3>
          <div>Page Views 87 3%</div>
          <div>Likes 52 2%</div>
          <div>Likes 5462 2257%</div>
          <div>Profile Views 52k 1375%</div>
          <div>Retweets 117 303%</div>
          <div>Likes 507 553%</div>
          <div>Likes 107 19%</div>
          <div>Total Views 1407 12%</div>
        </section>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}

export default App;
