import ChangePassword from './ChangePassword';
import TwoStep from './TwoStep';
import EmailRecovery from './EmailRecovery';
import TitleSection from '../header-section/TitleSection';
import { SecurityIcon } from '../../../../core/icon'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

const SecurityWrapper = () => {
  const { t } = useTranslation()
  const itemClasses = {
    title: "font-normal text-medium w-fit px-4 mt-1 -mx-4 bg-MainBg",
    trigger: "px-2 flex h-1 items-center border-b border-LightGrayish w-full",
    indicator: "-mx-4 mt-3 bg-MainBg pl-2",
  };
  
  return (
    <div className='w-[90%] border-t border-LightGrayish flex relative justify-center mt-8'>
      <TitleSection Icon={SecurityIcon} name={t("SecuritySettings")} />
      <div className='w-full h-fit mt-20'>
        <Accordion defaultExpandedKeys={["1", "2", "3"]} fullWidth selectionMode="multiple" className='flex flex-wrap gap-y-10' dividerProps={true} showDivider={false} itemClasses={itemClasses}>
          <AccordionItem key="1" title={t("changePassword")} className='w-full' isCompact>
            <ChangePassword />
          </AccordionItem>
          <AccordionItem key="2" title={t("twoStep")} className='w-full' isCompact>
            <TwoStep />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default SecurityWrapper
