import parse from 'html-react-parser'
import { useGetTaskQuery } from '../services/Courses/courseapi'
export default function CourseDetail() {
  const { data, isLoading, error } = useGetTaskQuery('w7AYR4OrelokjyQQb118');

  return (
  <>
    {isLoading && <div>loading...</div>}
    {data && <article className="prose lg:prose-xl">{parse(data.content)}</article>}
    </>
  )
}
