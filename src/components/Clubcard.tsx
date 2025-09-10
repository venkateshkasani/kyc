export default function ClubCard({ image, title, subtitle }:{image:string, title:string, subtitle:string}) {
  return (
    <div className="mt-5">
      <div className="relative w-full rounded-3xl overflow-hidden shadow">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
