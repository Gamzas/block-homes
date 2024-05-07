import CompletePigContainer from '@/common/CompletePigContainer'
import {CustomButtonStyle} from '@common/style/CustomButtonStyle'
import {useNavigate} from 'react-router-dom'
import Gauge from '../Report/Gauge'
import * as e from "@components/EstateRegistrationPage/style/EstateRegistrationCompleteStyle";

const EstateRegistrationComplete = () => {
    const navigate = useNavigate()
    const hadleHome = () => {
        navigate('/')
    }
    return (
        <e.EstateRegistrationCompleteContainer>
            <Gauge steps={5}/>
            <CompletePigContainer></CompletePigContainer>
            <div className="complete-text">매물 등록이 완료되었습니다</div>
            <div className="button-box">
                <CustomButtonStyle onClick={hadleHome}>등록 완료</CustomButtonStyle>
            </div>
        </e.EstateRegistrationCompleteContainer>
    )
}

export default EstateRegistrationComplete
