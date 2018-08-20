let toBeInvited =[]

let pushToList = (...people) =>
{alert ('length ' +people.length)

console.log ('list'+people)
	let toBeAdded = people
	console.log ('list new '+toBeAdded)
	toBeInvited = toBeInvited.concat(toBeAdded)
	console.log(toBeInvited)
	return (toBeInvited)
}

pushToList("Anu","Sanya","Appu")

pushToList("Devi","vinu","mini")