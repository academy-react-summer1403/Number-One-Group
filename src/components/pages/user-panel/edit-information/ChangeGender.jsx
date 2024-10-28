import { Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const ChangeGender = ({ form, }) => {
  const { t, i18n } = useTranslation()
  const { setFieldValue } = form;
  const options = [
    [
      { id: 1, key: 1, label: "مرد", value: true },
      { id: 2, key: 2, label: "زن", value: false },
    ],
    [
      { id: 1, key: 1, label: "Man", value: true },
      { id: 2, key: 2, label: "Woman", value: false },
    ],
  ]

  const handleChangeGender = (selected) => {
    let findKey = options[0].find(obj => obj.id == selected)
    setFieldValue("gender", findKey.value)
    console.log(findKey.value)
  }

  return (
    <Select
      radius='md'
      aria-label="select"
      items={i18n.language == "en" ? options[1] : options[0]}
      className="mx-auto w-full min-h-10 max-h-40"
      label={t("gender")}
      onChange={(e) => { handleChangeGender(e.target.value) }}
      classNames={{
        listboxWrapper: `font-IranSans ${i18n.language != "en" && "select_dir"}`,
        value: "!text-[#5751E1]"
      }}
    >
      {(selectedOption) => <SelectItem>{selectedOption.label}</SelectItem>}
    </Select>
  )
}

export default ChangeGender
