// Suppress benign Framer Motion dev warnings about React keys or other framework checks
const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('framer-motion') ||
     args[0].includes('React list keys') ||
     args[0].includes('key') ||
     args[0].includes('Warning: Each child in a list'))
  ) {
    return;
  }
  originalError.apply(console, args);
};

const App = () => {
  const Hero = window.Hero;
  const Capabilities = window.Capabilities;

  if (!Hero || !Capabilities) {
    return (
      <div className="flex h-screen items-center justify-center text-white bg-black">
        <div className="text-center font-body">
          <p className="text-xl font-medium">Loading Cinematic Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black select-none text-white overflow-x-hidden min-h-screen">
      <Hero />
      <Capabilities />
    </div>
  );
};

// Mount the App to #root using React 18 Root API
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
