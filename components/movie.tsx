/* eslint-disable @next/next/no-img-element */
import { MovieType } from "@/types/globel";
import Link from "next/link";

export default function Movie({ movie }: { movie: MovieType }) {
  const posterUrl = "http://image.tmdb.org/t/p/w185";
  return (
    <div className="w-46 flex flex-col gap-1 text-center" key={movie.id}>
      <Link href={`/view/${movie.id}`}>
        <img
          src={posterUrl + movie.poster_path}
          alt=""
          className="hover:scale-105 transition-all duration-300"
        />
      </Link>

      <div className="font-bold">
        <Link href={`/view/${movie.id}`}>{movie.title}</Link>
      </div>
      <span>{movie.release_date.split("-")[0]}</span>
    </div>
  );
}
