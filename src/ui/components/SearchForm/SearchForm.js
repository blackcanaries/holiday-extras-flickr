import { Input } from "antd";
import React from "react";
import "./SearchForm.scss";

const { Search } = Input;

const SearchForm = ({ handleSearch }) => {
  const onSearch = value => {
    handleSearch(value);
  };

  return (
    <Search
      placeholder="Search..."
      onSearch={value => onSearch(value)}
      className="search"
    />
  );
};

export default SearchForm;
