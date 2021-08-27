

	 
let tuitt= ["Charles", "Paul", "Sef", "Alex"];

function addName(fname){
    if (tuitt.indexOf(tuitt)==-1) {
        tuitt.push(fname)
        console.log( fname +' successfully added')
    } else{ 
      console.log('name already exist')
    }
}
