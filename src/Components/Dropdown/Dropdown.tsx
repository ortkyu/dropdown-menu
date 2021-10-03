import { useState } from "react"
import { ListItems } from "./ListItems"
import styled from 'styled-components'

const DivSearch = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid rgba(193, 193, 193, 1);
  margin-top: 24px;
  margin-bottom: 10px;
  width: 400px;
  height: 40px;
  padding: 7px 10px;
  box-sizing: border-box;
  overflow: hidden;
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 112px;
  height: 26px;
  background: #F4F4F4;
  font-family: TT Norms Pro;
  font-size: 12px;
  color: #333333;
  padding: 0px 12px;
  margin: 0px 4px;
`
const DivDel = styled.div`
 margin-left: auto;
`
const OPENICON = styled.span`
  margin-left: auto;
  transition: all 0.3s ease-out;
`


export const Dropdown = () => {
    const [selectedItems, setItems] = useState<string[]>([])
    const arrLanguage = [  //иконки не все у вас
        { id: 1, name: "Русский", icon: '/Icons/italy.png' }, { id: 2, name: "Английский", icon: '/Icons/italy.png' },
        { id: 3, name: "Испанский", icon: '/Icons/spain.png' }, { id: 4, name: "Немецкий", icon: '/Icons/italy.png' },
        { id: 5, name: "Итальянский", icon: '/Icons/italy.png' }, { id: 6, name: "Польский", icon: '/Icons/poland.png' }
    ]
    const [openList, setOpen] = useState<boolean>(false)
    const deleteItem = (item: string) => {
        setItems(selectedItems.filter(i => i !== item))
    }

let transform = openList ? {transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}

    return (
        <div>
            <DivSearch>
                {selectedItems.map(i =>
                    <Div key={i}>
                        <span>{i}</span>
                        <DivDel   onClick={(e) => deleteItem(i)}>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.55231 0.447703C7.81591 0.711307 7.81591 1.13869 7.55231 1.4023L4.95475 4L7.55231 6.59771C7.79394 6.83935 7.81408 7.21861 7.61272 7.48318L7.55231 7.55231C7.2887 7.81591 6.86132 7.81591 6.59771 7.55231L4 4.95475L1.4023 7.55231C1.13869 7.81591 0.711307 7.81591 0.447703 7.55231C0.184099 7.2887 0.184099 6.86132 0.447703 6.59771L3.04525 4L0.447703 1.4023C0.206066 1.16066 0.18593 0.781401 0.387294 0.516826L0.447703 0.447703C0.711307 0.184099 1.13869 0.184099 1.4023 0.447703L4 3.04525L6.59771 0.447703C6.86132 0.184099 7.2887 0.184099 7.55231 0.447703Z" fill="#333333" />
                            </svg>
                        </DivDel>
                    </Div>
                )}
                <OPENICON style={transform} onClick={() => setOpen(!openList)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.45442 7.19105C4.06285 6.88488 3.49722 6.9541 3.19105 7.34566C2.88488 7.73723 2.9541 8.30286 3.34566 8.60903L7.4423 11.8123C7.76791 12.0669 8.22507 12.067 8.55078 11.8125L12.6507 8.60925C13.0424 8.30323 13.1119 7.73763 12.8059 7.34594C12.4998 6.95426 11.9342 6.88481 11.5425 7.19083L7.99691 9.96101L4.45442 7.19105Z" fill="#333333" />
                    </svg>
                </OPENICON>
            </DivSearch>
            {openList && <div>
                {true && <ListItems
                    deleteItem={deleteItem}
                    selectedItems={selectedItems}
                    setItems={setItems}
                    arrLanguage={arrLanguage} />}
            </div>}
        </div>
    )
}
