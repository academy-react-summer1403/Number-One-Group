import { useEffect, useState } from "react"

const Spinner = ({ value, height, setAmount }) => {
    const [count, setCount] = useState(value)
    const handleIncrease = () => { setCount(count + 1) }
    const handleDecrease = () => {
        if (count < 2) return
        setCount(count - 1)
    }
    useEffect(() => {setAmount(count)}, [count])

    return (
        <div style={{ height: height }} className="w-[116px] flex rounded-md border border-LightGrayish overflow-hidden">
            <button onClick={handleDecrease} className="spinner-buttons">-</button>
            <span className="w-2/4 flex justify-center items-center text-DarkBlue">{count}</span>
            <button onClick={handleIncrease} className="spinner-buttons">+</button>
        </div>
    )
}

export default Spinner
