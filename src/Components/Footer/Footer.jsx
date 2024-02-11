import './Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
export default function Footer() {
    return (
        <div className='Footer'>
            <div className="Footer_pt1">
                <div className="Footer_pt1_Title">
                    <h3>LOCATION</h3>
                    <span>2215 John Daniel Drive</span>
                    <span>Clark, MO 65243</span>
                </div>
                <div className="Footer_pt1_Icons">
                    <h3>AROUND THE WEB</h3>
                    <div className="Icons">
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                        <LanguageIcon />
                    </div>
                </div>
                <div className="Footer_pt1_End">
                    <h3>ABOUT FREELANCER</h3>
                    <span>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
                </div>
            </div>
            <div className="Footer_pt2">
                <span>Copyright © Your Website 2021</span>
            </div>
        </div>
    )
}
