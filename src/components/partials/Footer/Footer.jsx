import DescFooter from "./descFooter"
import LinksWrapper from "./LinksWrapper"

const Footer = () => {
  return (
    <div >
      {/* Top section in the Footer */}
      <div className="bg-PrussianBlue md:py-20 py-10 xl:px-40 lg:px-16 px-8 md:flex justify-between gap-4 cursor-default">
        {/* discription in the Footer */}
        <DescFooter />
        <LinksWrapper />
      </div>
      {/* Bottom section in the Footer */}
      <div className="bg-LawSection py-6 text-center mediumStyle_text">
        © تمامی حقوق این سایت متعلق به تیم نامبر وان می باشد.
      </div>
    </div>
  )
}

export default Footer