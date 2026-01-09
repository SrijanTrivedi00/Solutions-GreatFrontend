const HolyGrail = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="h-[70px] bg-amber-800 flex items-center justify-center text-white">
        Holy Grail is here..
      </header>

      {/* Middle */}
      <main className="flex flex-1">
        
        {/* Left Sidebar */}
        <aside className="w-64 bg-amber-300 flex items-center justify-center">
          sidebar-left
        </aside>

        {/* Content */}
        <section className="flex-1 bg-blue-700 flex items-center justify-center text-white">
          Content
        </section>

        {/* Right Sidebar */}
        <aside className="w-64 bg-amber-500 flex items-center justify-center">
          sidebar-right
        </aside>

      </main>

      {/* Footer */}
      <footer className="h-[70px] bg-amber-950 flex items-center justify-center text-white">
        Footer
      </footer>

    </div>
  );
};

export default HolyGrail;




// my Approach

// const HolyGrail = () => {
//   return (
//     <>
//       <div className=" flex justify-center max-w-full bg-amber-800 backdrop-blur-2xl h-[70px] items-center ">
//         <h1 className="text-white">Holy Grail is here..</h1>
//       </div>
//       <div className="flex">
//         <div className="w-3/12 h-screen flex bg-amber-300  items-center justify-center">
//           <h1 className="text-black text-5xl">sidebar-left</h1>
//         </div>
//         <div className="w-6/12 h-screen flex bg-blue-700 items-center justify-center">
//           <h1 className="text-white text-5xl">Content</h1>
//         </div>
//         <div className="w-3/12 h-screen flex bg-amber-500  items-center justify-center">
//           <h1 className="text-black text-5xl">sidebar-right</h1>
//         </div>
//       </div>
//       <div className=" flex justify-center max-w-full bg-amber-950 backdrop-blur-2xl h-[70px] items-center ">
//         <h1 className="text-white">Footer</h1>
//       </div>
//     </>
//   );
// };

// export default HolyGrail;
