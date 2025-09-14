


const ListProps = {
  items: [],
  category: ""
};
function List(props = ListProps){
    let id=0;

    const items = props.items;
    // fruits.sort((a,b) => a.name.localeCompare(b.name)) // sort theo name
    // fruits.sort((a,b) => a.calo - b.calo) // sort theo digit
    // const lowCalFruits =  fruits.filter(fruit => fruit.calo < 100); // loc 
    const fruit  = items.map(fruit => <li key={id++}>{fruit.name}:&nbsp; <b>{fruit.calo}</b> calo</li>)

    return (
        <>
            
            <h2 className="list-category">{props.category}</h2>
            <li className="list-items">
                {fruit}
            </li>    
        </>
    );
}

export default List