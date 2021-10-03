import { Dropdown } from './Components/Dropdown/Dropdown';
import styled from 'styled-components'


const Div = styled.div`
display: flex;
justify-content: center;
`

function App() {
  return (
    <Div >
      <Dropdown />
    </Div>
  );
}

export default App;
