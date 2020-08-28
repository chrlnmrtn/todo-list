import React from 'react';

export default ({ item, handleComplete, handleDelete} ) => {
    return (
        <section>
            <h2>Active Items</h2>


        <ul>
            { item.map ((items) => 
            <li key={items.id}>
                 {items.description}
                <button onClick={() => handleComplete(items.id)}>Complete</button>
                <button onClick={() => handleDelete(items.id)}>Delete</button>
                </li>
            )}
            </ul>
        </section>
    )
    
}