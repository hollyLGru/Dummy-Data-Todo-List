    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    
    

    const logTodos = () => {
        console.log(arrayOfTodos);
        console.log(arrayOfTodos[0].title);
        let list = document.getElementById("todo-list")
        let listItemCreation = document.createElement("li")
        // console.log(listItemCreation)
        const textNode = document.createTextNode(arrayOfTodos[i].title)
        // console.log(textNode)
        listItemCreation.appendChild(textNode)
        list.appendChild(listItemCreation)
    }
    
    const populateTodos = () =>  { 
        for (i = 0; i < arrayOfTodos.length; i++) {
        let list = document.getElementById("todo-list")
        let listItemCreation = document.createElement("li")
        // console.log(listItemCreation)
        const textNode = document.createTextNode(arrayOfTodos[i].title)
        // console.log(textNode)
        listItemCreation.appendChild(textNode)
        list.appendChild(listItemCreation)
        }
    }

    // console.log(arrayOfTodos[0].userId) // => 14
    // console.log(arrayOfTodos[1].userId) // => 20