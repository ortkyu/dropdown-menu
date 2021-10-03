import { useEffect, useState } from "react"
import { ItemLanguage } from "../ItemLanguage"
import styled from 'styled-components'

const Div = styled.div`

  box-shadow: 0px 4px 32px rgba(51, 51, 51, 0.15);;
  border-radius: 10px;
  width: 400px;
  box-sizing: border-box;
`
const INPUT = styled.input`
  height: 40px;
  width: 368px;
  background: #F4F4F4;
  border-radius: 10px;
  outline: none;
  border: none;
  margin: 16px 16px 0px 16px;
  padding-left: 10px;
  box-sizing: border-box;
  ::placeholder {
    background: url('/Icons/icon.svg') no-repeat;
    padding-left: 20px;
  }
`

export interface PropsTypesDropdown {
    selectedItems: string[]
    setItems: React.Dispatch<React.SetStateAction<string[]>>
    deleteItem: (arg: string) => void
}
export interface ItemLanguageTypes {
    id: number
    name: string
    icon: string
}
interface PropsTypesListItem extends PropsTypesDropdown {
    arrLanguage: ItemLanguageTypes[]
}

export const ListItems: React.FC<PropsTypesListItem> = ({ arrLanguage, selectedItems, setItems, deleteItem }) => {
    const [searchText, setText] = useState<string>('')
    const [matchItems, setMatchItems] = useState<ItemLanguageTypes[]>([])

    useEffect(() => {
        const match = arrLanguage.filter(s => s.name.toLowerCase().includes(searchText.toLowerCase()))
        setMatchItems(match)
    }, [searchText, arrLanguage])
    

    return (
        <Div>
            <INPUT
                onChange={(e) => setText(e.target.value)}
                value={searchText}
                placeholder="Поиск"
            />
            {matchItems.map((p, i) => (
                <div key={i}>
                    <ItemLanguage
                        iconLanguage={p.icon}
                        item={p.name}
                        deleteItem={deleteItem}
                        selectedItems={selectedItems}
                        setItems={setItems}
                        arrLanguage={arrLanguage}
                    />
                </div>
            ))}
        </Div>
    )
}