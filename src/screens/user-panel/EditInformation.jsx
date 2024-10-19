import { CancelIcon, SaveIcon, UserIcon } from "../../core/icon"
import { Button, FormHolder, FormInput } from "../../components/common"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useMutation } from "@tanstack/react-query"
import EditInformationFields from "../../core/constants/user-panel/EditInformationFields"
import { EditProfile } from "../../core/services/api/put-data"
import { TitleSection, AddProfile, ChooseAddress } from "../../components/pages/user-panel"

const EditInformation = () => {
  const { t, i18n } = useTranslation()
  const profile = useSelector(state => state.UserInfo.info)

  const initialValues = {
    fName: profile["fName"],
    lName: profile["lName"],
    birthDay: profile.birthDay,
    phoneNumber: profile["phoneNumber"],
    nationalCode: profile["nationalCode"],
    email: profile["email"],
    homeAdderess: profile["homeAdderess"],
    userAbout: profile["userAbout"],
    gender: profile["gender"],
    telegramLink: profile["telegramLink"],
    linkdinProfile: profile["linkdinProfile"],
  }

  const { mutate } = useMutation({
    mutationKey: ['UPDATE_USER_PROFILE'],
    mutationFn: (event) => { return EditProfile(event) }
  })

  return (
    <div className="w-[90%] border-t border-LightGrayish flex relative">
      <TitleSection Icon={UserIcon} name={t("editInformationTitle")} />
      <FormHolder
        initialValues={initialValues}
        onSubmit={(event) => { mutate(event) }}
        style="w-full h-fit flex justify-center lg:justify-end flex-wrap gap-y-16 lg:gap-y-0 mt-10"
        additionParams={{ enableReinitialize: true }}
      >
        <div className="w-full lg:w-3/5 h-fit flex justify-center sm:justify-between flex-wrap gap-y-3">
          {EditInformationFields.sectionRight.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
        </div>
        <div className="w-full lg:w-2/5 h-fit border-t lg:border-none flex gap-y-3 flex-wrap justify-center pt-6 lg:px-6">
          <AddProfile />
          {EditInformationFields.sectionLeft.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
        </div>
        <div className="w-full h-fit lg:mt-5 border-t border-LightGrayish flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-y-8 py-5">
          <div className="w-full lg:w-3/5 mt-3">
            {EditInformationFields.sectionButton.map(obj => <FormInput key={obj.id} certificate={obj.certificate} dir={obj.dir} fullSize={obj.fullSize} options={obj.options} type={obj.type} sectionName={i18n.language == "en" ? obj.sectionName[1] : obj.sectionName[0]} variants={obj.variant} />)}
          </div>
          <div className="lg:w-2/5 flex justify-center">
            <ChooseAddress />
          </div>
        </div>
        <div className="flex gap-x-4 mt-4 mobile:flex-wrap mobile:justify-center mobile:gap-y-4">
          <Button Icon={SaveIcon} vStyle="yellow" vType="button" text="saveChanges" />
          <Button Icon={CancelIcon} vType="link" text="cancel" style="bg-neutral-200 text-[#161439]" href="/userPanel/information" />
        </div>
      </FormHolder>
    </div>
  )
}

export default EditInformation
