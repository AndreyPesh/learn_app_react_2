import Computers from "../../components/admin/ComputersAdmin";
import Refrigerators from "../../components/admin/RefrigeratorsAdmin";
import Smartphones from "../../components/admin/smartphone/SmartphonesAdmin";


export const listProducts = [
  {
    name: 'Smartphones',
    component: <Smartphones key={'1'} />
  },
  {
    name: 'Computers',
    component: <Computers key={'2'}/>
  },
  {
    name: 'Refrigerators',
    component: <Refrigerators key={'3'} />
  }
]