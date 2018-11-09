var total = 0;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;
var total5 = 0;

var d = new Date();

function addGuestOne(){
  var checkingIn = document.getElementById('checkingIn').value;
  document.getElementById('checkingIn').value = " ";
  var newList = document.createElement('li');
  var newText = document.createTextNode(checkingIn);
  newList.appendChild(newText);
  var position = document.getElementsByClassName('landon')[0];
  position.appendChild(newList);
  document.getElementById('time').innerHTML = d;
  
  if(total < 4) {
    document.getElementById('showTotal').innerHTML = " ";
    total ++;
    }
          
  else if ((total > 4) && (total < 6)) {
    document.getElementById('showTotal').innerHTML = "The room is at full capacity.";
    }
    
  else {
    document.getElementById('showTotal').innerHTML = "There is no more space in this room.";
    document.getElementById('addOne').style.visibility = "hidden";
    
  }
}

function checkoutGuest() {
    var getN = document.getElementById('checkingOut').value;
    var getLi = document.getElementsByTagName('li')[getN - 1];
    var parent = getLi.parentNode;
    parent.removeChild(getLi);
    total--;
    document.getElementById('addOne').style.visibility = "visible";
  }
  
function houseKeeping(){
  document.getElementById('showTotal').innerHTML = "CLOSED FOR HOUSE KEEPING";
  document.getElementById('addOne').style.visibility = "hidden";
  document.getElementById('minusOne').style.visibility = "hidden";
}

function done(){
  document.getElementById('showTotal').innerHTML = " ";
  document.getElementById('addOne').style.visibility = "visible";
  document.getElementById('minusOne').style.visibility = "visible";
}

function everyone() {
  var detained = document.getElementsByTagName('ol')[0];
  var container = detained.parentNode;
  container.removeChild(detained);
}

//////////////////////////////////////////////////////////////////////////////////////////////

function addGuestTwo(){
  var checkingIn = document.getElementById('checkingIn1').value;
  document.getElementById('checkingIn1').value = " ";
  var newList = document.createElement('li');
  var newText = document.createTextNode(checkingIn);
  newList.appendChild(newText);
  var position = document.getElementsByClassName('tiger')[0];
  position.appendChild(newList);
  document.getElementById('time1').innerHTML = d;
  
  if(total1 < 4) {
    document.getElementById('showTotal1').innerHTML = " ";
    total1 ++;
    }
          
  else if ((total1 > 4) && (total1 < 6)) {
    document.getElementById('showTotal1').innerHTML = "The room is at full capacity.";
    }
    
  else {
    document.getElementById('showTotal1').innerHTML = "There is no more space in this room.";
    document.getElementById('addTwo').style.visibility = "hidden";
    
  }
}

function checkingoutGuest1() {
    var getG = document.getElementById('checkingOut1').value;
    var getLi = document.getElementsByTagName('li')[getG - 1];
    var parent = getLi.parentNode;
    parent.removeChild(getLi);
    total1--;
    document.getElementById('addTwo').style.visibility = "visible";
  }

function houseKeeping1(){
  document.getElementById('showTotal1').innerHTML = "CLOSED FOR HOUSE KEEPING";
  document.getElementById('addTwo').style.visibility = "hidden";
  document.getElementById('minusTwo').style.visibility = "hidden";
}

function done1(){
  document.getElementById('showTotal1').innerHTML = " ";
  document.getElementById('addTwo').style.visibility = "visible";
  document.getElementById('minusTwo').style.visibility = "visible";
}

function everyone1() {
  var detained = document.getElementsByTagName('ol')[1];
  var container = detained.parentNode;
  container.removeChild(detained);
}

///////////////////////////////////////////////////////////////////////////////////////

function addGuestThree(){
  var checkingIn = document.getElementById('checkingIn2').value;
  document.getElementById('checkingIn2').value = " ";
  var newList = document.createElement('li');
  var newText = document.createTextNode(checkingIn);
  newList.appendChild(newText);
  var position = document.getElementsByClassName('joseph')[0];
  position.appendChild(newList);
  document.getElementById('time2').innerHTML = d;
  
  if(total2 < 4) {
    document.getElementById('showTotal2').innerHTML = " ";
    total2 ++;
    }
          
  else if ((total2 > 4) && (total2 < 6)) {
    document.getElementById('showTotal2').innerHTML = "The room is at full capacity.";
    }
    
  else {
    document.getElementById('showTotal2').innerHTML = "There is no more space in this room.";
    document.getElementById('addThree').style.visibility = "hidden";
    
  }
}

function checkingoutGuest2() {
    var getG = document.getElementById('checkingOut2').value;
    var getLi = document.getElementsByTagName('li')[getG - 1];
    var parent = getLi.parentNode;
    parent.removeChild(getLi);
    total2--;
    document.getElementById('addThree').style.visibility = "visible";
  }

function houseKeeping2(){
  document.getElementById('showTotal2').innerHTML = "CLOSED FOR HOUSE KEEPING";
  document.getElementById('addThree').style.visibility = "hidden";
  document.getElementById('minusThree').style.visibility = "hidden";
}

function done2(){
  document.getElementById('showTotal2').innerHTML = " ";
  document.getElementById('addThree').style.visibility = "visible";
  document.getElementById('minusThree').style.visibility = "visible";
}

