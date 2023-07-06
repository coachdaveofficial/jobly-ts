import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import "./SearchForm.css";


/** Search widget.
 *
 * Appears on CompanyList and JobList so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { CompanyList, JobList } -> SearchForm
 */

interface SearchFormProps {
  searchFor: (searchTerm: string | undefined) => void;
}

function SearchForm({ searchFor }: SearchFormProps) {
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  /** Update form fields */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(evt.target.value);
  }

  // Use the debounced value and automatically search after 500 milliseconds
  useEffect(() => {
    
    searchFor(debouncedSearchTerm.trim() || undefined);
    // eslint-disable-next-line
  }, [debouncedSearchTerm])


  return (
    <div className="SearchForm my-4">

        <input
          className="form-control form-control-lg flex-grow-1"
          name="searchTerm"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
    </div>
  );
}

export default SearchForm;
