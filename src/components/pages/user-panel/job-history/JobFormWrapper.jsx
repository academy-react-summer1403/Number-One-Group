import { useMutation } from "@tanstack/react-query";
import JobFormFields from "../../../../core/constants/user-panel/JobFormFields";
import { CancelIcon, SaveIcon, UserIcon } from "../../../../core/icon"
import { CustomButton, FormHolder, FormInput } from "../../../common";
import TitleSection from "../header-section/TitleSection"
import { useTranslation } from "react-i18next";
import { CreateJobHistory, UpdateJobHistory } from "../../../../core/services/api/post-data";
import { useParams } from "react-router-dom";
import { useQueryWithDependencies } from "../../../../core/hooks/react-query";
import { GetJobHistoryDetail } from "../../../../core/services/api/get-data";
import { JobHistoryFormValidation } from "../../../../core/validations/CreateJob.Validation";

const JobFormWrapper = ({ section }) => {
    const { id } = useParams()

    const { data: detail, refetch } = useQueryWithDependencies("GET_JOB_DETAILS", GetJobHistoryDetail, id, id)

    const initialValues = {
        jobTitle: detail?.jobTitle ?? "",
        aboutJob: detail?.aboutJob ?? "",
        companyWebSite: detail?.companyWebSite ?? "",
        companyLinkdin: detail?.companyLinkdin ?? "",
        workStartDate: detail?.workStartDate ?? "",
        workEndDate: detail?.workEndDate ?? "",
        inWork: detail?.inWork ? true : false,
        companyName: detail?.companyName ?? "",
        id: detail?.id ?? "",
        userId: detail?.userId ?? ""
    }

    const { i18n } = useTranslation()

    const { mutate: create } = useMutation({
        mutationKey: ["CREATE_JOB"],
        mutationFn: (data) => {
            CreateJobHistory(data)
        }
    })

    const { mutate: update } = useMutation({
        mutationKey: ["UPDATE_JOB"],
        mutationFn: (data) => {
            UpdateJobHistory(data, refetch)
        }
    })

    return (
        <div className="w-[90%] border-t border-LightGrayish flex relative mt-8">
            <TitleSection Icon={UserIcon} name={section === "create" ? "افزودن شغل" : "ویرایش شغل"} />
            <FormHolder
                initialValues={initialValues}
                onSubmit={(event) => { section === "create" ? create(event) : update(event) }}
                style="w-full h-fit flex justify-center lg:justify-end flex-wrap gap-y-16 lg:gap-y-0 mt-10"
                additionParams={{ enableReinitialize: true }}
                validations={JobHistoryFormValidation}
            >
                <div className="w-full flex flex-wrap gap-10 justify-center">
                    {JobFormFields.map(item => (
                        <FormInput
                            key={item.id}
                            sectionName={i18n.language == "en" ? item.sectionName[1] : item.sectionName[0]}
                            certificate={item.certificate}
                            variants={item.variant}
                            style={item.style}
                        />
                    ))}
                </div>
                <div className="flex gap-x-4 mt-12 w-full justify-center">
                    <CustomButton Icon={SaveIcon} vStyle="yellow" vType="button" text="saveChanges" />
                    <CustomButton Icon={CancelIcon} vType="link" text="cancel" style="bg-neutral-200 text-[#161439]" href="/userPanel/jobs" />
                </div>
            </FormHolder>
        </div>
    )
}

export default JobFormWrapper
