import Feed from '@components/Feed'

const Home = () => {    
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Sams Hub
            <br />
            <span className='orange_gradient text-center'>Discover & Design.</span>
        </h1>
        <p className='desc text-center'>Sams Hub is an open-source blablabla for modern world to discover, create and share creative ideas. this app is <span className='font-semibold orange_gradient'>releasing soon!</span></p>

        <Feed />
    </section>
  )
}

export default Home