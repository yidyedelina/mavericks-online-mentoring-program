export default function Select({
  category,
  setCategory,
  data,
  title,
}: {
  category: string
  setCategory: any
  data: any
  title: string
}) {
  return (
    <div className="w-full">
      <label
        htmlFor="category"
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <select
        id="category"
        className="focus:ring-primary-500 focus:border-primary-500
         block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {data?.map((cat: any) => (
          <option value={cat.key}>{cat.value}</option>
        ))}
      </select>
    </div>
  )
}
