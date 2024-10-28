import { Tooltip, useDisclosure } from "@nextui-org/react"
import { IoFilter } from "react-icons/io5"
import CreateModal from "../CreateModal"
import { CloseIcon } from "../../../core/icon"
import tooltipStyle from "../../../core/constants/tooltip-style"
import { useTranslation } from "react-i18next"

const FilterButton = ({children}) => {
  const { t, i18n } = useTranslation();
   // Modal
   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "ّFilters" : "فیلتر ها"}>
        <div onClick={onOpen} className="fixed right-5 bottom-40 bg-VioletBlue dark:bg-LavenderMist bottomNav z-30">
          <IoFilter color="#fff" />
        </div>
      </Tooltip>
      <CreateModal isOpen={isOpen} onClose={onClose} header={t('filters')} size="xl" headerStyle="flex flex-col gap-1 text-white">
        <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-2 left-2">
          <CloseIcon />
        </div>
        {children}
      </CreateModal>
    </>
  )
}

export default FilterButton