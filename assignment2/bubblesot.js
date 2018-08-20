

//function bubble_sort(a)
let bubble_sort = (...a) => //used rest parameter and arrow function
{
	let swapp;			//let keyword
	let n= a.length-1
	let x = a 
	
	do {
		swapp =false
		
		//for (let i=0; i<n ;i++)
			for(j in x)
		{
			  let i= Number(j)
			
			if(x[i] < x[i+1])
			{
				let temp = x[i]
				x[i] =x[i+1]
				x[i+1]= temp
				swapp = true
			}
		}	
		}while (swapp)
		return x
}

let numbers = [22,4,854,17,345]

console.log(bubble_sort(...numbers))