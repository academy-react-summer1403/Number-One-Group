import { useTranslation } from "react-i18next"

const Table = ({ sectionHeader, itemsWidth, children, style }) => {
    const { i18n } = useTranslation()
    
    return (
        <table className={`w-full flex-wrap justify-center ${style}`}>
            <thead>
                <tr dir={i18n.language == "en" ? "ltr" : "rtl"} className="w-full flex  p-1.5 text-center">
                    <th className="min-w-8 ml-2 h-8 rounded-full"></th>
                    {sectionHeader.map((item, index) => (
                        <th
                            key={index}
                            className="font-Sahel text-DarkBlue text-lg"
                            style={{ width: `${itemsWidth && itemsWidth}%` }}
                        >
                            {i18n.language == "en" ? item.text[1] : item.text[0]}
                        </th>
                    ))}
                    <th className="w-12 h-6"></th>
                </tr>
                <tr className="w-full h-1 block rounded-full borderTable_header_userPanel mb-6"></tr>
            </thead>
            <tbody className="itemsTable_userPanel_holder">
                {children}
            </tbody>
        </table>
    )
}

export default Table
