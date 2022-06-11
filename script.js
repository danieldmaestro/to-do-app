let action = prompt("What would you like to do?");
let toDo =[];

while (action.toLowerCase() !== 'quit'){
    if (action.toLowerCase() === 'new') {
        let newToDo = prompt("Add to your to-do list:");
        toDo.push(newToDo);
        console.log(`${newToDo} has been added to your list`);
        action = prompt("What else would you like to do?")
    }
    else if (action.toLowerCase() === 'list') {
        console.log('*****************');
        for(let tasks of toDo){
            console.log(`${toDo.indexOf(tasks)}: ${tasks}`);
        }
        console.log('*****************');
        action = prompt("What else would you like to do?")
    }
    else if (action.toLowerCase() === 'delete'){
        let toDelete = parseInt(prompt('Please input index of task you would like to delete:'));
            while (toDo.length <= toDelete){
                let toDelete = prompt('Please input a valid index:')
            }
            let deleted = toDo.splice(toDelete, 1);
            console.log(`${deleted[0]} has been deleted`)
            action = prompt("What else would you like to do?");
        }
    else{
        action = prompt("What would you like to do?");
    }
    }
    
console.log("YOU QUIT THE APP!")