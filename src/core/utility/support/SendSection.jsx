import { PiSmileySticker } from "react-icons/pi";
import { MdOutlineAttachFile } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
const SendSection = () => {
    const [sendStatus, setSendStatus] = useState(false)
    const [query, setQuery] = useState(false)

    // Change the search status and change the send icon
    const handleOnChange = (e) => {
        console.log(e)
        if (e !== "") setSendStatus(true)
        else setSendStatus(false)
        setQuery(query)
    }




    return (
        <div className="py-3 px-3 bg-white dark:bg-zinc-600 flex justify-between ">
            <input
                type="text"
                placeholder="پیام خود را وارد کنید..."
                className="text-sm w-[350px] outline-none bg-transparent"
                onChange={(e) => handleOnChange(e.target.value)}

            />
            <div> <PiSmileySticker size={25} /> </div>
            {sendStatus ? (<div > <LuSend color={"blue"} size={25} /> </div>)
                : (<div> <MdOutlineAttachFile size={25} /> </div>)}


        </div>
    )
}

export default SendSection