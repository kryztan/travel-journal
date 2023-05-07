import pinIcon from "../../assets/pin-icon.svg"

export default function DestinationInfo(props) {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.toLocaleString('default', {day: '2-digit'});
        const month = date.toLocaleString('default', {month: 'short'});
        const year = date.toLocaleString('default', {year: 'numeric'});

        return `${day} ${month}, ${year}`;
    }

    return (
        <div className="dest--info">
            <div className="dest--location">
                <img className="dest--pin" src={pinIcon} alt="pin" />
                <div className="dest--country">
                    {props.destination.location.country}
                </div>
                <a className="dest--maps-link" href={props.destination.location.maps_link} target="_blank">
                    View on Google Maps
                </a>
            </div>
            <h2 className="dest--name">
                {props.destination.name}
            </h2>
            <div className="dest--dates">
                {formatDate(props.destination.dates.start)} - {formatDate(props.destination.dates.end)}
            </div>
            <p className="dest--description">
                {props.destination.description}
            </p>
        </div>
    )
}