import moment from "moment";
import Moment from "react-moment";
import Clock from "react-live-clock"
import "moment/locale/id"

export default function Clocks() {
  return (
    <>
      <div className="text-black font-bold text-xs">
        {
          <Moment format="dddd, DD MMM " locale="id">
            {moment().format()}
          </Moment>
        }
        <span> <Clock format={"HH:mm"} ticking={true} timezone={"Asia/Jakarta"} /></span>
      </div>
    </>
  );
}
