import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookDetails } from "../redux/actions";

const SearchResult = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Search Result Details</h1>
      {book ? (
        <div>
          <h2>Title: {book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Published Date: {book.publishedDate}</p>
          <p>Description: {book.description}</p>
          <img src={book.image} alt={book.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchResult;
