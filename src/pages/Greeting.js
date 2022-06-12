import { useSelector } from "react-redux";
import { selectUser } from "../reducer/AuthSlice";

function Greeting() {
  const date = new Date()
  let greeting, message;
  const user = useSelector(selectUser);
  if(date.getHours() >= 0 && date.getHours() <= 5){
    greeting = "Tengah Malam"
    message = "Segera istirahat, semoga tidur nyenyak :)"
  }else if(date.getHours() >= 5 && date.getHours() <= 12){
    greeting = "Pagi"
    message = "Selamat Beraktifitas, Lets rokinn :)"
  }else if(date.getHours() >= 12 && date.getHours() <= 13){
    greeting = "Siang"
    message = "Selamat Beristirahat, Get some coffee break :)"
  }else if(date.getHours() >= 13 && date.getHours() <= 17){
    greeting = "Sore"
    message = "Selamat Beraktifitas, Lets rokinn :)"
  }else if(date.getHours() >= 17 && date.getHours() <= 24){
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