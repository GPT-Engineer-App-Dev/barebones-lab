import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Bare Bones App</h1>
          <nav className="mt-2">
            <Link to="/" className="mr-4 text-blue-600 hover:text-blue-800">Home</Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-800">About</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Bare Bones App</h2>
        <p className="text-lg">This is a minimal web application that you can modify and build upon.</p>
      </main>

      <footer className="bg-red-500 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">&copy; 2023 Bare Bones App</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;