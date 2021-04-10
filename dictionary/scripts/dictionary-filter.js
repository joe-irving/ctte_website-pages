function search() {
  var input, filter, table, tr, td, i, txtValue, altNames, ahh;
  ahh = document.getElementById("ahh");
  input = document.getElementById("term");
  filter = input.value.toUpperCase();
  table = document.getElementById("Dictionary");
  tr = table.getElementsByTagName("tr");
  console.log(filter);
  if ("BOO".indexOf(filter) > -1){
    ahh.style.display = "";
  }else{
    ahh.style.display = "none";
  }
  for (i = 0; i < tr.length; i++){
    td = tr[i].getElementsByTagName("td")[0];
    altNames = tr[i].getElementsByTagName("td")[2];
    searchTerms = tr[i].getElementsByTagName("td")[6];
    txtValue = ""
    if (td || altNames || searchTerms) {
      if (td){
        txtValue = (td.textContent || td.innerText).toString();
      }else{txtValue="%%%%%%%%";}
      if (altNames){
        txtValue = txtValue+(altNames.textContent || altNames.innerText).toString();
      }else{txtValue="%%%%%%%%";}
      if (searchTerms){
        txtValue = txtValue+(searchTerms.textContent || searchTerms.innerText).toString();
      }else{txtValue="%%%%%%%%";}
      console.log(txtValue)
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }else {
        tr[i].style.display = "none";
      }
    }
  }
 }
function boxClicked(){
  var busCheck, socialCheck, wcfCheck, table,tr, i, bus, social, wcf;
  busCheck = document.getElementById("checkctte");
  socialCheck = document.getElementById("checksocial");
  wcfCheck = document.getElementById("checkwcf");
  table = document.getElementById("Dictionary");
  labelCtte = document.getElementById("labelctte");
  labelSocial = document.getElementById("labelsocial");
  labelWcf = document.getElementById("labelwcf");
  tr = table.getElementsByTagName("tr");
  if (busCheck.checked){
    //labelCtte.style.backgroundColor = "teal";
    busCheck = true;
  }else{
    //labelCtte.class = "delselected";
    busCheck = false;
  }
  if (socialCheck.checked){
    //labelSocial.style.backgroundColor = "teal";
    socialCheck = true;
  }else{
    //labelSocial.style.backgroundColor = "white";
    socialCheck = false;
  }
  if (wcfCheck.checked){
    //labelWcf.style.backgroundColor="teal";
    wcfCheck = true;
  }else{
    //labelWcf.style.backgroundColor="white";
    wcfCheck = false;
  }
  for (i = 1; i<tr.length;i++){
    bus = tr[i].getElementsByTagName("td")[3];
    social = tr[i].getElementsByTagName("td")[4];
    wcf = tr[i].getElementsByTagName("td")[5];
    if (busCheck && bus.textContent.toString()=="true"){
      tr[i].style.display = "";
    }else if (socialCheck && social.textContent.toString()=="true"){
      tr[i].style.display = "";
    }else if (wcfCheck && wcf.textContent.toString()=="true"){
      tr[i].style.display = "";
    }else{
      tr[i].style.display = "none";
    }
  }
}
