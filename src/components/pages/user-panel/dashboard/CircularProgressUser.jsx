import { CircularProgress } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import { EditIcon } from '../../../../core/icon'
import { useTranslation } from 'react-i18next'
import { CustomButton } from '../../../common'

const CircularProgressUser = () => {
    const profileProgress = useSelector(state => state.UserInfo.info.profileCompletionPercentage)
    const { t } = useTranslation()

    return (
        <div className='w-full lg:w-[45%] mx-auto lg:mx-0 order-0 lg:order-none h-[180px] mt-5 rounded-2xl flex items-center p-5 bg-LightLavender/50'>
            <CircularProgress
                classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: profileProgress != 100 ? "text-SunshineYellow" : "text-green-300",
                    track: "stroke-black/5 border-2 bg-red-500",
                    value: "text-3xl text-black text-VioletBlue",
                }}
                value={profileProgress}
                strokeWidth={3}
                showValueLabel={true}
            />
            <div className='flex flex-wrap items-center justify-center gap-y-3'>
                {
                    profileProgress != 100 ? (
                        <>
                            <p className='w-full text-center mediumStyle_text'>{t("progressTipFalse")}</p>
                            <CustomButton Icon={EditIcon} href="/userPanel/editInformation" text={"completion"} vStyle="yellow" vType={"link"} />
                        </>

                    ) : (
                        <>
                            <p className='w-full text-center mediumStyle_text'>{t("progressTipTrue")}</p>
                            <CustomButton Icon={EditIcon} href="/userPanel/editInformation" text={"edit"} vStyle="yellow" vType={"link"} />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default CircularProgressUser
