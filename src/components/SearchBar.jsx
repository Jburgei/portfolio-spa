const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <input
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;