"use client";
import { Form } from "lucide-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Your Small Apps Dashboard
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => router.push("/Weather-app")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none"
        >
          🌦 Open Weather App
        </button>

        <button
          onClick={() => router.push("/Accordian")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none"
        >
          📂 Open Accordion App
        </button>
         <button
          onClick={() => router.push("/Contact_form")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex"
        >
          <Form></Form> Open Contact form
        </button>
      </div>
    </div>
  );
};

export default Home;
