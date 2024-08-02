import { getMovieById } from "actions/movieActions";
import UI from "./ui";

// 개별 페이지에서 metadata 정보를 동적으로 할당
export async function generateMetadata({ params, searchParams }) {
  const movie = await getMovieById(params.id);

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function MovieDetail({ params }) {
  const movie = await getMovieById(params.id);

  return (
    <main className="py-16 flex items-center bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0 ">
      {movie ? <UI movie={movie} /> : <div>Movie does not exist</div>}
    </main>
  );
}
