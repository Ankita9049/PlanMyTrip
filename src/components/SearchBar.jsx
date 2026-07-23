import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {

    const [keyword, setKeyword] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(keyword);
    };

    return (
        <form className="search-container" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search destinations, packages..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <button type="submit">
                🔍 Search
            </button>
        </form>
    );
}

export default SearchBar;