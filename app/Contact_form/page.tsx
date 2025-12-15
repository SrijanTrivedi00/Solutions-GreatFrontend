"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Details submitted successfully!");
    console.log("Form Data Submitted:", formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-linear-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-[500px] px-6 py-10 rounded-2xl bg-white/60 backdrop-blur-lg shadow-xl">
        <h1 className="text-2xl font-semibold text-center text-black">
          Contact Form
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-black">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-lg border focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-lg border focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-black">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-lg border focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-black">Confirm Password</label>
            <input
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-lg border focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

// MY LOGIC

// ------------------------------------

// "use client";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleSubmit = () => {
//     toast.success("Details Submitted Successfully!");
//     console.log("Form Data Submitted: ", formData);

//     setFormData({
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };
//   return (
//     <div className="flex justify-center items-center h-screen bg-linear-to-r from-purple-400 via-pink-500 to-red-500">
//       <div className="w-[500px] px-5 rounded-2xl bg-white/50 py-10 backdrop-blur-lg shadow-lg">
//         <h1 className="text-2xl text-black text-center">Contact Form</h1>

//         <div className="mt-5">
//           <div className="backdrop-blur-2xl">
//             <label className="block text-black">Username</label>
//             <input
//               className=""
//               type="text"
//               value={formData.username}
//               onChange={(e) =>
//                 setFormData({ ...formData, username: e.target.value })
//               }
//             />
//           </div>
//           <div className="backdrop-blur-2xl">
//             <label className="block text-black">Email</label>
//             <input
//               className=""
//               type="email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//           </div>
//           <div className="backdrop-blur-2xl">
//             <label className="block text-black">Password</label>
//             <input
//               className=""
//               type="password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//             />
//           </div>
//           <div className="backdrop-blur-2xl">
//             <label className="block text-black">Confirm Password</label>
//             <input
//               className=""
//               type="text"
//               value={formData.confirmPassword}
//               onChange={(e) =>
//                 setFormData({ ...formData, confirmPassword: e.target.value })
//               }
//             />
//           </div>
//         </div>
//         <button
//           className="bg-red-500 px-5 mt-5 justify-center"
//           onClick={() => handleSubmit()}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ContactForm;
