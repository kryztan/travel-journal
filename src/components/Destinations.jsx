import Destination from "./Destination";
import destinationsData from "../destinations-data.js";

export default function Destinations() {
    const destinations = destinationsData.map((destination, i, {length}) => {
        return <Destination
            key={destination.id}
            destination={destination}
            lastRow={i + 1 === length}
        />
    });

    return (
        <div className="destinations">
            {destinations}
        </div>
    )
}