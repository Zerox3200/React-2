import './About.scss'
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
export default function About() {
    return (
        <div className='About'>
            <motion.h1
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
            >About Component</motion.h1>
            <span className='Icon'><StarIcon /></span>
            <div className="About_Desc">
                <motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'linear' }}>Freelancer is a free bootstrap theme created by Route.
                    The download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </motion.p>
                <motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'linear', delay: 0.5 }}>Freelancer is a free bootstrap theme created by Route.
                    The download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </motion.p>
            </div>
        </div >
    )
}
