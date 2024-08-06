
// // const Carousel = ( {slides} ) => {

// // 	return (
// // 	  <section id="carousel">
// // 			{slides.map((src) => (<img src={src} />))}	
// // 	  </section>
// // 	);
// //   };

// //   export default Carousel;

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "react-feather"

// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0)

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

//   useEffect(() => {
//     if (!autoSlide) return
//     const slideInterval = setInterval(next, autoSlideInterval)
//     return () => clearInterval(slideInterval)
//   }, [])
//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
// 				<button onClick={prev}>
//         	<ChevronLeft size={20} />
//         </button>
//         <button onClick={next}>
//         	<ChevronRight size={20} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-4">
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-2 h-2 bg-white rounded-full
//               ${curr === i ? "p-1.5" : "p-0.5 bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }