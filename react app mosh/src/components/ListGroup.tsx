import { MouseEvent, useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] index
  //arr[1] updater function
  const handleClick = (event: MouseEvent, item: string, index: number) => {
    setSelectedIndex(index);
    console.log(event);
    console.log(item);
    console.log(index);
  };
  const handleItemClick = (event: MouseEvent, item: string, index: number) => {
    handleClick(event, item, index);
    onSelectItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* Props.heading if props wasn't destructred at Functin Parameter*/}
      {items.length === 0 && <p>No Items Found</p>}
      {/* Props.items */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => handleItemClick(event, item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
