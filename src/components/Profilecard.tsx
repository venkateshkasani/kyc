import { CheckCircle } from "lucide-react";

export default function ProfileCard({ image, name, degree, location, expertise }: {
  image: string,
  name: string,
  degree: string,
  location: string,
  expertise: string
}) {
  return (
    <div className="flex bg-green-50 rounded-2xl overflow-hidden shadow w-full">
      {/* Left: Image */}
      <div className="w-32 min-h-[100%] flex-shrink-0 overflow-clip">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-top"
        />
      </div>

      {/* Right: Info */}
      <div className="flex flex-col justify-between p-4 w-full">
        <div>
          <h2 className="font-bold text-lg flex items-center gap-1">
            {name} <CheckCircle className="w-4 h-4 text-black" />
          </h2>
          <p className="text-gray-600 text-sm">
            {degree} • {location}
          </p>
          <p className="font-semibold text-sm mt-1">
            Expertise: <span className="font-normal">{expertise}</span>
          </p>
        </div>

        {/* Button */}
        <button className="mt-3 bg-white rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-gray-100">
          View
        </button>
      </div>
    </div>
  );
}
