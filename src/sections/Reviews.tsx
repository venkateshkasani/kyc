import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="h-fit">
      {/* Section Header */}
      <h1 className="text-2xl font-bold mb-6">REVIEWS</h1>

      {/* AI Summary */}
      <div className="bg-white border-2 border-green-500 rounded-2xl p-6 mb-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
        <div>
          <h2 className="font-bold text-lg">AI Summary</h2>
          <p className="text-gray-600 mt-1">
            Karan Deb offers clear, actionable advice, simplifies complexities,
            and is an approachable, friendly mentor.
          </p>
        </div>
      </div>

      {/* User Review + Rating Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* User Review */}
        <div className="bg-white rounded-2xl p-6 md:col-span-2 flex items-start gap-4 shadow">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div>
            <h2 className="font-bold">Shivam</h2>
            <div className="flex text-green-500 my-1">
              {Array(5)
                .map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
            </div>
            <p className="text-gray-600">
              "I struggled with my assignments until I found this platform. The
              mentors provided excellent guidance, and I saw a significant
              improvement in my grades!"
            </p>
          </div>
        </div>

        {/* Rating & View All */}
        <div className="flex flex-col gap-4 justify-center">
          <div className="bg-white rounded-2xl px-6 py-3 flex items-center justify-center text-lg font-semibold shadow">
            Rating: <span className="ml-2 text-green-500 flex items-center">5★</span>
          </div>
          <button className="bg-white rounded-2xl px-6 py-3 shadow font-bold flex items-center justify-center gap-2 hover:bg-gray-100">
            View All →
          </button>
              </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full my-5">
  {/* Card 1 */}
  <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow w-full">
    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
    <div className="w-full">
      <h2 className="font-bold">Shivam</h2>
      <div className="flex text-green-500 my-1">
        {Array(5)
          .map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
      </div>
      <p className="text-gray-600">
        "I struggled with my assignments until I found this platform. The
        mentors provided excellent guidance, and I saw a significant
        improvement in my grades!"
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow w-full">
    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
    <div className="w-full">
      <h2 className="font-bold">Shivam</h2>
      <div className="flex text-green-500 my-1">
        {Array(5)
          .map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
      </div>
      <p className="text-gray-600">
        "I struggled with my assignments until I found this platform. The
        mentors provided excellent guidance, and I saw a significant
        improvement in my grades!"
      </p>
    </div>
  </div>
</div>
    </div>
  );
}
