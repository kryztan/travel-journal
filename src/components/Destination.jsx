import DestinationInfo from "./Destination/DestinationInfo";

export default function Destination(props) {
    console.log(props);

    return (
        <div className="dest">
            <div className="dest--cont">
                <div className="dest--img"
                     style={{ backgroundImage: `url(/destinations/${encodeURI(props.destination.image)})` }}></div>
                <DestinationInfo
                    destination={props.destination}
                />
            </div>
            {!props.lastRow ? <hr className="dest-divider" /> : ''}
        </div>
    )
}