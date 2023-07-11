import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { icon } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between sm:justify-around bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4">
        <Link to="/">
          <div className="w-[40px] flex items-center text-2xl">
          {/* <img src={icon} alt="icon" /> */}
          <h1>imagenerator</h1>
          </div>
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
