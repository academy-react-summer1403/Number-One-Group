import { useTranslation } from "react-i18next"
import { Button } from "../../components/common";
import { BreadCrumb, TitleSection } from "../../components/partials/title-section";
import { Error404Icon } from "../../core/icon";

const Error404 = () => {
    const { t } = useTranslation();
    return (
        <>
            <TitleSection title={'error'} >
                <BreadCrumb type="Div" text={'error'} />
            </TitleSection>
            <div className="m-auto sm:my-16 my-12 w-fit flex flex-wrap boldStyle_text text-DarkBlue gap-y-4 justify-center cursor-default">
                <Error404Icon className="sm:w-[420px] w-80" />
                <h1 className="w-full text-center">{t('error')}!</h1>
                <h1 className="w-full text-center">{t('ErrorDesc')}</h1>
                <Button arrowColor={"#fff"} vStyle="purple" vType="link" text={'GoHomePage'} />
            </div>
        </>
    )
}

export default Error404