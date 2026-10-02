// import { useEffect, useState } from "react";

// const Countdown = () => {

//   const weddingDate = new Date(
//     "December 12, 2026 19:00:00"
//   ).getTime();

//   const calculateTime = () => {

//     const now = new Date().getTime();

//     const difference = weddingDate - now;

//     if (difference <= 0) {
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }

//     return {
//       days: Math.floor(
//         difference / (1000 * 60 * 60 * 24)
//       ),

//       hours: Math.floor(
//         (difference / (1000 * 60 * 60)) % 24
//       ),

//       minutes: Math.floor(
//         (difference / (1000 * 60)) % 60
//       ),

//       seconds: Math.floor(
//         (difference / 1000) % 60
//       ),
//     };
//   };

//   const [time, setTime] = useState(calculateTime());

//   useEffect(() => {

//     const timer = setInterval(() => {
//       setTime(calculateTime());
//     }, 1000);

//     return () => clearInterval(timer);

//   }, []);

//   return (
//     <section className="countdown">

//       <p>COUNTING DOWN TO OUR SPECIAL DAY</p>

//       <div className="countdown-grid">

//         <div>
//           <strong>{time.days}</strong>
//           <span>Days</span>
//         </div>

//         <div>
//           <strong>{time.hours}</strong>
//           <span>Hours</span>
//         </div>

//         <div>
//           <strong>{time.minutes}</strong>
//           <span>Minutes</span>
//         </div>

//         <div>
//           <strong>{time.seconds}</strong>
//           <span>Seconds</span>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default Countdown;