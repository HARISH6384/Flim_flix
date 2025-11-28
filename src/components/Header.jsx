import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clapperboard } from "lucide-react";


const Header = () => {
  const navigator = useNavigate();

  const handlechange = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    navigator(`/search?q=${queryTerm}`);
  };

  return (
    <>
      <style>{`
        .gradient-text {
          font-weight: bold;
          background: linear-gradient(to right, #34D399, #059669);
          
          background-clip: text;
        
          color: transparent;
          transition: background 0.3s ease;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
        }
       .gradient-text:hover {
  background: linear-gradient(to right, #A3E635, #10B981);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
        nav {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          height: 80px;
          font-size: 1.125rem;
          font-weight: bold;
        }
        ul {
          display: flex;
          gap: 2.5rem;
          padding-left: 2.5rem;
          margin: 0;
          list-style: none;
        }
        input.search-input {
          border: 1px solid gray;
          outline: none;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
           background: linear-gradient(to right, #34D399, #059669);
          
          background-clip: text;
        
          color: green;
          
         
          text-decoration: none;

          
        }
      `}</style>

      <nav>
        <div className="flex items-center gap-1">
  <Clapperboard className="w-10 h-10 text-white Clapperboard" />
  
  <p className="gradient-text" style={{ fontSize: "2.5rem", cursor: "default" }}>
    FLIM FLIX
  </p>
</div>

        <ul>
          <li>
            <Link to="/" className="gradient-text">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/movies/toprated" className="gradient-text">
              TOP RATED
            </Link>
          </li>
          <li>
            <Link to="/movies/popular" className="gradient-text">
              POPULAR
            </Link>
          </li>
          <li>
            <Link to="/movies/upcoming" className="gradient-text">
              UPCOMING
            </Link>
          </li>
        </ul>

        <form onSubmit={handlechange}>
          <input
            name="search"
            type="search"
            placeholder="search"
            className="search-input"
            
          />
        </form>
      </nav>
    </>
  );
};

export default Header;
