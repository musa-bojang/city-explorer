import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({onSearch}) {
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(query.trim() !== ""){
            // onSearch(query);
            navigate(`/city/${query.trim()}`);
            setQuery("");
        }
        
    }
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}   

export default SearchBar;