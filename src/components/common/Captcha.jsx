import {
    Button,
    Input,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import CreateModal from "./CreateModal";
import { HiSpeakerWave } from "react-icons/hi2"
import { IoMdRefresh } from "react-icons/io";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Captcha = ({ setCorrect, isOpen, onClose }) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const [captchaChar, setCaptchaChar] = useState("")
    const inputRef = useRef()
    const { t } = useTranslation()

    const generateCaptchaChars = () => {
        let captcha = ""
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setCaptchaChar(captcha)
    }

    const handleSpeech = () => {
        if (captchaChar) {
            for (const char of captchaChar) {
                const speech = new SpeechSynthesisUtterance(char)
                window.speechSynthesis.speak(speech)
            }
        }
    }

    const handleCorrectCaptcha = (char) => {
        if (char === captchaChar) {
            setCorrect(true)
            onClose()
        } else {
            toast.error("لطفا دوباره امتحان کنید")
        }
    }

    useEffect(() => {
        generateCaptchaChars()
    }, [])

    return (
        <CreateModal isOpen={isOpen} onClose={onClose} header={t("captchaTitle")}>
            <div className="w-full flex flex-wrap gap-4 justify-center">
                <div className="flex justify-center gap-2 items-end w-full">
                    <div className="w-6 flex gap-2 items-end flex-wrap">
                        <button onClick={handleSpeech} className="w-6 h-6">
                            <HiSpeakerWave size={20} />
                        </button>
                        <button onClick={generateCaptchaChars} className="w-6 h-6">
                            <IoMdRefresh size={22} />
                        </button>
                    </div>
                    <div dir="ltr" className="border-green-400 border-1 w-1/2 h-20 bg-LavenderMist flex justify-center items-center gap-3">
                        {captchaChar?.split("")?.map((char, index) => (
                            <span
                                key={index}
                                className="text-3xl"
                                style={{ rotate: `${index}0deg`, position: "relative" }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
                <span>{t("captchaDescription")}</span>
                <Input
                    isClearable
                    ref={inputRef}
                    classNames={{
                        base: "w-2/3",
                        inputWrapper: "bg-LavenderMist p-0",
                        innerWrapper: "bg-LavenderMist hover:bg-LavenderMist px-4 rounded-xl",
                        input: "text-center"
                    }} />
            </div>
            <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                    بستن
                </Button>
                <Button onClick={() => { handleCorrectCaptcha(inputRef.current.value) }} color="primary">
                    تایید
                </Button>
            </ModalFooter>
        </CreateModal>
    )
}

export default Captcha
