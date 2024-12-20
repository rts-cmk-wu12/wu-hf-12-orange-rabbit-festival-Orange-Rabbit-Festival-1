import InputFields from "../components/inputfields"
import Participants from "../components/participants";
import '../style/index.css'
import { BsCalendar3 } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa6";
import PartiHeader from "../components/header-participants";

export default function Home() {
    return (
        <div className="main-container">
            <img src="\src\images\orangerabbitmainimg.png" alt="Description" />
            <div className="form-wrapper">
                <div className="form-header">
                    <small className="signup-text">SIGNUP FOR THE EVENT</small>
                    <p className="title-text">Orange Rabbit Festival 2023</p>
                    <p className="date-text"><BsCalendar3 className="form-header-icon" />24 June 2025 – 1 July 2025 </p>
                    <p className="address-text"><FaRegMap className="form-header-icon" />Bunny Avenue 22, 2300, Rabbitkilde</p>
                </div>
                <p className="dashed-border-line"></p>
                <div className="input-fields-container">
                    <InputFields />
                </div>
            </div>
            <div className="participants">
                <PartiHeader/>
                <div className="participants-container">
                    <Participants/>
                </div>
            </div>
        </div>
    )
}