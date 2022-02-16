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
        .then( (data) => arrayOfTodos = data)
    }

    const logTodos = () => {
        console.log(arrayOfTodos[0].title);
    }
    
    const populateTodos = () =>  { 
        const olElement = document.getElementById("todo-list")
        
        for (let i = 0; i < arrayOfTodos.length -1; i++) {
            
            let olItem = document.createElement("li")
            let textNode = document.createTextNode(arrayOfTodos[i].title)
            olItem.append(textNode)
            olElement.appendChild(olItem)
          }
        }

        const clearAllTodos = () => {
            document.getElementById("todo-list").innerHTML = "";
        }

        const filteredArray = [];

        

        const filterById = (id) => {
            clearAllTodos(); 
            console.log(id);
            const olElement = document.getElementById("todo-list")
            const filteredToDos = arrayOfTodos.filter((toDo) => toDo.userId == id);
            for (let i = 0; i < filteredToDos.length -1; i++) { 
                let olItem = document.createElement("li")
                let textNode = document.createTextNode(filteredToDos[i].title)
                olItem.append(textNode)
                olElement.appendChild(olItem)
                filteredArray.push(filteredToDos[i])
          }
        }

        const completeTodos = () => {
            clearAllTodos(); 
            const filtercompleted = filteredArray.filter((toDo) => toDo.completed == true)
            console.log(filtercompleted)
            const olElement = document.getElementById("todo-list")
            for (let i = 0; i < filtercompleted.length -1; i++) { 
                let olItem = document.createElement("li")
                let textNode = document.createTextNode(filtercompleted[i].title)
                olItem.append(textNode)
                olElement.appendChild(olItem)
                // filteredArray.push(filteredToDos[i])
          }
        }
        
        const incompleteTodos = () => {
            clearAllTodos(); 
            const filtercompleted = filteredArray.filter((toDo) => toDo.completed == false)
            console.log(filtercompleted)
            const olElement = document.getElementById("todo-list")
            for (let i = 0; i < filtercompleted.length -1; i++) { 
                let olItem = document.createElement("li")
                let textNode = document.createTextNode(filtercompleted[i].title)
                olItem.append(textNode)
                olElement.appendChild(olItem)
                // filteredArray.push(filteredToDos[i])
          }
        }