import { useTranslation } from "react-i18next"

const CreateInformationItem = ({ fieldTitle, descriptionTitle }) => {
  const { i18n } = useTranslation()

  return (
    <li className='w-full flex flex-wrap md:justify-start justify-center'>
      <span className='text-DarkBlue text-nowrap'>{i18n.language == "en" ? fieldTitle[1] : fieldTitle[0]}</span>
      <span className='mx-2 text-VioletBlue text-center'>{descriptionTitle ? descriptionTitle : "--"}</span>
    </li>
  )
}

export default CreateInformationItem
