import { Wifi, Bubbles, Award, Trophy, Star, ChevronRight, MoveRight, Home } from 'lucide-react'
import ClubCard from '../components/Clubcard'
import Reviews from './Reviews'


type CourseTableProps = {
  title: string
  courses: { name: string; seats: number }[]
}

const CourseTable: React.FC<CourseTableProps> = ({ title, courses }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full">
      {/* Header */}
      <div className="bg-stone-800 text-white flex justify-between px-4 py-4 font-semibold">
        <span>{title}</span>
        <span>Seats</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-200">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="flex justify-between px-4 py-3 text-gray-800"
          >
            <span>{course.name}</span>
            <span>{course.seats}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

type CardProps = {
  title: string
  content: React.ReactNode
}

const RankingCard: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 w-full md:w-1/3">
      <h3 className="font-semibold mb-2">{title}</h3>
      <hr className="border-gray-300 mb-3" />
      <div className="text-gray-800">{content}</div>
    </div>
  )
}

export default function Midsection() {
      const btechCourses = [
    { name: 'Bioengineering', seats: 100 },
    { name: 'Mechanical Engineering', seats: 100 },
    { name: 'Electronics Engineering', seats: 100 },
    { name: 'Information Technology', seats: 100 },
  ]

  const bscCourses = [
    { name: 'Mathematics', seats: 100 },
    { name: 'Physics', seats: 100 },
    { name: 'Chemistry', seats: 100 },
    { name: 'Biology', seats: 100 },
  ]
  // pg
    const pgBtechCourses = [
    { name: 'VLSI', seats: 100 },
    { name: 'Thermal Engineering', seats: 100 },
    { name: 'Software Engineering', seats: 100 },
  ]

  const pgBscCourses = [
    { name: 'Mathematics', seats: 100 },
    { name: 'Physics', seats: 100 },
    { name: 'Chemistry', seats: 100 },
  ]

  const allCourses = [
    { name: 'Bioengineering', price: "1,73,000" },
    { name: 'Chemical Engineering', price: "1,73,000" },
    { name: 'Civil Engineering', price: "1,73,000" },
    { name: 'Bioengineering', price: "1,73,000" },
    { name: 'Electrical & Electronics Engineering', price: "1,73,000" },
    { name: 'Electronics & Instrumentation Engineering', price: "1,73,000" },
    { name: 'Fashion Technology', price: "1,73,000" },
    { name: 'Health Science Technology', price: "1,73,000" },
    { name: 'Aerospace Engineering', price: "1,73,000" },
    { name: 'Computer Science & Engineering', price: "1,73,000" },
  ]

  const allPlacements = [
    { name: 'Dream Offers', number: "378" },
    { name: 'Super Dream Offers', number: "624" },
    { name: 'Oveall Offers', number: "14345" },
    { name: 'Regular Offers', number: "904" },
    { name: 'National Record by TCS', number: "3719" },
    { name: 'Highest CTC', number: "1.02 Cr" },
    { name: 'Average CTC', number: "9.23 LPA" },
    { name: '# CTC 20LPA and above', number: "Not Shown" },
    { name: '$ CTC 6LPA and above', number: "Not Shown" },
  ]
   const features = [
    {
      icon: <Wifi className="w-5 h-5 md:w-10 md:h-10 text-green-500" />,
      title: "Hostel WiFi",
      description: "A Wi-Fi connectivity is available in hostels.",
    },
    {
      icon: <Bubbles className="w-5 h-5 md:w-10 md:h-10 text-green-500" />,
      title: "Bathroom Sanitation",
      description:
        "VIT prioritizes hygiene and maintains clean and well-maintained washroom facilities in hostels",
    },
    {
      icon: <Trophy className="w-5 h-5 md:w-10 md:h-10 text-green-500" />,
      title: "Grounds",
      description:
        "The campus is spread over 372 acres and boasts well-maintained lawns, gardens, and open spaces",
    },
   ];
    return (
          <div className="flex flex-col gap-4 px-6">
            <p className='text-3xl font-bold'>Courses Offered</p>
            <div className=''>
              <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-semibold'>Undergraduate Programs (66+)</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
            </div>
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <CourseTable title="B.Tech" courses={btechCourses} />
      <CourseTable title="B.Sc." courses={bscCourses} />
            </div>
            </div>
            {/* two */}
            <div>
              <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-semibold'>Postgraduate Programs (58+)</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
            </div>
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <CourseTable title="B.Tech" courses={pgBtechCourses} />
      <CourseTable title="B.Sc." courses={pgBscCourses} />
            </div>
            </div>
            {/* mtech */}
            <div>
              <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-semibold'>Mtech Industrial Programs</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
            </div>
              <div className="">
                <div className="flex items-center justify-between w-full py-4 px-5 bg-stone-800 rounded-t-2xl text-white">
                    <p>B.Tech + M.Tech</p>
                    <p>Seats</p>
                </div>
                <div className='px-5 py-4 bg-white rounded-b-2xl'>
                  <p>Collaboration with industries for special programs</p>
                </div>
            </div>
            </div>
            {/* integrated programs */}
            <div>
              <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-semibold'>Integrated Programs</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
            </div>
              <div className="">
                <div className="flex items-center justify-between w-full py-4 px-5 bg-stone-800 rounded-t-2xl text-white">
                    <p>B.Tech + M.Tech</p>
                    <p>Seats</p>
                </div>
                <div className='px-5 py-4 bg-white rounded-b-2xl'>
                  <p>Combining undergraduate and postgraduate studies</p>
                </div>
            </div>
            </div>
            {/* research */}
            <div>
              <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-semibold'>Research Programs</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
            </div>
              <div className="">
                <div className="flex items-center justify-between w-full py-4 px-5 bg-stone-800 rounded-t-2xl text-white">
                    <p>B.Tech + M.Tech</p>
                    <p>Seats</p>
                </div>
                <div className='px-5 py-4 bg-white rounded-b-2xl'>
                  <p>Research programs in various disciplines</p>
                </div>
            </div>
            </div>
            {/* fee  */}
            <div className='my-10'>
            <div className="flex justify-between w-full items-center py-4">
            <p className='text-3xl font-bold'>Fee structure</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
              </div>
              <div className="flex flex-col gap-4">
                <p className='font-light text-lg'>The fee structure varies depending on the program chosen, semester, accomodation opted for, etc. Generally it includes tution fee, hostel fee (if applicable), mess fees, and other miscellaneuous charges.</p>
              <div className="flex items-center justify-between">
                <p className='font-semibold text-stone-700/80 text-lg'>View courses fee structure of official college website.</p>
                <span className='bg-stone-500 text-lg rounded-full px-8 text-white font-semibold'>
                  View
                </span>
              </div>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full">
      {/* Header */}
      <div className="bg-stone-800 text-white px-5 py-4 font-semibold rounded-t-2xl">
        B.Tech Programs
      </div>

      {/* Rows */}
      <div>
        {allCourses.map((program, idx) => (
          <div key={idx} className="px-5 py-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">{program.name}</span>
              <span className="font-semibold">{program.price}</span>
            </div>
            {idx < allCourses.length - 1 && (
              <hr className="border-gray-300 mt-3" />
            )}
          </div>
        ))}
      </div>
    </div>
              </div>
              {/* rankings */}
              <div className="h-fit py-8">
      {/* Title Row */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">COLLEGE RANKINGS</h2>
      <span className='flex items-center gap-1 rounded-full text-black bg-gray-100 border-1 border-gray-800 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6">
        <RankingCard
          title="Other Rankings"
          content={
            <p>
              Recognized as an Institution of Eminence by the Indian Government
              and is ranked by QS World University Rankings and ARWU (Shanghai
              Ranking).
            </p>
          }
        />

        <RankingCard
          title="NAAC Accreditation"
          content={
            <p>
              VIT is accredited with an 'A+' grade by NAAC (National Assessment
              and Accreditation Council).
            </p>
          }
        />

        <RankingCard
          title="NIRF"
          content={
            <ul className="space-y-2 text-sm">
              <li className='flex justify-between'>
                <span className="font-medium">Overall Rank:</span>{" "}
                <span className="text-gray-500">17 (2023)</span>
              </li>
              <li className='flex justify-between'>
                <span className="font-medium">Engineering Rank:</span>{" "}
                <span className="text-gray-500">11 (2023)</span>
              </li>
              <li className='flex justify-between'>
                <span className="font-medium">Research Rank:</span>{" "}
                <span className="text-gray-500">11 (2023)</span>
              </li>
              <li className='flex justify-between'>
                <span className="font-medium">Universities Rank:</span>{" "}
                <span className="text-gray-500">8 (2023)</span>
              </li>
            </ul>
          }
        />
      </div>
              </div>
              {/* placements */}
              <div>
                <div className="py-4">
                  <div>
                    <div className="flex justify-between w-full items-center">
                      <p className='text-3xl font-bold'>Placements</p>
                                <span className='flex items-center gap-1 rounded-full text-black bg-gray-100 border-1 border-gray-800 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
                    </div>

                    <p className='text-lg text-gray-800/80 mt-2'>The university has dedicated placement cell that facilitates campus recruitment by leading national and international companies</p>
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full my-5">
      {/* Header */}
      <div className="bg-stone-800 text-white px-5 py-4 font-semibold rounded-t-2xl">
        Placement Highlights
      </div>

      {/* Rows */}
      <div>
        {allPlacements.map((program, idx) => (
          <div key={idx} className="px-5 py-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">{program.name}</span>
              <span className="font-semibold">{program.number}</span>
            </div>
            {idx < allCourses.length - 1 && (
              <hr className="border-gray-300 mt-3" />
            )}
          </div>
        ))}
                        <p className='p-5 text-stone-800/70 font-bold'>Includes internships and placements as on 15.02.2023</p>
                      </div>
    </div>
                  </div>
              </div>
              </div>
            </div>
            {/* asdf */}
            <div className="h-fit py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">INFRASTRUCTURE</h1>
        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm font-semibold">
          Reviews <span className="text-green-500">★</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.slice(0,-1).map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center"
          >
            <div className="bg-gray-900 rounded-full p-4 mb-4">
              {feature.icon}
            </div>
            <h2 className="font-semibold text-lg">{feature.title}</h2>
            <div className="w-16 border-b border-gray-300 my-2"></div>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
              </div>
              <div className="w-full bg-white rounded-2xl shadow p-4 flex items-center h-full my-5">
<div className="bg-gray-900 rounded-full p-4">
              {features[2]?.icon}
                </div>
                <span className='font-semibold flex items-center text-sm md:text-lg px-3 border-r-1 min-h-30 border-gray-800'>
                  <p>Grounds</p>
                </span>
                <p className='px-3 text-xs md:text-sm'>The campus is spread over 372 acres and boasts well maintained lawns, gardens and open spaces.</p>
              </div>
              {/* img section */}
              <div className='flex w-full'>
                <img src='img1.1.png' className='max-h-[70vh] w-3/4' />
                <span className='relative max-h-[70vh] w-1/4'>
                  <img src='img1.2.png' className='w-full h-full' />
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                    <MoveRight className='h-10 w-10 text-white' />
                    <p className='text-white text-lg font-semibold'>View all Images</p>
                  </div>
                </span>
              </div>
              <div className="w-full bg-white rounded-2xl shadow p-4 md:p-8 flex items-center h-full my-5">
<div className="bg-gray-900 rounded-full p-4">
              <Award className='h-5 w-5 md:h-10 md:w-10 text-green-500' />
                </div>
                <span className='font-semibold flex items-center text-sm md:text-lg px-3 border-r-1 min-h-30 border-gray-800'>
                  <p className='whitespace-nowrap'>Sports Types</p>
                </span>
                <p className='px-3 text-xs md:text-sm'>Vit offers extensive sports facilities for various sports activities like Cricker, Football, Basketball, Tennis, Badminton, Swimming, Atheletics, etc. </p>

              </div>
              {/* img sec 2 */}
              <div className='flex w-full'>
                <img src='img2.1.png' className='max-h-[70vh] w-3/4 rounded-2xl' />
                <span className='relative max-h-[70vh] w-1/4'>
                  <img src='img2.2.png' className='w-full h-full' />
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                    <MoveRight className='h-10 w-10 text-white' />
                    <p className='text-white text-lg font-semibold'>View all Images</p>
                  </div>
                </span>
              </div>
              <div className="w-full bg-white rounded-2xl shadow p-4 md:p-8 flex items-center h-full my-5">
<div className="bg-gray-900 rounded-full p-2">
              <Home className='h-5 w-5 md:h-10 md:w-10 text-green-500' />
                </div>
                <span className='font-semibold flex items-center text-sm md:text-lg px-3 border-r-1 min-h-30 border-gray-800'>
                  <p className='whitespace-nowrap'>Building Blocks</p>
                </span>
                <p className='px-3 text-xs md:text-sm'>The campus has numerous academic buildings, research centers, administrative blocks and student activity centers </p>
              </div>

              {/* img sec 3 */}
              <div className='flex gap-5 w-full'>
                <img src='img3.1.png' className='max-h-[70vh] w-[70%] md:w-[35%] rounded-2xl' />
                <img src='img3.2.png' className='max-h-[70vh] hidden md:block w-[35%] rounded-2xl' />
                <span className='relative max-h-[70vh] w-1/4'>
                  <img src='img1.2.png' className='w-full h-full' />
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                    <MoveRight className='h-10 w-10 text-white' />
                    <p className='text-white text-lg font-semibold'>View all Images</p>
                  </div>
                </span>
              </div>
{/* societies */}
              <div>
                <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-semibold'>Clubs & Societies</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
                </div>
                <p>The university has a dedicated placement cell that facilitates campus recruitement by leading national and international companies</p>
                <ClubCard
                  image="/club-img-1.png"
        title="Cultural Club"
        subtitle="Cultural Club of VIT Vellore"
                />
                <ClubCard
                  image="/club-img-2.png"
        title="Technical Club"
        subtitle="Technical Club of VIT Vellore"
                />
                <ClubCard
                  image="/club-img-3.png"
        title="Literacy Club"
        subtitle="Literacy Club of VIT Vellore"
                />
                <ClubCard
                  image="/club-img-4.png"
        title="Sports Club"
        subtitle="Sports Club of VIT Vellore"
                />
              </div>
              <div className='py-10'>
                 <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-bold'>DRESS CODE</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
                </div>
                <p className='text-lg text-stone-800/80'>VIT does not have a strict uniform policy. However, students are expected to dress decently and appropriately for academica and social settings</p>
       </div>
       {/* img sec 4 */}
               <div className='flex gap-5 w-full'>
                <img src='img4.1.png' className='max-h-[70vh] w-[70%] md:w-[35%] object-cover rounded-2xl' />
                <img src='img4.2.png' className='max-h-[70vh] object-cover hidden md:block w-[35%] rounded-2xl' />
                <span className='relative max-h-[70vh] w-1/4'>
                  <img src='img1.2.png' className='w-full h-full' />
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                    <MoveRight className='h-10 w-10 text-white' />
                    <p className='text-white text-lg font-semibold'>View all Images</p>
                  </div>
                </span>
              </div>

              {/* fests */}
              <div className="py-10">
                <div className="flex justify-between w-full items-center py-4">
            <p className='text-xl font-bold'>FESTS</p>
            <span className='flex items-center gap-1 rounded-full text-black bg-gray-200 px-5 py-1'>Reviews <Star className='h-5 w-5 text-green-500' /> <ChevronRight className='h-5 w-5' /></span>
                </div>
                <p className='text-lg text-stone-800/80'>VIT does not have a strict uniform policy. However, students are expected to dress decently and appropriately for academica and social settings</p>
                <img src="/img5.1.png" className='w-full h-[70vh] rounded-2xl' />
                <div className="flex gap-4 my-5">
                <img src="/img5.2.png" className='w-[33%] md:w-[40%] h-[70vh] md:h-[50vh] rounded-2xl' />
                <img src="/img5.3.png" className='w-[33%] md:w-[40%] h-[70vh] md:h-[50vh] rounded-2xl' />
                <span className='relative max-h-[70vh] w-1/4'>
                  <img src='img1.2.png' className='w-full h-full' />
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                    <MoveRight className='w-4 h-4 md:h-10 md:w-10 text-white' />
                    <p className='text-white text-xs sm:text-sm md:text-lg font-semibold'>View all Images</p>
                  </div>
                </span>
                </div>
              </div>

              {/* reviews */}
              <Reviews />
    </div>
          </div>
    )
}