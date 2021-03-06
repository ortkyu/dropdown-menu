import { ItemLanguageTypes, PropsTypesDropdown } from "./ListItems"
import styled from 'styled-components'

const Divwrap = styled.div<{ border: boolean }>`
display: flex;
padding: 0 16px;
border-bottom: ${({ border }) => border ? "none" : "1px solid #F4F4F4"};
`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  width: 400px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  font-family: TT Norms Pro;
  margin-left: 10px;
`

const Img = styled.img`
 margin: auto;
 width: 20px;
 height: 20px;
`

interface PropsTypesItem extends PropsTypesDropdown {
  item: string
  iconLanguage: string
  arrLanguage: ItemLanguageTypes[]
}

export const ItemLanguage: React.FC<PropsTypesItem> = ({
  setItems,
  selectedItems,
  deleteItem, item,
  iconLanguage,
  arrLanguage
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && !selectedItems.includes(item)) {
      setItems([...selectedItems, item])
    }
    if (!e.target.checked) {
      deleteItem(item)
    }
  }

  const border = arrLanguage[arrLanguage.length - 1].name === item

  return (
    <Divwrap border={border}>
      <Img src={iconLanguage} alt='' />
      <Div >
        <label htmlFor={item}>{item}</label>
        <input
          onChange={(e) => handleChange(e)}
          type="checkbox"
          id={item}
          checked={selectedItems.includes(item)} />
      </Div>
    </Divwrap>
  )
}