function setAlarm(employed, vacation){
if(employed && !vacation) {
return true
}else{
  return false
}
}

console.log(setAlarm(true, true));