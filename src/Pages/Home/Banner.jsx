/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <motion.img
            src={b2}
            animate={{ y: [0,40,0], x: [0,40,0]}}
            
            transition={{
                duration: 4.3,
                delay: 1,
                ease: "linear",
                repeat: "2000",
              }}
            className="border-2 w-96 rounded-r-[80px] rounded-t-[80px] border-l-8 border-l-lime-400 border-b-8 border-b-lime-400  rounded-lg shadow-2xl"
          />
          <motion.img
            src={b3}
            animate={{ y: [10,-50,10], x: [100,180,100]}}
            
            transition={{
                duration: 4.3,
                delay: 1,
                ease: "linear",
                repeat: "2000",
              }}
            className="border-2 w-96 rounded-r-[80px] rounded-t-[80px] border-l-8 border-l-lime-400 border-b-8 border-b-lime-400  rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          
          <motion.h1
            transition={{
              duration: 3.3,
              delay: 1,
              ease: "linear",
              repeat: "2000",
            }}
            animate={{ x: 50 }}
            className="text-5xl font-bold box"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#f11111", "#51ff22"] }}
              transition={{
                duration: 3.3,
                delay: 1,
                ease: "linear",
                repeat: "2000",
              }}
            >
              Job
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
