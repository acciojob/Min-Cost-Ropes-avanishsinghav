function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.length <= 1){
		return 0;
	}

	const temp = [...arr].sort((a,b)=> a-b);
	let totalcost = 0

	while(temp.length > 1){
		const first = temp.shift();
		const second = temp.shift();
		const cost = first+second;
		totalcost += cost;

		let num = false;
		for(let i = 0; i<temp.length; i++){
			if(cost < temp[i]){
				temp.splice(i,0,cost);
				num = true;
				break;
			}
		}
		if(!num)temp.push(cost);
	}
	return totalcost;
}

module.exports=mincost;
