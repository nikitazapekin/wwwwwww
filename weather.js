let data1=document.querySelector('.data1')

/*let date=new Date();
let week = ["Monday", "Thuesday", "Wednesday", "Thuethday", "Friday", "Sunday", "Saturday"]
let day=date.getDay()
 let month= date.getMonth()
 let dd=toString(date)
//dd=dd.slice(0,9)
 console.log(dd)
data1.innerHTML=" Today is "+week[day-1];
// Return today's date and time */
var currentTime = new Date()

// returns the month (from 0 to 11)
var month = currentTime.getMonth() + 1

// returns the day of the month (from 1 to 31)
var day = currentTime.getDate()

// returns the year (four digits)
var year = currentTime.getFullYear()
data1.innerHTML= day +"."+ month+"."+ year
// write output MM/dd/yyyy


let tempp=document.querySelector(".temp")
let pressure=document.querySelector(".pressure")
let humidity=document.querySelector(".humidity")
let wind=document.querySelector(".wind")
//let description1=document.querySelector(".description")
async function  fetchAsyncTodos() {


    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=625143&appid=fc64e04f2a354206a57c0d4cf2ca7ea0');


    const data = await response.json()
    tempp.innerHTML=(data.main.temp-273).toFixed(1) +"°";
    pressure.textContent=data.main.pressure +"mm";
    humidity.textContent=data.main.humidity +"mm";
    wind.textContent=data.wind.speed +"m/s";
    //   description1.textContent=data.weather.main ;
    console.log(data)
    console.log(data.main.temp)

}
fetchAsyncTodos()