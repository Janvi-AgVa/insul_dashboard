
export const getDate = ()=>{
    var WeekDate=[]
    var dt = new Date();
    var  end = dt.toISOString().slice(0, 10);
    dt.setDate(dt.getDate() - 7);
    var start = dt.toISOString().slice(0, 10);
    WeekDate[0]=start
    WeekDate[1]=end
  return WeekDate 
}
export const getprevDate = ()=>{
  var WeekDate=[]
  var dt = new Date();
  dt.setDate(dt.getDate() - 7);
  var  end = dt.toISOString().slice(0, 10);
  
  dt.setDate(dt.getDate() - 7);
  var start = dt.toISOString().slice(0, 10);
  WeekDate[0]=start
  WeekDate[1]=end
return WeekDate 
}
export const getMonthlyDate = ()=>{
  var WeekDate=[]
  var dt = new Date();
  var  end = dt.toISOString().slice(0, 10);
  dt.setDate(dt.getDate() - 30);
  var start = dt.toISOString().slice(0, 10);
  WeekDate[0]=start
  WeekDate[1]=end
return WeekDate 
}
export const getYearlyDate = ()=>{
  var WeekDate=[]
  var dt = new Date();
  var  end = dt.toISOString().slice(0, 10);
  dt.setDate(dt.getDate() - 365);
  var start = dt.toISOString().slice(0, 10);
  WeekDate[0]=start
  WeekDate[1]=end
return WeekDate 
}



