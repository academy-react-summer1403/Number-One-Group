import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/image-not-found.png"

const SidebarPictures = ({ pic, setPic, picture }) => {
    return (
        <label onClick={() => { setPic(picture) }} className="w-full sm:h-1/3 hover:cursor-pointer">
            <input readOnly checked={picture === pic ? true : false} className="hidden peer/active" type="radio" name="picture" />
            <ImageFallBack
                src={picture}
                className="border-3 peer-checked/active:border-VioletBlue rounded-lg"
                fallback={fallback}
            />
        </label>
    )
}

export default SidebarPictures
