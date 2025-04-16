import { Button } from '@/common/components/Button/Button'
import s from './DeckItem.module.scss'
// import cardImg from '@/assets/images/proj.webp'
import { useGetRandomDogImageQuery } from '@/app/baseApi'

export const DeckItem = () => {
  const { data: imageUrl, error, isLoading, refetch } = useGetRandomDogImageQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return (
    <div className={s.card}>
      <img className={s.img} src={imageUrl} alt='Random dog' />
      <div className={s.settings}>
        <h2 className={s.title}>Random dog</h2>
        <p className={s.text}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
        <div className={s.buttonSpace}>
          <Button variant='secondary' onClick={refetch}>
            Update
          </Button>
          <Button variant='secondary'>Delete</Button>
        </div>
      </div>
    </div>
  )
}
