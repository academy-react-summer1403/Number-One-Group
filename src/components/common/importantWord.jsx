import { useTranslation } from "react-i18next"
import Explosion from "../../assets/images/Explosion.png"
import importantWord from "../../assets/images/importantWord.png"

const ImportantWord = ({ children, isExplosion = false, explosionStyle, holderStyle }) => {
    const { i18n } = useTranslation()
    return (
        <div className={`flex items-end ${isExplosion === true ? "h-20" : ""} ${holderStyle}`}>
            <div className="boldStyle_text relative min-w-28 h-fit px-5 py-2 flex justify-center text-white text-2xl font-bold" style={{ backgroundSize: "100% 100%" }}>
                <span className="relative z-10">{children}</span>
                <img className="absolute w-auto h-10" src={importantWord} alt="" />
            </div>
            {isExplosion === true ? <img className={`w-12 h-12 relative -top-10 left-2 ${explosionStyle} ${i18n.language === "en" ? "reverse-img" : ""}`} src={Explosion} alt="Explosion" /> : null}
        </div>
    )
}

export default ImportantWord
