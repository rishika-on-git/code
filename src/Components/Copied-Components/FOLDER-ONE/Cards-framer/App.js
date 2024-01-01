import "./Card.css";

import Card from "./Card";


function AppCard() {
  const items = ["lorem10jdkfnnnnnnnnnnnnnnnnnnnnnidiieyeuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", "Item 2", "Item 3", "Item 4"];
  return (
    <div className="App">
      {items.map((item, i) => (
        <Card key={i} text={item} index={i} />
      ))}
    </div>
  );
}

export default AppCard;