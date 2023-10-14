import { useIsMobile } from '@/hooks'

interface CreationCardProps {
  img: string
  mobileImg: string
  text: string
}

const CreationCard = ({ img, mobileImg, text }: CreationCardProps) => {
  const isMobile = useIsMobile()

  return (
    <div className='creation-card relative mx-auto'>
      <img src={isMobile ? mobileImg : img} alt='creation' />
      <h2 className='absolute bottom-5 left-5 text-white uppercase text-2xl w-32'>
        {text}
      </h2>
    </div>
  )
}

export default CreationCard
