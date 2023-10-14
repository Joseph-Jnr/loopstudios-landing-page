import creationCardData from '@/creations'
import { Button, CreationCard } from '..'
import { useIsMobile } from '@/hooks'

const Creations = () => {
  const isMobile = useIsMobile()

  return (
    <section className='section-padding'>
      <div className='container-wrap'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl lg:text-4xl uppercase'>Our Creations</h2>
          {isMobile ? '' : <Button label='See all' />}
        </div>

        <div className='inline-block'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-14'>
            {creationCardData.map((item, index) => (
              <CreationCard
                key={index}
                img={item.img}
                mobileImg={item.mobileImg}
                text={item.title}
              />
            ))}
          </div>
        </div>

        {isMobile && (
          <div className='mt-5 flex justify-center'>
            <Button label='See all' />
          </div>
        )}
      </div>
    </section>
  )
}

export default Creations
