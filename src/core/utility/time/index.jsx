const ChangeTime = (time) => {
    const newTime = time && time.slice(11, 16)

    return <span className="font-Number">{newTime}</span>
}

export default ChangeTime