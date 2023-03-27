import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import Character from "./Character";

export default function Rick() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((response) => {
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, [page]);

  return (
    <>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <div className="grid grid-cols-1 gap-7 p-2 md:grid-cols-2 lg:grid-cols-3 bg-[#272b33] m-auto">
        {loading ? (
          <h1 className="text-6xl font-bold">Loading...</h1>
        ) : (
          characters.map((character: any) => (
            <Character
              key={character.id}
              character={character}
              totalPages={totalPages}
              page={page}
              setPage={setPage}
            />
          ))
        )}
      </div>
    </>
  );
}

export function Pagination({ page, setPage, totalPages }: any) {
  return (
    <div className="flex items-center justify-center w-full h-20 space-x-2 bg-[#272b33]">
      <button
        className="flex items-center justify-center w-10 h-10 text-white bg-[#3c3e44] rounded-full hover:bg-[#272b33]"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <BsFillCaretLeftFill />
      </button>
      <span className="text-2xl font-bold text-white">{page} of {totalPages}</span>
      <button
        className="flex items-center justify-center w-10 h-10 text-white bg-[#3c3e44] rounded-full hover:bg-[#272b33]"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        <BsFillCaretRightFill />
      </button>
    </div>
  );
}
