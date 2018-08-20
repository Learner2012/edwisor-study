const bigBang = JSON.parse(data)
// function to get information about episode based on the episode number and season number
let episodeDetails = (episodeNumber, seasonnumber,bigBang) => 
{   let found = false
	for (current  in bigBang._embedded.episodes)  
	{ 
	//used if to check if the user input matches with dataset
	if (bigBang._embedded.episodes[current].number == episodeNumber && bigBang._embedded.episodes[current].season == seasonnumber)
		{   
			console.log(`Episode details for episode number ${episodeNumber} and season number ${seasonnumber}`)
 			found = true
			console.log(JSON.stringify((bigBang._embedded.episodes[current]),null,"\t"))	
			break
		}
	}
	
	if (found == false)
	{
		alert (`No match found for the entered episode number ${episodeNumber} and season number ${seasonnumber}`)
	}
}

//function to display the detals of episode with entered episode Ids

let episodeIdDetails = (bigBang,...episodeId)=> //used arrow function
{ 
	let nonExistingEpisode =[]
	let flag = false

	// for loop to loop through the entered episode IDs  
	for (i of episodeId)
	{
		console.log(`Episode details for episode id ${i}`)
		flag = false
		// for of loop to loop through dataset
		for (current of bigBang._embedded.episodes)
		{
	
			if(current.id == i) // if condition to check if the id in the episode matches with the one entered by user
			{  
				flag = true
				console.log(JSON.stringify((current),null,"\t"))	
				break
			} 
	  
		}
		if(flag == false)   // if condition to execute when id does not matches and pass on to an array to display at the end
   
		{  
			flag=false
			nonExistingEpisode.push(i)
			
		}
	}

	if((nonExistingEpisode.length)>0)      
	{   
	   alert("No such episode exists."+nonExistingEpisode) // to display all the episode ids that does not match
	} 
}

//function to get episode details based on user entered name 
let episodenameDetails = (userName, bigBang) =>
{
	let nameExist = false
	//looping through dataset
   for (current of bigBang._embedded.episodes)  //for of loop
   {
	//Checking if episode name entered by user exists 
	
	if (current.name == userName)
	{
		nameExist = true
		console.log(`Episode details for name ${userName}`)
		console.log(JSON.stringify((current),null,"\t"))	
		break;
	}
	else
	{
		
		nameExist = false
	}
   }
	if (nameExist == false)
	{
		alert(` Episode name entered  ${userName} does not exist`)
	} 
	
}


let episodeNumber =  window.prompt('Enter episode number') 
let seasonnumber  = window.prompt('Enter season number')
//function call to display the details of episode with entered episode number and season number
episodeDetails(episodeNumber,seasonnumber,bigBang)
 
let episodeId1 = window.prompt('Enter episode ids separated by comma').split(",")
//function call to display the detals of episode with entered episode Ids

episodeIdDetails(bigBang,...episodeId1)

let userName = window.prompt ('Enter episode name')
//function call to get episode details based on user entered name 

episodenameDetails (userName, bigBang)