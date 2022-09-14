import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

// 1. Pasar datos usando state (no se muestran los datos en la url)
// 3. usar useSearchParams para pasar datos por la url
export default function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({n:3})
    const number = searchParams.get("n")

    return (
    <>
      <ul>
        <li>
          <Link to="/books/1" state={{nuevo: "holadatos"}}>Book 1</Link>
        </li>
        <li>
          <Link to={`/books/${number}`}>Book {number}</Link>
        </li>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
      </ul>
      <input type="number" value={number} onChange={(e) =>{setSearchParams({n:e.target.value})} }></input>
      <Outlet context={{contextoOutlet: 'world'}}/>
    </>
  );
}
