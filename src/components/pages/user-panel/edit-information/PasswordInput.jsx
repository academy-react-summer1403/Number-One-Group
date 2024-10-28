import { Input } from "@nextui-org/react"
import { EyeIcon, UnEyeIcon } from "../../../../core/icon"
import { useState } from "react";

const PasswordInput = ({ form, field, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { name } = field;
    const { setFieldValue } = form;

    const handleChange = (value) => {
        setFieldValue(name, value)
    }

    return (
        <Input
            onChange={(e) => handleChange(e.target.value)}
            endContent={
                <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? (
                        <EyeIcon />
                    ) : (
                        <UnEyeIcon width={'20'} />
                    )}
                </button>
            }
            type={isVisible ? "text" : "password"}
            classNames={{ input: "!text-[#5751E1]" }}
            className="max-w-xs"
            {...props}
        />
    )
}

export default PasswordInput