import { motion } from 'framer-motion';

const DoctorCard = ({ selectedDoctor }) => {
  return (
    <motion.div
      className="card mt-8 p-4 rounded-lg shadow-lg items-center"
      initial={{ opacity: 0, scale: 0.8 }} // Starting animation state
      animate={{ opacity: 1, scale: 1 }}   // Final animation state
      transition={{ duration: 0.5 }}        // Animation duration
    >
      <motion.div className="grid grid-cols-1 justify-center items-center space-x-4 shadow-2xl shadow-black rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }} // Starting animation state
      animate={{ opacity: 1, scale: 1 }}   // Final animation state
      transition={{ duration: 1.5 ,delay:1,type:'spring',stiffness:350}} 
      >
        <img
          src={selectedDoctor.Image}
          alt={selectedDoctor.Name}
          className="w-40 rounded-full border-4 border-white shadow-md text-center items-center"
        />
        <div className="p-5 rounded-md shadow-2xl bg-blue-900">
          <h2 className="text-2xl font-bold text-white">{selectedDoctor.Name}</h2>
          <p className="text-lg badge badge-accent font-bold text-red-700">{selectedDoctor.Speciality}</p>
          <p className="text-md text-white">{selectedDoctor.Location}</p>
          <p className="text-md text-white">Visit Fee: <span className="font-semibold">{selectedDoctor.VisitFee} BDT</span></p>
          <p className="text-md text-white">Contact: <span className="font-semibold">{selectedDoctor.ContactNumber}</span></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DoctorCard;
