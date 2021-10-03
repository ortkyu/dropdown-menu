import { PropsTypesDropdown } from "./Dropdown/ListItems"

interface PropsTypesItem extends PropsTypesDropdown {
  item: string
}

export const ItemLanguage: React.FC<PropsTypesItem> = ({ setItems, selectedItems, deleteItem, item }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && !selectedItems.includes(item)) {
      setItems([...selectedItems, item])
    }
    if (!e.target.checked) {
      deleteItem(item)
    }
  }

  return (
    <div >
      <label htmlFor={item}>{item}</label>
      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id={item}
        checked={selectedItems.includes(item)} />
    </div>
  )
}