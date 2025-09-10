import { LibraryBig, HandHeart, Star, Briefcase, Landmark, UsersRound, Shirt, PartyPopper, MessageSquare, ChevronRight } from 'lucide-react'

export default function Slider() {
    const provisions = [
    {
      name: "Courses Offered",
      icon:LibraryBig
    },
    {
      name: "Fee Structure",
      icon:HandHeart
    },
    {
      name: "College Ranking",
      icon:LibraryBig
    },
    {
      name: "College Rankings",
      icon:Star
    },
    {
      name: "Placement",
      icon:Briefcase
    },
    {
      name: "Infrastructure",
      icon:Landmark
    },
    {
      name: "Clubs & Societies",
      icon:UsersRound
    },
    {
      name: "Dress Code",
      icon:Shirt
    },
    {
      name: "Fests",
      icon:PartyPopper
    },
    {
      name: "Reviews",
      icon:MessageSquare
    },
  ]
    return (
          <div className="w-full px-6 overflow-x-scroll py-7 flex gap-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
            {provisions.map((prov,index) => {
            const Icon = prov.icon;
            return (
              <span key={index} className='w-fit flex items-center gap-1 border-2 border-black rounded-full px-5 py-3 text-black '>
                <Icon className='text-black h-5 w-5' />
                <p className='whitespace-nowrap font-semibold'>{prov.name.toUpperCase()}</p>
            </span>
          )
            })}
            <span className='absolute bg-[#cfe8d7] right-0 top-7 h-20'>
            <ChevronRight className='h-10 w-10 text-black mt-1' />
            </span>
          </div>
    )
}