import vrImage from '../../assets/images/desktop/image-interactive.jpg'

const VrSection = () => {
  return (
    <section className='section-padding'>
      <div className='container-wrap'>
        <div className='vr-box flex items-end flex-col lg:flex-row'>
          <img src={vrImage} className='' alt='man wearing occulos' />
          <div className='vr-text'>
            <h2>The leader in interactive vr</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VrSection
