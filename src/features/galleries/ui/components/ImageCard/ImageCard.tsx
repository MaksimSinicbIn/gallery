import { useAppDispatch } from '@/common/hooks'
import { openModal } from '@/features/modal/model/modalSlice'
import s from './ImageCard.module.scss'

type Props = {
  imageUrl: string
}

export const ImageCard = ({ imageUrl }: Props) => {
  const dispatch = useAppDispatch()

  const openModalHandler = () => {
    dispatch(openModal({ imageUrl }))
  }

  return (
    <>
      <div className={s.card} onClick={openModalHandler}>
        <img className={s.image} src={imageUrl} alt='Dog image' />
      </div>
    </>
  )
}
