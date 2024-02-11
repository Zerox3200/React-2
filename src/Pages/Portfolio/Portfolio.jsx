import './Portfolio.scss'
import { Projects } from './ProtfolioFile'
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

export default function Portfolio() {
    const ImageHandler = (source) => {
        Swal.fire({
            imageUrl: source,
            imageHeight: 400,
            showConfirmButton: false,
            imageWidth: 400,
            customClass: "Sweet",
            backdrop: "rgb(63 187 156 / 20%)"
        });
    }
    return (
        <div className='Portfolio'>
            <h1>PORTFOLIO COMPONENT</h1>
            <span><StarIcon /></span>
            <div className="Portfolio_cards container">
                {Projects.map((pro, index) => <motion.div
                    className="Portfolio_card1"
                    key={index}
                    style={{ backgroundImage: `url(${pro.source})` }}
                    onClick={() => ImageHandler(pro.source)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "linear", delay: pro.Delay }}

                >
                    <AddIcon />
                </motion.div>)}

            </div>
        </div>
    )
}
