import List from './List'

function App() {

  const fruits = [{name:"Apple", calo:100},
                  {name:"Orange", calo:89},
                  {name:"Banana", calo:117},
                  {name:"Coconut", calo: 88},
                  {name:"PineApple", calo:70}];

  const vegetables = [{name:"spinach", calo:89},
                  {name:"Onion", calo:89},
                  {name:"Tomato", calo:123},
                  {name:"Cocumber", calo: 32},
                  {name:"PineApple", calo:70}];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"></List>}
    </>  
  )
}

export default App
