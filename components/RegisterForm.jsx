// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function RegisterForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       setError("All fields are necessary.");
//       return;
//     }

//     try {
//       const resUserExists = await fetch("api/userExists", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const { user } = await resUserExists.json();

//       if (user) {
//         setError("User already exists.");
//         return;
//       }

//       const res = await fetch("api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//         }),
//       });

//       if (res.ok) {
//         const form = e.target;
//         form.reset();
//         router.push("/");
//       } else {
//         console.log("User registration failed.");
//       }
//     } catch (error) {
//       console.log("Error during registration: ", error);
//     }
//   };

//   return (
//     <div className="grid place-items-center h-screen">
//       <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
//         <h1 className="text-xl font-bold my-4">Register</h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Full Name"
//           />
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             placeholder="Email"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//           />
//           <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
//             Register
//           </button>

//           {error && (
//             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
//               {error}
//             </div>
//           )}

//           <Link className="text-sm mt-3 text-right" href={"/"}>
//             Already have an account? <span className="underline">Login</span>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaGoogle } from 'react-icons/fa'; 
// import Image from 'next/image';

// export default function RegisterForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       setError("All fields are necessary.");
//       return;
//     }

//     try {
//       const resUserExists = await fetch("api/userExists", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const { user } = await resUserExists.json();

//       if (user) {
//         setError("User already exists.");
//         return;
//       }

//       const res = await fetch("api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//         }),
//       });

//       if (res.ok) {
//         const form = e.target;
//         form.reset();
//         router.push("/");
//       } else {
//         console.log("User registration failed.");
//       }
//     } catch (error) {
//       console.log("Error during registration: ", error);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//     <div className="background-image"></div>
//     <div className="login-content">
//       <div className="logo-container">
//         <Link href="/">
//           <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//         </Link>
//       </div>
//       <div className="login-form-container">
//         <h2 className="login-title">Become The Young CEO!</h2>
//         <p className="login-subtitle">
//           Already Young CEO?{' '}
//           <Link href="/" className="signup-link">Log In</Link>
//         </p>
//         <form onSubmit={handleSubmit}>
//         <input type="name" 
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Artist Name" className="login-input" required />

//           <input type="email" 
//            onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email" className="login-input" required />

//           <input type="password" 
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password" className="login-input" required />
//           <div className="policy-checkbox">
//             <input type="checkbox" id="agree-policy" className="policy-input" required />
//             <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
//           </div>
//                     {error && (
//             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
//               {error}
//             </div>
//           )}
//           <button type="submit" className="login-button">Become The Young CEO Now!!</button>
//           <button type="button" className="google-login-button">
//             <FaGoogle className="google-icon text-red-600" />
//             Continue With Google
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from 'react-icons/fa'; 
import Image from 'next/image';
import { toast } from "sonner"; // Import toast

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are necessary."); // Display toast error message
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        toast.error("User already exists."); // Display toast error message
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      toast.error("An error occurred during registration."); // Display toast error message
    }
  };

  return (
    <div className="login-wrapper">
      <div className="background-image"></div>
      <div className="login-content">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Become The Young CEO!</h2>
          <p className="login-subtitle">
            Already Young CEO?{' '}
            <Link href="/" className="signup-link">Log In</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input type="name" 
              onChange={(e) => setName(e.target.value)}
              placeholder="Artist Name" className="login-input" required />
            <input type="email" 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" className="login-input" required />
            <input type="password" 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" className="login-input" required />
            <div className="policy-checkbox">
              <input type="checkbox" id="agree-policy" className="policy-input" required />
              <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
            </div>
            <button type="submit" className="login-button">Become The Young CEO Now!!</button>
            <button type="button" className="google-login-button">
              <FaGoogle className="google-icon text-red-600" />
              Continue With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
