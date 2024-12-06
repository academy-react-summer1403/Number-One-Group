import { useTranslation } from 'react-i18next';
import { useQueryWithoutDependencies } from '../../../../core/hooks/react-query';
import { GetSecurityInfo } from '../../../../core/services/api/get-data';
import { useMutation } from '@tanstack/react-query';
import { EditSecurity } from '../../../../core/services/api/put-data';
import { useEffect, useState } from 'react';
import { CustomButton, FormHolder, FormInput } from '../../../common';
import { SaveIcon } from '../../../../core/icon';

const TwoStep = () => {
    const { t } = useTranslation()
    const { data, isSuccess } = useQueryWithoutDependencies("GET_SECURITY_INFORMATION", GetSecurityInfo)

    const { mutate } = useMutation({
        mutationKey: ["UPDATE_SECURITY_INFORMATION"],
        mutationFn: (event) => {
            const obj = {
                twoStepAuth: event.twoStepAuth,
                recoveryEmail: event.recoveryEmail,
                baseUrl: "http://localhost:5173/userPanel/security",
            }
            EditSecurity(obj)
        }
    })

    return (
        <div className="w-full flex flex-wrap my-6">
            <FormHolder
                style="w-full flex flex-wrap justify-center my-6 gap-y-5"
                initialValues={isSuccess && {
                    twoStepAuth: data.twoStepAuth,
                    recoveryEmail: data.recoveryEmail,
                    baseUrl: data.baseUrl,
                }}
                onSubmit={(event) => { mutate(event) }}
            >
                <FormInput variants={"checkbox"} style={"w-full flex justify-center"} certificate="twoStepAuth" placeholder={"فعال کردن تایید دو مرحله ای"} />
                <FormInput type="email" certificate="recoveryEmail" sectionName={t("newEmail")} dir="ltr" style="w-[300px]" variants="simple" />
                <div className='w-full flex justify-center'>
                    <CustomButton Icon={SaveIcon} vStyle="yellow" vType="button" text="saveChanges" />
                </div>
            </FormHolder>
        </div>
    )
}

export default TwoStep
