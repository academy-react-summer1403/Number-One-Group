
import { useTour } from "@reactour/tour"
import { useEffect } from "react";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const HelperButton = () => {
  const location = useLocation()
  const locStatus = location.pathname === '/userPanel' || location.pathname === '/UserPanel';
  const { setIsOpen } = useTour()

  useEffect(() => {
    if(locStatus) setIsOpen(true)
  }, [])

  return (
    <button className={`bottomNav ${locStatus ? "" : "hidden"} `} onClick={() => setIsOpen(true)}> <TbHelpOctagonFilled size={25} /></button>
  )
}

export default HelperButton