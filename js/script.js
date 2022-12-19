const prezzoKM = 0.21;
var Kmutente;
var prezzoviaggio;
var ageUItenteInp;
var ageUtente;
var prezzoviaggioFinal;
var discountValue;

function distanzaKM(){
  KMutente= prompt("quanti chilometri vuoi viaggiare?")
  
  // has to be a number
  if (isNaN(KMutente )){
    alert('inserisci solo numeri')
    return;
  }
  // cant be blank
  if (KMutente == "") {
    alert('Campo obbligatorio');
    return ;
  }
  // cant press cancel
  if (KMutente == null) {
    alert('Campo obbligatorio');
    return ;
  }

  document.getElementById("km-todo").value = KMutente + " " + "Km";

  prezzoviaggio = prezzoKM * KMutente;

  document.getElementById("price").value = prezzoviaggio.toFixed(2) + " " + "€";
}

function agecheck(){
  ageUtenteInp = prompt('quanti hanni hai?');
  ageUtente = ageUtenteInp;

  // has to be a number
  if (isNaN(ageUtente )){
  alert('inserisci solo numeri')
  return;
  }
  // cant be blank
  if (ageUtente == "") {
    alert('Campo obbligatorio');
    return ;
  }
  // cant press cancel
  if (ageUtente == null) {
    alert('Campo obbligatorio');
    return ;
  }

  document.getElementById("age").value = ageUtente + " " + "anni";

 
}

function discount(){
  if (ageUtente < 18 && ageUtente > 0){
    
    discountValue = (prezzoviaggio / 100) * 20;
    prezzoviaggioFinal = prezzoviaggio - discountValue;

    if (KMutente > 0){
      document.getElementById("price").value = prezzoviaggioFinal.toFixed(2) + " " + "€";
      document.getElementById('my_discount-btn').style.display = "none";
      document.getElementById('underage-discount').style.display = "block";
    }
  }

  if (ageUtente >= 65){
    discountValue = (prezzoviaggio / 100) * 40;
    prezzoviaggioFinal = prezzoviaggio - discountValue;
    
    if (KMutente >0){
      document.getElementById("price").value = prezzoviaggioFinal.toFixed(2) + " " + "€";
      document.getElementById('my_discount-btn').style.display = "none";
      document.getElementById('over65-discount').style.display = "block";
    }
  } 
  
  else {

    if (ageUtente != '' && ageUtente >=18 && ageUtente <65){

      if (KMutente > 0){
        document.getElementById('no-discount').style.display = "block";
        document.getElementById('my_discount-btn').style.display = "none";
      }
      }
     
  }
} 



function reset() {
  document.getElementById("km-todo").value = "";
  document.getElementById("age").value = "";
  document.getElementById("price").value = "";
  document.getElementById('my_discount-btn').style.display = "block";
  ageUtente ='';
  KMutente ='';
  document.getElementById('underage-discount').style.display = "none";
  document.getElementById('over65-discount').style.display = "none";
  document.getElementById('no-discount').style.display = "none";
}
