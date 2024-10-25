import { Camera, CheckTrueIcon, CloseIcon, IncreaseIcon } from "../../../../core/icon"
import { GoPlus } from "react-icons/go";
import { useDisclosure } from "@nextui-org/react"
import { useState } from "react"
import ProfileUploader from "./ProfileUploader"
import { AddProfileImage } from "../../../../core/services/api/post-data"
import { CreateModal, ImageFallBack } from "../../../common"
import { useDispatch, useSelector } from "react-redux"
import fallback from "../../../../assets/images/user-circle-icon.png"
import CreateUserImages from "./CreateUserImages"
import convertDataUrlToFile from "./ConvertDataUrlToFile"
import CropProfileImage from "./CropProfileImage"

const AddProfile = () => {
    const profile = useSelector(state => state.UserInfo.info)
    const [imgSrc, setImgSrc] = useState()
    const dispatch = useDispatch()

    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [cropModalOpen, setCropModalOpen] = useState(false)

    // Handle crop image function
    const handleCropImage = (data) => {
        const file = convertDataUrlToFile(data)

        let formData = new FormData();
        formData.append("formFile", file);

        AddProfileImage(formData, dispatch)
    }

    // Handle increase profile function
    const handleSelectFile = (event) => {
        ProfileUploader(event, setImgSrc)
        setCropModalOpen(true)
    }

    return (
        <div className="w-56 h-56 lg:w-36 lg:h-36 rounded-full overflow-hidden relative shadow-lg">
            <ImageFallBack
                src={profile.currentPictureAddress && profile.currentPictureAddress}
                fallback={fallback}
                className="w-full h-full"
            />
            <div onClick={() => { onOpen() }} className="w-full h-9 cursor-pointer bg-black/60 z-10 absolute bottom-0 left-0 flex justify-center items-center">
                <GoPlus size={22} color="#fff" />
                <Camera />
            </div>
            <CreateModal
                isOpen={isOpen}
                onClose={onClose}
                size="4xl"
                bodyStyle="flex flex-row flex-wrap justify-center gap-y-10 py-10 sm:py-20 px-10 sm:px-32 relative"
                scroll={false}
            >
                <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-0 right-0">
                    <CloseIcon />
                </div>
                <div className="relative w-80 h-80 flex justify-center items-center">
                    <ImageFallBack
                        className="w-full h-full rounded-2xl"
                        src={profile.currentPictureAddress && profile.currentPictureAddress}
                        fallback={fallback}
                    />
                    <CropProfileImage
                        handleCrop={handleCropImage}
                        src={imgSrc}
                        open={cropModalOpen}
                        setOpen={setCropModalOpen}
                    />
                    <div className="w-14 h-14 bg-white rounded-full absolute -bottom-5 -left-5 flex items-center justify-center">
                        <CheckTrueIcon />
                    </div>
                </div>
                <div className="w-80 overflow-x-auto sm:overflow-visible sm:w-full h-28 flex gap-x-8 items-center">
                    {
                        profile && profile["userImage"].map((item, index) => (
                            <CreateUserImages
                                key={index}
                                info={item}
                                activeImage={profile.currentPictureAddress}
                            />
                        ))
                    }
                    <label htmlFor="choosePicture" className="cursor-pointer hover:scale-110">
                        <IncreaseIcon />
                        <input
                            type="file"
                            accept="image/jpg, image/jpeg, image/png"
                            multiple
                            id="choosePicture"
                            className="hidden"
                            onChange={(event) => { handleSelectFile(event) }}
                        />
                    </label>
                </div>
            </CreateModal>
        </div>
    )
}

export default AddProfile
