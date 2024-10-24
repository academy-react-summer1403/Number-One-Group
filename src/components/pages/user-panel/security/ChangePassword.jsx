import { useTranslation } from 'react-i18next'
import { SaveIcon } from '../../../../core/icon'
import { FormInput, FormHolder, CustomButton } from '../../../common'
import { ChangePasswordWithToken } from '../../../../core/validations/UserPanel.Validations'
import ChangePassWithTokenFields from '../../../../core/constants/user-panel/ChangePasswordFields'
import { useMutation } from '@tanstack/react-query'
import { ChangeUserPassword } from '../../../../core/services/api/post-data'

const ChangePassword = () => {
    const { i18n } = useTranslation()
    const initialValues = { currentPassword: "", password: "", repeatPassword: "" }

    const { mutate } = useMutation({
        mutationKey: ['CHANGE_PASSWORD'],
        mutationFn: (event) => {
            return ChangeUserPassword({ oldPassword: event.currentPassword, newPassword: event.password })
        }
    })

    return (
        <FormHolder
            style="w-full flex flex-wrap justify-evenly my-6"
            initialValues={initialValues}
            onSubmit={(event) => { mutate(event) }}
            validations={ChangePasswordWithToken}
        >
            <div className='w-full flex gap-x-20 gap-y-8 lg:gap-x-10 justify-center flex-wrap lg:flex-nowrap'>
                {ChangePassWithTokenFields.map(item =>
                    <FormInput
                        key={item.id}
                        certificate={item.certificate}
                        sectionName={i18n.language != "en" ? item.sectionName[0] : item.sectionName[1]}
                        dir={item.dir}
                        style="w-[340px] lg:w-[28%]"
                        variants="password"
                        errorStyleComment="!bg-MainBg -mr-2"
                    />
                )}
            </div>
            <div className='w-full flex justify-center mt-16'>
                <CustomButton Icon={SaveIcon} vStyle="yellow" vType="button" text="saveChanges" />
            </div>
        </FormHolder>
    )
}

export default ChangePassword
