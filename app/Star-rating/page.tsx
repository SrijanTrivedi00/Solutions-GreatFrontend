
"use client";
import { Star } from "lucide-react";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-gray-700 mb-2">Give your feedback!</h3>

      <div className="flex">
        {[0, 1, 2, 3, 4].map((_, index) => {
          const isActive = index <= (hover !== -1 ? hover : rating);

          return (
            <span
              key={index}
              className={`cursor-pointer ${
                isActive ? "text-amber-400" : "text-gray-400"
              }`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(-1)}
            >
              <Star />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;


// My Logic

// "use client";
// import { Star } from "lucide-react";
// import { useState } from "react";

// const StarRating = () => {
//   const [idx, setIdx] = useState(-1);
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h3 className="text-gray-700">Give your feedback!</h3>
//       <div className="flex">
//         {[0,1,2,3,4].map((item, index) => (
//           <span
//             key={index}
//             className={index <= idx ? `hover:*:text-amber-400 text-amber-400` : `hover:*:text-amber-400`}
//             onClick={() => setIdx((prev) => prev=index)}
//           >
//             <Star />
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StarRating;
