import { useState } from 'react';
import { SearchButton } from '../../styles/SearchButton';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
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
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyUp={handleSearch}
        className="rounded-s-md grow border border-navigation text-primary p-2"
      />

      <SearchButton
        onClick={handleSearch}
      >
        Search
      </SearchButton>
    </div>
  );
}

export default SearchBar;
