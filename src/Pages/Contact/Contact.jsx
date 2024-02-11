import { useState } from 'react';
import './Contact.scss'
import StarIcon from '@mui/icons-material/Star';

export default function Contact() {
    const [Title, SetTitle] = useState(false);
    const [Title2, SetTitle2] = useState(false);
    const [Title3, SetTitle3] = useState(false);
    const [Title4, SetTitle4] = useState(false);
    const HandleChange1 = (Element) => {
        if (Element !== "") {
            SetTitle(true);
            return;
        }
        if (Title) {
            SetTitle(false);
        } else {
            SetTitle(true);
        }
    }
    const HandleChange2 = (Element) => {
        if (Element !== "") {
            SetTitle2(true);
            return;
        }
        if (Title2) {
            SetTitle2(false);
        } else {
            SetTitle2(true);
        }
    }
    const HandleChange3 = (Element) => {
        if (Element !== "") {
            SetTitle3(true);
            return;
        }
        if (Title3) {
            SetTitle3(false);
        } else {
            SetTitle3(true);
        }
    }
    const HandleChange4 = (Element) => {
        if (Element !== "") {
            SetTitle4(true);
            return;
        }
        if (Title4) {
            SetTitle4(false);
        } else {
            SetTitle4(true);
        }
    }
    return (
        <div className='Contact container'>
            <div className="Contact_pt1">
                <h1>Contact Section</h1>
                <span className='Icon'><StarIcon /></span>
            </div>
            <form action="">
                <div className="FormSection">
                    <span className={Title ? "Show" : "hidde"}>User Name :</span>
                    <input type="text" placeholder='userName' onChange={(ele) => HandleChange1(ele.target.value)} />
                </div>
                <div className="FormSection">
                    <span className={Title2 ? "Show" : "hidde"}>User Age:</span>
                    <input type="text" placeholder='userAge' onChange={(ele) => HandleChange2(ele.target.value)} />
                </div>
                <div className="FormSection">
                    <span className={Title3 ? "Show" : "hidde"}>User Email:</span>
                    <input type="text" placeholder='userEmail' onChange={(ele) => HandleChange3(ele.target.value)} />
                </div>
                <div className="FormSection">
                    <span className={Title4 ? "Show" : "hidde"}>User Password:</span>
                    <input type="text" placeholder='userPassword' onChange={(ele) => HandleChange4(ele.target.value)} />
                </div>
                <button className='btn' onClick={(e) => e.preventDefault()}>Send Message</button>
            </form>
        </div>
    )
}
