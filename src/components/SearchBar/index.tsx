import { useState } from 'react';


interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({onSearch}: SearchBarProps) {
  const [query, setQuery] = useState<string>('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    console.log(value);
  };

  

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex">
      <input
        placeholder="Search"
        type='text'
        value={query}
        onChange={handleInputChange}
        onKeyUp={handleSearch}
        className="rounded-s-md grow border border-rosewood p-2"
      />

      <button
        onClick={handleSearch}
        className="w-16 rounded-e-md bg-rosewood hover:bg-rosewood hover:bg-opacity-60 transition duration-300"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
