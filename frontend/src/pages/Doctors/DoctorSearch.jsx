// import { useState, useEffect } from 'react';
import DoctorCard from '../../Shared/DoctorCad/DoctorCard';

// const DoctorSearch = () => {
//   const [doctorName, setDoctorName] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [doctors, setDoctors] = useState([]);

//   // Fetching doctors data using useEffect
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await fetch('doctors.json'); // Replace with your actual path
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setDoctors(data);
//       } catch (error) {
//         console.error('Error fetching doctor data:', error);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   const handleInputChange = (e) => {
//     setDoctorName(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();

//     const doctor = doctors.find((doc) => doc.place.toLowerCase() === Location.toLowerCase());
//     if (doctor) {
//       setSelectedDoctor(doctor);
//     } else {
//       setSelectedDoctor(null);
//       alert('Doctor not found');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 h-screen">
//       {/* Input Form */}
//       <form onSubmit={handleSearch} className="flex flex-col items-center">
//         <input
//           type="text"
//           value={doctorName}
//           onChange={handleInputChange}
//           placeholder="Enter Location"
//           className="border-2 border-gray-300 p-2 mb-4 w-1/2 rounded-lg"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//         >
//           Search
//         </button>
//       </form>

//       {/* Doctor Details */}
//       {selectedDoctor && (
        
//         <DoctorCard
//             selectedDoctor={selectedDoctor}
//         />
//       )}
//     </div>
//   );
// };

// export default DoctorSearch;
import { useState, useEffect } from 'react';
// import DoctorCard from '../../Shared/DoctorCard/DoctorCard';

const DoctorSearch = () => {
  const [doctorName, setDoctorName] = useState('');
  const [selectedDoctors, setSelectedDoctors] = useState([]); // Change to an array
  const [doctors, setDoctors] = useState([]);

  // Fetching doctors data using useEffect
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('doctors.json'); // Replace with your actual path
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched doctors:', data); // Log fetched data
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleInputChange = (e) => {
    setDoctorName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    const trimmedInput = doctorName.trim(); // Trim input to remove leading/trailing spaces
    console.log("Searching for doctors in:", trimmedInput);

    // Filter all doctors matching the location
    const matchedDoctors = doctors.filter((doc) => 
      doc.Location.toLowerCase().trim() === trimmedInput.toLowerCase()
    );

    if (matchedDoctors.length > 0) {
      console.log("Matched doctors:", matchedDoctors); // Log matched doctors
      setSelectedDoctors(matchedDoctors); // Set array of matched doctors
    } else {
      console.log("No doctors found");
      setSelectedDoctors([]);
      alert('No doctors found in this location');
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      {/* Input Form */}
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <input
          type="text"
          value={doctorName}
          onChange={handleInputChange}
          placeholder="Enter Location"
          className="border-2 border-gray-300 p-2 mb-4 w-1/2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </form>

      {/* Doctor Details */}
      <div className="flex flex-wrap justify-center">
        {selectedDoctors.map((doctor, index) => (
          <DoctorCard key={index} selectedDoctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;
