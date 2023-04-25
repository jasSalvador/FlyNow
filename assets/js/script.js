
function getInfo () {
	let from = document.getElementById("from").value;
	let fromDate = document.getElementById("fromDate").value;
	let to = document.getElementById("to").value;
	let toDate = document.getElementById("toDate").value;

    document.getElementById("originDate").innerText = fromDate;
    document.getElementById("destDate").innerText = toDate;
    document.getElementById("origin").innerText = from;
    document.getElementById("dest").innerText = to;

    if((from == 'Chicago' && to == 'Venice') || (from == 'Boston' && to == 'Paris')){
        document.getElementById("trans").innerText = "Ojo! Tu vuelo tiene escala"

    }else{
        document.getElementById("trans").innerText = "OJO! Tu vuelo no tiene escala";
    }
}
