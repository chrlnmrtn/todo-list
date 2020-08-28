import React, {useState} from 'react';
import './App.css';


import AddToDoItems from './AddTodoItems';
import ActiveItems from './ActiveItems';
import CompletedItems from './CompletedItems';



function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [itemCount, setItemCount]= useState(0);

  const handleChangeDescription = (event) => {
    console.log(event.target.value);
      setDescription(event.target.value);

  }


  const handleAddClicked = () => {
      setItems([...items, {
        id: itemCount + 1,
        description,
        isComplete: false 
      }]);
      setItemCount(itemCount + 1);
      setDescription('');
  }


  const handleComplete = (id) =>{
      setItems(items.map((item) => {
        return item.id === id 
        ? {...item, isComplete: true}: item;
      }))
  }

  
  const handleDelete = () =>{

  }

  const activeItems = () => items.filter((item) => !item.isComplete);

  return (
    <div className="App">
      <header className="App-header">
       <h1>My To Do List</h1>        
      </header>


      <AddToDoItems
        description={description} 
        handleChange={handleChangeDescription}
        handleClick={handleAddClicked}
        />

      <ActiveItems 
        item={activeItems()}
        handleComplete={handleComplete}
        handleDelete={handleDelete}

      />

      <CompletedItems />
    </div>
  );
}

export default App;
