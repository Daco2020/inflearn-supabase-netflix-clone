"use client";

import { useQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { searchMovies } from "actions/movieActions";
import { Spinner } from "@material-tailwind/react";

export default function MovieCardList() {
  const searchMoviesQuery = useQuery({
    queryKey: ["searchMovies"],
    queryFn: () => searchMovies(),
  });

  return (
    <div className="grid gap-2 md:grid-cols-4 grid-cols-3 w-full h-full">
      {searchMoviesQuery.isPending && <Spinner />}
      {searchMoviesQuery.data &&
        searchMoviesQuery.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
