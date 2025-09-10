import './App.css'
import LayoutWrapper from './components/wrappers/Layout'
import Midsection from './sections/Midsection'
import ProfileCard from './components/Profilecard'
import Hero from './sections/Hero'
import Slider from './sections/Slider'



function App() {

  return (
    <LayoutWrapper>
      <Hero />
      {/* section 2 */}
      <section className='w-full flex bg-[#cfe8d7]'>
        <div className=' h-fit w-full md:w-[65%] relative md:pl-10'>
          <Slider />
         <Midsection />
        </div>
        <div className='sticky hidden md:block w-full min-h-screen bg-gray-100 top-0 h-fit px-4'>
          <p className='font-bold text-3xl py-5 w-full text-center'>Featured Mentors</p>
          <div className="flex flex-col gap-5">
            <ProfileCard
            name={"Karan Deb"}
            degree={"Computer Science"}
            location={"Amity, Delhi"}
            expertise={"NEET"}
            image={'/profile.png'}
          />
          <ProfileCard
            name={"Karan Deb"}
            degree={"Computer Science"}
            location={"Amity, Delhi"}
            expertise={"NEET"}
            image={'/profile.png'}
          />
          <ProfileCard
            name={"Karan Deb"}
            degree={"Computer Science"}
            location={"Amity, Delhi"}
            expertise={"NEET"}
            image={'/profile.png'}
          />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}

export default App
