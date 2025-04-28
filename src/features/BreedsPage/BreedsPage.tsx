import { useGetBreedsListQuery } from '@/app/baseApi'

export const BreedsPage = () => {
  const { data: breeds, isLoading, error } = useGetBreedsListQuery()

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки пород</div>

  return (
    <div>
      <ul>{breeds?.map((breed) => <li key={breed}>{breed}</li>)}</ul>
    </div>
  )
}
