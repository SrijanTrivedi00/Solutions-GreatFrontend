"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function AccordionPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-linear-to-r from-blue-500 to-purple-600">
      <div className="w-[500px] bg-white rounded-xl shadow-xl p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          Accordion App
        </h1>

        {/* Accordion Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
        >
          <span className="text-lg font-semibold">Accordion Component</span>

          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <p key={item} className="p-2 bg-gray-50 rounded-md text-gray-700">
                Item: {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// My basic approach

// --------------------------------------
  
// 'use client';
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useState } from "react";

// export default function AccordianPage() {
//   const [accopen, setaccopen] = useState(false);
//   return (
//     <div className="flex justify-center items-center h-screen bg-linear-to-r from-blue-500 to-purple-600  ">
//       <div className="w-[500px] bg-white rounded-lg shadow-lg p-6 ">
//         <h1 className="text-2xl text-black text-center">Accordian App</h1>

//         <div className="mt-4 flex cursor-pointer" onClick={()=>setaccopen(!accopen)}>
//           <h3 className="text-lg font-semibold text-center">
//             accordian component
//           </h3>
//           {accopen ? <ChevronUp /> : <ChevronDown />}
//         </div>
//         {accopen && (
//             <div className="transition-all">
//                { [1,2,3,4,5,6,7,8,9,10].map(item=>
//                 <p>item: {item}</p>)
//                }
//             </div>
//         )
//         }
//       </div>
//     </div>
//   );
// }
