const ChangeTime = (time) => {
    const newTime = time && time.slice(11, 16)

    return <span className="font-Mitra">{newTime}</span>
}

export default ChangeTime