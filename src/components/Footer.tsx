export default function Footer() {
    return (
      <section className="bg-[#2E2E2E]">
        <div className='min-h-[40vh]  px-5 md:px-30 flex flex-col md:flex-row md:items-center justify-between'>
        <div className="p-5 order-2 md:order-1">
          <div>
            <div className='flex items-center gap-2'>
            <img src='/footer-icon.png' className='h-5 w-5' />
            <p className='text-2xl md:text-5xl text-gray-200 font-bold'>Get in Touch:</p>
            </div>
            <div className='text-gray-200 mt-5 text-sm md:text-lg'>
              <p>email-address@gmail.com</p>
              <p>Noide, Uttar Pradesh 201009, IN</p>
            </div>
          </div>
       </div>
        <div className="p-5 order-1 md:order-2">
          <p className='text-2xl md:text-5xl font-bold text-gray-200 my-5'>Important Links:</p>
          <div className="flex flex-col text-gray-200">
            <p>About us</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <p className="text-4xl md:text-8xl text-center font-extrabold text-gray-300/80 w-full">KNOW YOUR COLLEGES</p>
        </section>
    )
}