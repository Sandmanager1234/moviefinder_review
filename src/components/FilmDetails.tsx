import { FC } from "react"
import { Film } from "store/slices/Films"

export type FilmDetails = Pick<
  Film,
  | "Poster"
  | "Title"
  | "Plot"
  | "Released"
  | "imdbID"
  | "Metascore"
  | "imdbRating"
  | "Director"
  | "Actors"
  | "Writer"
  | "Genres"
  | "Runtime"
  | "Country"
>

const FilmDetails: FC<FilmDetails> = props => {
  const {
    Poster,
    Title,
    Plot,
    Released,
    imdbID,
    Metascore,
    imdbRating,
    Director,
    Actors,
    Writer,
    Genres,
    Runtime,
    Country
  } = props

  return (
    <div className='hero min-h-screen bg-base-200 px-20'>
      <div className='hero-content flex-col lg:flex-row gap-10'>
        <div>
          <img
            src={Poster || "poster"}
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div className='flex justify-between'>
            <div>Metascore:</div>
            <div>{Metascore}</div>
          </div>
          <div className='flex justify-between'>
            <div>imdbRating:</div>
            <div>{imdbRating}</div>
          </div>
        </div>
        <div>
          <h1 className='text-5xl p-4 text-center lg:text-left font-bold'>
            {Title}
          </h1>
          <div className='flex max-w-96 text-right flex-col gap-2 mx-auto lg:mr-0 text-lg'>
            <h2 className=' text-right text-2xl font-semibold'>
              About the film
            </h2>
            <div className='flex justify-between gap-4'>
              <div>Released:</div>
              <div>{Released}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Direcotr:</div>
              <div>{Director}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Writer:</div>
              <div>{Writer}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Actors:</div>
              <div>{Actors}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Genres:</div>
              <div>{Genres}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Runtime:</div>
              <div>{Runtime}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Country:</div>
              <div>{Country}</div>
            </div>
          </div>
          <p className='mt-8 text-pretty indent-10 leading-relaxed text-justify  '>
            {Plot}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FilmDetails
