import { useEffect, useState } from "react";
import { useQueryWithoutDependencies } from "../../core/hooks/react-query";
import { GetAllTeachers } from "../../core/services/api/get-data";
import ImageFallBack from "./ImageFallBack";
import fallback from "../../assets/images/user-circle-icon.png"
import { Radio, RadioGroup } from "@nextui-org/react";
import { setItem } from "../../core/hooks/local-storage";

const ChooseTeacherToChat = ({ setTeacherId }) => {
    const { data, isSuccess } = useQueryWithoutDependencies("GET_TEACHERS", GetAllTeachers)
    const [selected, setSelected] = useState([])
    const [filter, setFilter] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        if (selected.length == 0) return

        setTeacherId(selected)
        setItem("teacherIdChat", selected)
    }, [selected])

    useEffect(() => {
        if (data) {
            setFilter(data?.filter(item => {
                if (item.fullName == null) {
                    item.fullName = ""
                }
                return item.fullName.indexOf(query) != -1
            }))
        }
    }, [query])

    return (
        <div className="w-[448px] h-[280px] bg-white font-IranSans absolute left-0 bottom-12 p-4 flex flex-wrap gap-y-2">
            <input type="text" onChange={(ev) => { setQuery(ev.target.value) }} className='w-full h-10 bg-neutral-200 rounded-lg px-4 text-sm outline-none' placeholder='جستجو...' />
            <div className='w-full h-[200px] overflow-y-auto flex flex-wrap'>
                <RadioGroup
                    aria-label="radio"
                    value={selected}
                    onValueChange={setSelected}
                    className="w-full"
                >
                    {filter.length > 0 ? filter.map(item => (
                        <Radio
                            value={item.teacherId}
                            classNames={{
                                base: "border-b max-w-full",
                                label: "flex flex-nowrap gap-2 mt-1.5",
                            }}
                            style={{ width: "100%" }}
                        >
                            <ImageFallBack
                                src={item.pictureAddress}
                                fallback={fallback}
                                className='min-w-10 w-10 h-10 rounded-full overflow-hidden'
                            />
                            <div className="flex flex-wrap">
                                <span className="line-clamp-1 w-full">{item.fullName ? item.fullName : "بی نام"}</span>
                                <span className="text-xs text-neutral-500">{item.linkdinProfileLink ? item.linkdinProfileLink : "linkdin.com"}</span>
                            </div>
                        </Radio>
                    )) : <span className="w-full text-center mt-24 text-neutral-400">معلمی وجود ندارد</span>}
                </RadioGroup>
            </div>
        </div>
    )
}

export default ChooseTeacherToChat