function everyone2() {
  var detained = document.getElementsByTagName('ol')[2];
  var container = detained.parentNode;
  container.removeChild(detained);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function addGuestFour(){
  var checkingIn = document.getElementById('checkingIn3').value;
  document.getElementById('checkingIn3').value = " ";
  var newList = document.createElement('li');
  var newText = document.createTextNode(checkingIn);
  newList.appendChild(newText);
  var position = document.getElementsByClassName('landonM')[0];
  position.appendChild(newList);
  document.getElementById('time3').innerHTML = d;
  
  if(total3 < 4) {
    document.getElementById('showTotal3').innerHTML = " ";
    total3 ++;
    }
          
  else if ((total3 > 4) && (total3 < 6)) {
    document.getElementById('showTotal3').innerHTML = "The room is at full capacity.";
    }
    
  else {
    document.getElementById('showTotal3').innerHTML = "There is no more space in this room.";
    document.getElementById('addFour').style.visibility = "hidden";
    
  }
}

function checkingoutGuest3() {
    var getG = document.getElementById('checkingOut3').value;
    var getLi = document.getElementsByTagName('li')[getG - 1];
    var parent = getLi.parentNode;
    parent.removeChild(getLi);
    total3--;
    document.getElementById('addFour').style.visibility = "visible";
  }
  
function houseKeeping3(){
  document.getElementById('showTotal3').innerHTML = "CLOSED FOR HOUSE KEEPING";
  document.getElementById('addFour').style.visibility = "hidden";
  document.getElementById('minusFour').style.visibility = "hidden";
}

function done3(){
  document.getElementById('showTotal3').innerHTML = " ";
  document.getElementById('addFour').style.visibility = "visible";
  document.getElementById('minusFour').style.visibility = "visible";
}

function everyone3() {
  var detained = document.getElementsByTagName('ol')[3];
  var container = detained.parentNode;
  container.removeChild(detained);
}

///////////////////////////////////////////////////////////////////////////////

function addGuestFive(){
  var checkingIn = document.getElementById('checkingIn4').value;
  document.getElementById('checkingIn4').value = " ";
  var newList = document.createElement('li');
  var newText = document.createTextNode(checkingIn);
  newList.appendChild(newText);
  var position = document.getElementsByClassName('tigerS')[0];
  position.appendChild(newList);
  document.getElementById('time4').innerHTML = d;
  
  if(total4 < 4) {
    document.getElementById('showTotal4').innerHTML = " ";
    total4 ++;
    }
          
  else if ((total4 > 4) && (total4 < 6)) {
    document.getElementById('showTotal4').innerHTML = "The room is at full capacity.";
    }
    
  else {
    document.getElementById('showTotal4').innerHTML = "There is no more space in this room.";
    document.getElementById('addFive').style.visibility = "hidden";
    
  }
}

function checkingoutGuest4() {
    var getG = document.getElementById('checkingOut4').value;
    var getLi = document.getElementsByTagName('li')[getG - 1];
    var parent = getLi.parentNode;
    parent.removeChild(getLi);
    total4--;
    document.getElementById('addFive').style.visibility = "visible";
  }
  
function houseKeeping4(){
  document.getElementById('showTotal4').innerHTML = "CLOSED FOR HOUSE KEEPING";
  document.getElementById('addFive').style.visibility = "hidden";
  document.getElementById('minusFive').style.visibility = "hidden";
}

function done4(){
  document.getElementById('showTotal4').innerHTML = " ";
  document.getElementById('addFive').style.visibility = "visible";
  document.getElementById('minusFive').style.visibility = "visible";
}

function everyone4() {
  var detained = document.getElementsByTagName('ol')[4];
  var container = detained.parentNode;
  container.removeChild(detained);
}

////////////////////////////////////////////////////////////////////////////////////////////

function addGuestSix(){
  var checkingIn = document.getElementById('checkingIn5').value;
  document.getElementById('checkingIn5').value = " ";
  var newList = document.createElement('li');
  var newText = document.createTextNode(checkingIn);
  newList.appendChild(newText);
  var position = document.getElementsByClassName('josephA')[0];
  position.appendChild(newList);
  document.getElementById('time5').innerHTML = d;
  
  if(total5 < 4) {
    document.getElementById('showTotal5').innerHTML = " ";
    total5 ++;
    }
          
  else if ((total5 > 4) && (total5 < 6)) {
    document.getElementById('showTotal5').innerHTML = "The room is at full capacity.";
    }
    
  else {
    document.getElementById('showTotal5').innerHTML = "There is no more space in this room.";
    document.getElementById('addSix').style.visibility = "hidden";
    
  }
}

function checkingoutGuest5() {
    var getG = document.getElementById('checkingOut5').value;
    var getLi = document.getElementsByTagName('li')[getG - 1];
    var parent = getLi.parentNode;
    parent.removeChild(getLi);
    total5--;
    document.getElementById('addFive').style.visibility = "visible";
  }
  
function houseKeeping5(){
  document.getElementById('showTotal5').innerHTML = "CLOSED FOR HOUSE KEEPING";
  document.getElementById('addSix').style.visibility = "hidden";
  document.getElementById('minusSix').style.visibility = "hidden";
}

function done5(){
  document.getElementById('showTotal5').innerHTML = " ";
  document.getElementById('addSix').style.visibility = "visible";
  document.getElementById('minusSix').style.visibility = "visible";
}

function everyone5() {
  var detained = document.getElementsByTagName('ol')[5];
  var container = detained.parentNode;
  container.removeChild(detained);
}