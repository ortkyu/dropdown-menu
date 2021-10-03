import { useState } from "react"
import { ListItems } from "./ListItems"
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #837d7f;
  margin: 10px 0px;
  padding: 0.25em 1em;
  width: 400px;
`

export const Dropdown = () => {
    const [selectedItems, setItems] = useState<string[]>([])
    const arrLanguach = ["английский", "немецкий", "французский", "испанский", "итальянский", "польский"]
    const [openList, setOpen] = useState<boolean>(false)
    const deleteItem = (item: string) => {
        setItems(selectedItems.filter(i => i !== item))
    }

    return (
        <div>
            <Div>
                {selectedItems.map(i =>
                    <div key={i}>
                        <span>{i}</span>&nbsp;
                        <span onClick={(e) => deleteItem(i)}>x</span>
                    </div>
                )}
                <div onClick={() => setOpen(!openList)}>v</div>
            </Div>
            {openList && <div>
                {true && <ListItems deleteItem={deleteItem} selectedItems={selectedItems} setItems={setItems} arrLanguach={arrLanguach} />}
            </div>}
        </div>
    )
}
