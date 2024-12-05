import { ImageFallBack } from "../../common"
import SidebarPictures from "./SidebarPictures"
import fallback from "../../../assets/images/products.png"

const PictureSection = ({ img, activePic, setActivePic }) => {
    return (
        <div className="w-full xl:w-1/2 overflow-hidden flex flex-wrap sm:flex-nowrap gap-4 justify-center xl:justify-start">
            {img?.length > 0 && (
                <div className="w-11/12 bg-red-700 sm:w-[124px] h-fit flex sm:flex-wrap gap-4 order-2 sm:order-none">
                    {img?.map((pic, index) => <SidebarPictures setPic={setActivePic} pic={activePic} picture={pic} key={index} />)}
                </div>
            )}
            <ImageFallBack
                src={activePic}
                fallback={fallback}
                className={`w-full sm:w-[436px] xl:w-3/4 h-[436px] rounded-lg ${!img?.length > 0 && "xl:w-full"}`}
            />
        </div>
    )
}

export default PictureSection
