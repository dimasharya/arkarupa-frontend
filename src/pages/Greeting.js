import moment from "moment";
import { useSelector } from "react-redux";
import { selectUser } from "../reducer/AuthSlice";

function Greeting() {
  const date = moment().format("HH")
  let greeting, message;
  const user = useSelector(selectUser);
  if(date > 0 && date < 5){
    greeting = "Tengah Malam"
    message = "Segera Istirahat, semoga tidur nyenyak :)"
  }else if(date > 5 && date < 12){
    greeting = "Pagi"
    message = "Selamat Beraktivitas, Lets rokinn :)"
  }else if(date > 12 && date < 13){
    greeting = "Siang"
    message = "Selamat Beristirahat, Get some coffee break :)"
  }else if(date > 13 && date < 17){
    greeting = "Sore"
    message = "Selamat Beraktivitas, Lets rokinn :)"
  }else if(date > 17 && date < 24){
    greeting = "Malam"
    message = "Selamat Beristirahat, Have a nice sleep :)"
  }
  return (
    <>
      <div className="flex justify-center flex-col px-6 py-10">
        <h2 className="text-lg font-bold">Selamat {greeting}, {user.name}!</h2>
        <p className="text-base font-semibold">{message}</p>
      </div>
    </>
  );
}

export default Greeting;