export function getDate(timetamp,time){
  //let myDate = new Date()如果是要获取当前时间的显示就不传参数
  let myDate = new Date(timetamp*1000);  //获取js时间
  let year = myDate.getFullYear(); //获取年
  let month = myDate.getMonth() + 1;//获取月
  let date = myDate.getDate();//获取日
  let  h = myDate.getHours(); //获取小时数(0-23)
  let m = myDate.getMinutes(); //获取分钟数(0-59)
  let s = myDate.getSeconds();
  //获取当前时间连接成的字符串
  let now =  now = year + '-' + conver(month) + "-" + conver(date) + " " + conver(h) + ':' + conver(m) + ":" + conver(s);
  if(!time) {
     now = year + '-' + conver(month) + "-" + conver(date)
  }
  return now
}

//日期时间处理
function conver(s) {
return s < 10 ? '0' + s : s;
}