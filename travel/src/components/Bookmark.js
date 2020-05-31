import React, { useState } from "react";
import styled from "styled-components";
import BookmarkSharpIcon from "@material-ui/icons/BookmarkSharp";
const Bookmark = () => {
  const [save, setSave] = useState(false);
  const handleSubmit = () => setSave(!save);
  return (
    <BookmarkConatiner>
      <button className="btn">
        <BookmarkSharpIcon
          onClick={handleSubmit}
          color={save ? "secondary" : ""}
        />
      </button>
    </BookmarkConatiner>
  );
};

export default Bookmark;

const BookmarkConatiner = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  .btn {
    z-index: 99;
    margin-top: -90px;
    margin-left: 20px;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    outline: none;
    background: white;
    box-shadow: 0.1px 0.1px 20px grey;
    &:hover {
      cursor: pointer;
    }
  }
`;
