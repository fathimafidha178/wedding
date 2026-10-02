// import { useState } from "react";
// import axios from "axios";

// const RSVP = () => {

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     guests: 1,
//     attending: true,
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });

//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       await axios.post(
//         "http://localhost:5000/api/rsvp",
//         form
//       );

//       setMessage(
//         "Thank you for confirming your attendance ❤️"
//       );

//       setForm({
//         name: "",
//         phone: "",
//         guests: 1,
//         attending: true,
//       });

//     } catch (error) {

//       setMessage(
//         "Something went wrong. Please try again."
//       );

//     }
//   };

//   return (
//     <section className="rsvp">

//       <p>WE WOULD LOVE TO HAVE YOU</p>

//       <h2>RSVP</h2>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={form.phone}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="guests"
//           min="1"
//           value={form.guests}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">
//           CONFIRM ATTENDANCE
//         </button>

//       </form>

//       {message && <p>{message}</p>}

//     </section>
//   );
// };

// export default RSVP;