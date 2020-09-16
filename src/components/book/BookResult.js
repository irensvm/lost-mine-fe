import React from "react";
import BookCardRes from "./BookCardRes";
import { get } from "lodash";

export default function BookResult(props) {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        const image = get(
          book,
          ["volumeInfo", "imageLinks", "thumbnail"],
          "https://lh3.googleusercontent.com/yTY8jzY4EUourXuzSJJV_qZuVGHNrI9ewKH-ReKpLxSWkSYBImeXgjfzOn37Z1wMQ04DfJ8=s170"
        );
        const title = get(book, ["volumeInfo", "title"], "Title not found");
        const description = get(
          book,
          ["volumeInfo", "description"],
          "description not found"
        );
        const author = get(book, ["volumeInfo", "author"], "author not found");
        console.log();
        return (
          <BookCardRes
            key={i}
            image={image}
            title={title}
            author={author}
            description={description}
          />
        );
      })}
    </div>
  );
}
