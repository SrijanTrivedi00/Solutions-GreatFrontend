"use client";
import {
  ActivitySquare,
  CalculatorIcon,
  Form,
  GalleryVertical,
  ImagePlayIcon,
  MoveDiagonal2Icon,
  ScrollIcon,
  Star,
  TableOfContents,
  ThumbsUp,
  WatchIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center cursor-pointer">
        Your Small Apps Dashboard
      </h1>

      <div className="flex flex-wrap sm:flex-row gap-4">
        <button
          onClick={() => router.push("/Weather-app")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
        >
          🌦 Open Weather App
        </button>
        <button
          onClick={() => router.push("/Accordian")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
        >
          📂 Open Accordion App
        </button>
        <button
          onClick={() => router.push("/Contact_form")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer"
        >
          <Form></Form> Open Contact form
        </button>
        <button
          onClick={() => router.push("/Holy-grail")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <GalleryVertical /> Open Holy-Grail
        </button>
        <button
          onClick={() => router.push("/progress-bar")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <ActivitySquare /> Open Progressbar
        </button>{" "}
        <button
          onClick={() => router.push("/mortage-calculator")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <CalculatorIcon /> Open Mortage Calculator
        </button>
        <button
          onClick={() => router.push("/stopwatch")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <WatchIcon /> Use stopWatch
        </button>
        <button
          onClick={() => router.push("/image-carousel")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <ImagePlayIcon /> Use Carousel
        </button>
        <button
          onClick={() => router.push("/Infinite-scroll")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <ScrollIcon /> Infinite Scroll...
        </button>
        <button
          onClick={() => router.push("/Tabs-switch")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <TableOfContents /> Check Tabs...
        </button>
        <button
          onClick={() => router.push("/Modal")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <MoveDiagonal2Icon /> Modal
        </button>
        <button
          onClick={() => router.push("/Like-button")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <ThumbsUp /> Like Button
        </button>
         <button
          onClick={() => router.push("/Star-rating")}
          className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium 
                     hover:bg-green-600 transition duration-300 
                     shadow-md hover:shadow-lg focus:outline-none flex gap-2 cursor-pointer "
        >
          <Star /> Star Rating
        </button>

      </div>
    </div>
  );
};

export default Home;
