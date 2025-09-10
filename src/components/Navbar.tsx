import { Search,GraduationCap,CircleUser,Menu } from "lucide-react"

export default function Navbar() {
    return (
        <div>
        <nav className='flex justufy-between items-center px-3 md:px-20 bg-stone-800 py-3 border-b-2 border-black'>
        <div className="flex gap-2 items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <img src='/icon.png' className='h-5 w-10 md:h-10 md:w-20' />
          <div className='relative'>
            <input placeholder='search' className='hidden md:block rounded-full px-5 h-8 border-1 border-gray-200 text-gray-200 placeholder-gray-200' />
            <Search className='h-3 w-3 md:h-5 md:w-5 text-gray-200 md:absolute top-2 right-2' />
          </div>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <button className='text-gray-200 px-5 h-8 rounded-full border-1 border-gray-400 font-bold'>Home</button>
            <button className='text-black px-5 h-8 rounded-full bg-green-500 font-bold flex items-center gap-2'>Become Mentor <GraduationCap className='text-black h-5 w-5' /></button>
            </div>
            <div className="block md:hidden">
          <Menu className="h-5 w-5 text-white"  />
        </div>
        </div>
      </nav>
      <div className="hidden md:flex items-center justify-between  py-3 bg-stone-800 px-20">
        <div className="flex gap-2 items-center">
          <button className='text-gray-200 px-5 h-8 rounded-full border-1 border-gray-400 font-bold'>Programs</button>
                    <button className='text-gray-200 px-5 h-8 rounded-full border-1 border-gray-400 font-bold'>College Events</button>
                    <button className='text-gray-200 px-5 h-8 rounded-full border-1 border-gray-400 font-bold'>Study Abroad</button>
                    </div>
                    <button className='text-gray-900 flex items-center gap-2 px-5 h-8 rounded-full bg-green-500 font-bold'>Login <CircleUser className='text-gray-900 h-5 w-5' /></button>
        </div>
      </div>
    )
}