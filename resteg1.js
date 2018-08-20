let userAddress = []
let storeAddress = (userId,...addAddress)=>
{
	//console.log (addAddress)
	let customerAddress = { userId : userId , newAddress : addAddress}
	
	userAddress.push(customerAddress)
	console.log(userAddress)
	return(userAddress)
}

let firstAddress = {
					"housenumber" : "B7",
					"streetname": "main road",
					"city" : "bangalore",
					"state": "Karnataka"
}

let secondAddress ={
	"housenumber" : "C4",
					"streetname": "main road",
					"city" : "chennai",
					"state": "TN"
}


storeAddress ("rajni", firstAddress,secondAddress)
