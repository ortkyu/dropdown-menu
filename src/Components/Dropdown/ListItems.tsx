import { useState } from "react"
import { ItemLanguage } from "../ItemLanguage"
import styled from 'styled-components'

const Div = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 0.25em 1em;
  width: 400px;
`
export interface PropsTypesDropdown {
    selectedItems: string[]
    setItems: React.Dispatch<React.SetStateAction<string[]>>
    deleteItem: (arg: string) => void
}

 interface PropsTypesListItem extends PropsTypesDropdown  {
    arrLanguach: string[]
}

export const ListItems: React.FC<PropsTypesListItem> = ({ arrLanguach, selectedItems, setItems, deleteItem }) => {

    const [searchText, setText] = useState<string>('')

    const matchItems = arrLanguach.filter(s => s.includes(searchText))

    return (
        <Div>
            <input
                onChange={(e) => setText(e.target.value)}
                value={searchText}
                placeholder="Введите запрос..."
            />
            {matchItems.map((p, i) => (
                <div key={i}>
                    <ItemLanguage
                        item={p}
                        deleteItem={deleteItem}
                        selectedItems={selectedItems}
                        setItems={setItems} />
                </div>
            ))}
        </Div>
    )
}