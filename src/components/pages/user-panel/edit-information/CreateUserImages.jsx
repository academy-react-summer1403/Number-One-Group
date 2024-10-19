import { useEffect, useState } from "react"
import { CloseIcon } from "../../../../core/icon"
import { useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { SelectProfileImage } from "../../../../core/services/api/post-data"
import { DeleteProfileImage } from "../../../../core/services/api/delete-data"

const CreateUserImages = ({ info, activeImage }) => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()

    // Select profile
    const { mutate: handleSelect } = useMutation({
        mutationKey: ["SELECT_PROFILE_IMAGE"],
        mutationFn: (id) => { SelectProfileImage(id, dispatch) }
    })

    // Delete profile
    const { mutate: handleDelete } = useMutation({
        mutationKey: ["DELETE_PROFILE_IMAGE"],
        mutationFn: (id) => { DeleteProfileImage(id, dispatch) },
    })

    useEffect(() => {
        if (!activeImage) return
        if (activeImage == info.puctureAddress) { setActive(true) }
        else { setActive(false) }
    }, [activeImage])


    return (
        <div className="relative">
            <div onClick={() => { handleSelect(info.id) }} className="w-28 h-28 rounded-2xl">
                <img className="max-w28 max-h-28 w-28 h-28 rounded-2xl" src={info.puctureAddress} alt="" />
            </div>
            {
                active ?
                    <div onClick={() => { handleDelete(info.id) }} className="closeButton_modal bg-neutral-100 top-0 sm:-top-2 sm:-left-2">
                        <CloseIcon stroke="red" />
                    </div> : null
            }
        </div>
    )
}

export default CreateUserImages
