// add solution here
function theBeatlesPlay(arrMus, arrIns){
  var myArr = new Array();
  for(int i =0; i < arrMus; i++){
    var myStr = arrMus[i] + " plays " + arrIns[i];
    myArr.push(myStr);
  }
  return myArr
}
