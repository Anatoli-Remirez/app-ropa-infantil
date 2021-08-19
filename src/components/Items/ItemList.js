// import React, { useEffect, useState } from 'react'

// const ItemList = () => {

//     const [users, setUsers] = useState([]);

//     useEffect(() => {

//         fetch('https://fakestoreapi.com/products?limit=5')
//             .then(res=>res.json())
//             .then(json=>setUsers(json)) 

//     }, []);
    
//     return (
//         <div className="ItemList">
//             <h1>Items</h1>
        
//         {users.map ((e) => {

//            return (

//             <div key = {e.id}>
//                 <p>{e.category}-{e.description}-{e.id}-{e.image}-{e.category}</p>
//             </div>
//            )     
//            })}
    
//         </div>
// );
// };

// export default ItemList
