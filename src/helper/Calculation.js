
export default  function IcRatio(Carb,insul) {
  var Ic=Carb/insul
  return Ic
}
export default  function Sensitivity(Ic_Ratio,DesiredBG,Insul_InTake,CurrentBG) {
   var sem= ( (Ic_Ratio +( DesiredBG/Insul_InTake))/(CurrentBG))
   return sem
    
}
