import { useSelector } from "react-redux";

import "./style.scss";

import PropTypes from "prop-types";

import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

Genres.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Genres;