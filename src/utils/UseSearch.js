import { useState } from 'react';

export default function UseSearch() {
  const [query, setQuery] = useState("");

  function updateQuery(e) {
    e.preventDefault();

    setQuery({ query: e.target.value })

    e.target.value = "";
  }

  return { query, updateQuery };

}