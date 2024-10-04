import DescFooter from "./DescFooter"
import LinksWrapper from "./LinksWrapper"

const Footer = () => {
    return (
        <div >
            <div className="bg-PrussianBlue md:py-20 py-10 xl:px-40 lg:px-16 px-8 md:flex justify-between gap-4 cursor-default">
                <DescFooter />
                <LinksWrapper />
            </div>
            <div className="bg-LawSection py-6 text-center mediumStyle_text">
                © تمامی حقوق این سایت متعلق به تیم نامبر وان می باشد.
            </div>
        </div>
    )
}

export default Footer
