import PropTypes from 'prop-types';


export const GifItem = ({ title, url, }) => {
    return (
        <div className="card animate__animated animate__heartBeat">
            <img src={url} alt={title} />
            <p className="p"><b>{title}</b></p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}