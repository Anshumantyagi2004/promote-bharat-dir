import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import { FaStar } from "react-icons/fa";

const ratings = [
  { star: 5, value: 65, color: "bg-green-600" },
  { star: 4, value: 7, color: "bg-green-500" },
  { star: 3, value: 7, color: "bg-green-500" },
  { star: 2, value: 4, color: "bg-yellow-500" },
  { star: 1, value: 17, color: "bg-red-500" },
];

const stats = [
  { label: "Response", value: 83 },
  { label: "Quality", value: 100 },
  { label: "Delivery", value: 71 },
];

export default function RatingsUI() {
  return (
    <div className="px-3 sm:px-6 md:px-10 mt-5">
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* LEFT */}
          <div className="flex flex-col items-start lg:w-44">
            <h2 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              Ratings & Reviews
            </h2>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              4.4<span className="text-base sm:text-lg text-gray-500">/5</span>
            </h2>

            <div className="flex text-yellow-400 text-base sm:text-lg mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-gray-500 mt-1 text-xs sm:text-sm">
              72 Ratings
            </p>
          </div>

          {/* BARS */}
          <div className="flex-1 space-y-2 sm:space-y-3">
            {ratings.map((item) => (
              <div key={item.star} className="flex items-center gap-2 sm:gap-3">

                <span className="text-xs sm:text-sm text-gray-600 w-5 sm:w-6">
                  {item.star}
                </span>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 0.6 }}
                    className={`h-full ${item.color}`}
                  />
                </div>

                <span className="text-xs sm:text-sm text-gray-500 w-8 sm:w-10 text-right">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>

          {/* CIRCLES */}
          <div className="flex justify-between sm:justify-start gap-6 sm:gap-8">
            {stats.map((item, i) => (
              <div key={i} className="flex flex-col items-center">

                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#e5e7eb"
                      strokeWidth="6"
                      fill="none"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#16a34a"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={165}
                      strokeDashoffset={165 - (165 * item.value) / 100}
                      initial={{ strokeDashoffset: 165 }}
                      animate={{
                        strokeDashoffset:
                          165 - (165 * item.value) / 100,
                      }}
                      transition={{ duration: 0.8 }}
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">
                    {item.value}%
                  </span>
                </div>

                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS */}
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-10 text-gray-600">

          {[ 
            { place: "Indore", date: "17 September, 2021" },
            { place: "Sri Lanka", date: "24 January, 2021" }
          ].map((review, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            >
              {/* LEFT */}
              <div className="flex gap-4 sm:gap-6 items-center">
                <span className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">
                  5 ★
                </span>
                <div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {review.place}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {review.date}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Response", "Quality", "Delivery"].map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1 text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-gray-100 text-gray-800 rounded-full"
                  >
                    <ThumbsUp size={12} /> {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}