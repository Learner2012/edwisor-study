var user= [{email : 'ishwar@xx.com',
			password : 'qqq',
			name  :'ishwar'},
			{
			email : 'rahul@xx.com',
			password : 'qqq',
			name  :'rahul'},
			
			{email : 'manu@xx.com',
			password : 'qqq',
			name  :'manu'}]
			

let checkLogin = (mailid,password,allUsers) => //arrow function used 
{
let isUserFound = false;
let passwordCorrect = true
for (currentUser of allUsers)  //for of loop
{
console.log(currentUser.email)
//if (allUsers[currentUser]['email']== mailid)
if (currentUser.email == mailid)
{
	if(currentUser.password == password)
	{
		isUserFound = true
		passwordCorrect = true
		break
	}else{
		isUserFound = true 
		passwordCorrect = false
		break
	}
}else{
        isUserFound = false	
}
}//end of for loop

if (isUserFound == true && passwordCorrect == true)
{
	alert(`You are looged in`)
}
else if (isUserFound == true && passwordCorrect == false)
{
	alert ('You have provided incorrect password')
}
else 
{
	
	alert(`No user with email ${mailid} found`)   //template literal 
}
}


var email = window.prompt ('Email')
var password = window.prompt('pwd')

checkLogin (email,password,user)