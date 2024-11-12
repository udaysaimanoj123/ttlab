import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Random App!</h1>
        <p>Here is some random content that changes each time you visit!</p>
        <ul>
          <li>🍕 Pizza</li>
          <li>🍔 Burger</li>
          <li>🍦 Ice Cream</li>
          <li>🥤 Soda</li>
        </ul>
        <a
          className="App-link"
          href="https://www.random.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Random.org for more randomness!
        </a>
      </header>
    </div>
  );
}

export default App;
