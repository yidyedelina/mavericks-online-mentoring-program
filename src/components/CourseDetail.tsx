import parse from 'html-react-parser'
import { useGetTaskQuery } from '../services/Courses/courseapi'
import { useParams } from 'react-router-dom'
export default function CourseDetail() {
  const { id } = useParams()
  const { data, isLoading, error } = useGetTaskQuery(id)

  return (
    <div className="mx-auto w-2/3 mt-5 border border-dashed p-4">
      {isLoading && <div>loading...</div>}
      <h1 className="text-3xl font-bold text-cyan-400 mb-5">{data && data.title}</h1>
      {data &&
        (data?.type === 'Video' ? (
          <div className="h-96 w-full">
            <iframe
              className="h-full w-full"
              src={data.content}
              title={data.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <article className="prose lg:prose-xl">
            {parse(data?.content)}
          </article>
        ))}
    </div>
  )
}
