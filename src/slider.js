
const timer = (active, items)=>{
    return setInterval(()=>{
      if(active.value == (items.value.length - 1)){
        active.value = 0;
      }else{
        active.value++;
      }
    }, 7000)  
}

const checkActive = (index, active)=>{
  if(index == active.value) {
    return true;
  }

  return false;
}

const updateTimer = (timerVar, active, items)=>{
  clearInterval(timerVar);
  
  return timer(active, items)
};

const setActive = (index, active, timerVar, items)=>{
  clearInterval(timerVar);
  if(active.value != index){
    active.value = index;
  }
  return timer(active, items);
}



export {setActive, updateTimer, checkActive, timer};
