
"use client";
import { useState } from 'react';

export default function TestPage() {
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});

  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

//   const handleSubmit1 = async (e) => {
//     e.preventDefault();
//     await fetch('/api/sendData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData1),
//     });
//   };

const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData1),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send data');
      }
  
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error.message);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    await fetch('/api/sendData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData2),
    });
  };

  return (
    <div>
      <h1>Form 1</h1>
      <form onSubmit={handleSubmit1}>
        <input
          type="text"
          name="field1"
          placeholder="Field 1"
          onChange={handleChange1}
        />
        <input
          type="text"
          name="field2"
          placeholder="Field 2"
          onChange={handleChange1}
        />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}


// import { useState } from 'react';

// export default function TestPage() {
//   const [formData1, setFormData1] = useState({});
//   const [formData2, setFormData2] = useState({});

//   const handleChange1 = (e) => {
//     setFormData1({ ...formData1, [e.target.name]: e.target.value });
//   };

//   const handleChange2 = (e) => {
//     setFormData2({ ...formData2, [e.target.name]: e.target.value });
//   };

//   const handleSubmit1 = async (e) => {
//     e.preventDefault();
//     await fetch('/api/sendData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData1),
//     });
//   };

//   const handleSubmit2 = async (e) => {
//     e.preventDefault();
//     await fetch('/api/sendData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData2),
//     });
//   };

//   return (
//     <div>
//       <h1>Form 1</h1>
//       <form onSubmit={handleSubmit1}>
//         <input
//           type="text"
//           name="field1"
//           placeholder="Field 1"
//           onChange={handleChange1}
//         />
//         <input
//           type="text"
//           name="field2"
//           placeholder="Field 2"
//           onChange={handleChange1}
//         />
//         <button type="submit">Submit</button>
//       </form>
      
//       <h1>Form 2</h1>
//       <form onSubmit={handleSubmit2}>
//         <input
//           type="text"
//           name="field1"
//           placeholder="Field 1"
//           onChange={handleChange2}
//         />
//         <input
//           type="text"
//           name="field2"
//           placeholder="Field 2"
//           onChange={handleChange2}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
