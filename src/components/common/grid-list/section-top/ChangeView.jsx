import { useLocation, useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import { Tooltip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import ButtonData from "../../../../core/constants/change-view-button";
import toolTipStyle from "../../../../core/constants/tooltip-style"

const ChangeView = ({ setShowGrid }) => {
    const [searchParams, setSearchParams] = useSearchParams({ V: 1 })
    const location = useLocation();
    const { i18n } = useTranslation()

    const handleSearchParams = (id) => { setSearchParams({ V: id }) };

    useEffect(() => {
        if (location.search === '?V=1') setShowGrid(false)
        else setShowGrid(true)

        setSearchParams(searchParams);
    }, [searchParams])

    return (
        <div className="md:flex hidden gap-2">
            {ButtonData.map((Button, index) => (
                <Tooltip key={index} {...toolTipStyle} content={i18n.language == "en" ? Button.tooltip[1] : Button.tooltip[0]}>
                    <div onClick={() => handleSearchParams(Button.id)} className={`${location.search == `?V=${Button.id}` ? "bg-VioletBlue" : "bg-transparent"} cursor-pointer border border-VioletBlue p-2 rounded-md`}>
                        <Button.icon stroke={location.search == `?V=${Button.id}` ? "#fff" : "#5751E1"} />
                    </div>
                </Tooltip>
            ))}
        </div>

    )
}

export default ChangeView