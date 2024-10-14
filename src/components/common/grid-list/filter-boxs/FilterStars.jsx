import ReactStars from "react-rating-stars-component";
import { useTranslation } from "react-i18next";

const FilterStars = ({
    title,
    SetRating
}) => {
    const { t } = useTranslation();

    const ratingChanged = (newRating) => {
        // SetRating(newRating);
        console.log(newRating)
    };
    return (
        <div className="filter-box">
            <h1 className="font-semibold pb-2">{t(title)}</h1>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                color={"#ccc"}
            />
        </div>
    )
}

export default FilterStars