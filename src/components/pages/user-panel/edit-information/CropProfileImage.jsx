import { useState, useRef, useEffect } from "react";
import { CreateModal } from "../../../common"
import { useDisclosure } from "@nextui-org/react"
import { CloseIcon } from "../../../../core/icon";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop, } from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'
import setCanvasPreview from "../../../../core/utility/canvas-crop-image"

const CropProfileImage = ({ src, handleCrop, open, setOpen }) => {
    // Modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    // Crop
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [crop, setCrop] = useState()

    // When image is load
    const onImageLoad = (event) => {
        const { width, height } = event.currentTarget;
        const cropWidthInPercent = (150 / width) * 100;

        const crop = makeAspectCrop(
            { unit: "%", width: cropWidthInPercent, },
            1,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    };

    useEffect(() => { if (open) onOpen() }, [open])

    return (
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
            <div className="flex flex-col items-center">
                <ReactCrop
                    crop={crop}
                    onChange={percentCrop => setCrop(percentCrop)}
                    circularCrop
                    keepSelection
                    aspect={1}
                    minWidth={150}
                >
                    <img ref={imgRef} src={src} alt="Upload" style={{ maxHeight: "50vh" }} onLoad={onImageLoad} />
                </ReactCrop>
                <button
                    className="py-2 font-IranSans px-10 rounded-full bg-SunshineYellow mt-4 buttonYellow_shadow duration-150"
                    onClick={() => {
                        setCanvasPreview(
                            imgRef.current,
                            previewCanvasRef.current,
                            convertToPixelCrop(
                                crop,
                                imgRef.current.width,
                                imgRef.current.height
                            )
                        );
                        handleCrop(previewCanvasRef.current.toDataURL());
                        onClose()
                        setOpen(false)
                    }}
                >
                    برش
                </button>
            </div>
            {crop && (
                <canvas
                    ref={previewCanvasRef}
                    className="mt-4"
                    style={{
                        display: "none",
                        border: "1px solid black",
                        objectFit: "contain",
                        width: 150,
                        height: 150,
                    }}
                />
            )}
        </CreateModal>
    )
}

export default CropProfileImage
