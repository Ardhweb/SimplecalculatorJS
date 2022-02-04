function Calculate(){
    let a = document.querySelector("#valueone").value;
    let b = document.querySelector("#valuetwo").value;
    let total =   Number(a) +
    Number(b);

    let findTotal = total;
    document.getElementById("totalis").innerHTML = findTotal;
    
    return findTotal;
    


}


function reSet(result){
    const ans = Calculate();
    document.getElementById('valueone').value = '';
    document.getElementById('valuetwo').value = '';
    
    document.getElementById('totalis').innerHTML = "";
}
