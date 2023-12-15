
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import CardUser from '../CardUser/CardUser';

import './CardList.css';


export default function CardList() {
  const [users, setUsers] = useState([]);

  console.log('users:', users);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((info) => info.json())
      .then((data) => setUsers(data));
  }, []);


  return (
    <div className="grid">      
      {users.map((user) => {
        return (
          <div key={user.id}>
            <CardUser user={ user} />
          </div> 
        )       
      })}
    </div>
  )
}
