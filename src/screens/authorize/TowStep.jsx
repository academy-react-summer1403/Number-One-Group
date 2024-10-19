import Vector from "../../assets/images/Confirmed.svg"
import { useOutletContext } from 'react-router-dom'
import { GetCode } from '../../components/pages/authorize'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { LoginTwoStep } from "../../core/services/api/post-data"

const TowStepLogin = () => {
    const context = useOutletContext()
    const loginInfo = useSelector(state => state.LoginInfo.keys)

    useEffect(() => { context.setVector(Vector) }, [])

    const handleClick = (event) => {
        console.log(event.verifyCode, loginInfo)
        LoginTwoStep(event.verifyCode, loginInfo)
    }

    return (
        <div className='h-[390px]'>
            <GetCode handleClick={handleClick} />
        </div>
    )
}

export default TowStepLogin