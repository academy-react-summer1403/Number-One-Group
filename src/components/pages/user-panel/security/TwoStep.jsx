import { useTranslation } from 'react-i18next';
import { useQueryWithoutDependencies } from '../../../../core/hooks/react-query';
import { GetSecurityInfo } from '../../../../core/services/api/get-data';
import { useMutation } from '@tanstack/react-query';
import { EditSecurity } from '../../../../core/services/api/put-data';
import { useEffect, useState } from 'react';

const TwoStep = () => {
    const { t } = useTranslation()
    const { data, isSuccess } = useQueryWithoutDependencies("GET_SECURITY_INFORMATION", GetSecurityInfo)
    const [flag, setFlag] = useState(false)

    const { mutate } = useMutation({
        mutationKey: ["UPDATE_SECURITY_INFORMATION"],
        mutationFn: (event) => {
            const obj = {
                twoStepAuth: event,
                recoveryEmail: "preator102@gmail.com",
                baseUrl: "http://localhost:5173/userPanel/security",
            }
            EditSecurity(obj)
        }
    })

    useEffect(() => {
        setFlag(data?.twoStepAuth)
    }, [data?.twoStepAuth])

    return (
        <div className="w-full flex justify-evenly my-6">
            <label className="flex gap-x-2 cursor-pointer">
                <input
                    checked={flag ? true : false}
                    id="twoStep"
                    name="twoStep"
                    type="checkbox"
                    className="w-fit flex gap-x-2 items-center cursor-pointer"
                    onChange={() => { mutate(!flag); setFlag(!flag) }}
                />
                {t("twoStepBtn")}
            </label>
        </div>
    )
}

export default TwoStep
