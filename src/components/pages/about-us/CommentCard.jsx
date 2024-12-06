import ReactStars from "react-rating-stars-component";
import { VigVigIcon } from "../../../core/icon";
import { useTranslation } from "react-i18next";

const CommentCard = ({ star, description, name }) => {
    const { i18n } = useTranslation()

    return (
        <div className="w-full h-full flex flex-wrap bg-LightLavender rounded-xl p-10">
            <div className="w-full flex gap-x-4 max-[1400px]:justify-center max-[1400px]:flex-wrap">
                <div className="min-w-16 h-16 rounded-full bg-SunshineYellow shadow-lg"></div>
                <div className="w-full flex flex-wrap max-[1400px]:justify-center">
                    <ReactStars
                        value={star}
                        edit={false}
                        count={5}
                        size={25}
                        activeColor="#ffd700"
                        color={"#ccc"}
                    />
                    <h1 className="text-xl -mt-2 w-full max-[1400px]:text-center text-DarkBlue">{name}</h1>
                </div>
            </div>
            <VigVigIcon className={`min-w-[48px] h-[48px] max-[1400px]:hidden reverse-img absolute top-10 ${i18n.language == "en" ? "right-10" : "left-10"}`} />
            <p className="max-[1400px]:text-center mediumStyle_text line-clamp-3">{description}</p>
        </div>
    )
}

export default CommentCard
