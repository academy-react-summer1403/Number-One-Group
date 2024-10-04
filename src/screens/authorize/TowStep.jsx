import Vector from "../../assets/images/Confirmed.svg"
import { useOutletContext } from 'react-router-dom'
import { GetCode } from '../../components/pages/authorize'
import { useEffect } from "react"

const TowStepLogin = () => {
    const context = useOutletContext()

    useEffect(() => { context.setVector(Vector) }, [])

    return (
        <div className='h-[390px]'>
            <GetCode />
        </div>
    )
}

export default TowStepLogin