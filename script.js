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
        "title": "delectus aut autem dgsdgsdg",
        "completed": false
    }]
    
    

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (data) => arrayOfTodos = data)
    }
    
    
    

    const logTodos = () => {
        console.log(arrayOfTodos[0].title);
        
    
    }
    
    const populateTodos = () =>  { 
        const olElement = document.getElementById("todo-list")
        let olItem = document.createElement("li")
        let textNode = document.createTextNode(arrayOfTodos[0].title)
        olItem.append(textNode)
        olElement.appendChild(olItem)
        }
    

    // console.log(arrayOfTodos[0].userId) // => 14
    // console.log(arrayOfTodos[1].userId) // => 20