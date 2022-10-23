const date = new Date()
let currentHour = date.getHours()
console.log(currentHour)
let currentDay = date.getDay()
console.log(currentDay)

const logger =(req,res,next)=>{
    if ((currentHour>=9 && currentHour<=17)&&(currentDay>=1 && currentDay<=5)) {
        next()
    } else {
         res.send('<h2> Currently out of service ...<h2/>')
    }
}

module.exports={currentDay,currentHour,logger}