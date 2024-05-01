const btnEl = document.getElementById("btn");
const resvstatus = document.getElementById("resv_status");

function setReservation() {
	const firstname = document.getElementById("firstname").value;
	const lastname = document.getElementById("lastname").value;
	const phone = document.getElementById("phonenumber").value;
	const day = document.getElementById("day").value;
	const month = document.getElementById("month").value;
	const partysize = document.getElementById("partysize").value;
	
	const resvinfo = "Reservation for " + partysize + " set on " + month + " " + day + ".";

	resvstatus.innerText = resvinfo;
}

btnEl.addEventListener("click", setReservation);
