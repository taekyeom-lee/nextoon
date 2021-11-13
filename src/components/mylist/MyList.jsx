import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MySlider from './MySlider';

function MyList() {
  const selected = useSelector((state) => state.auth);
  const itemList = selected.myList;

  let newList = [];
  let newListInList = [];
  let numOfItem = 6;

  itemList.forEach((item, index) => {
    if ((index + 1) % numOfItem === 0 || index + 1 === itemList.length) {
      newListInList = newListInList.concat(item);
      newList.push(newListInList);
      newListInList = [];
    } else {
      newListInList = newListInList.concat(item);
    }
  });

  return (
    <MyListBlock>
      {newList.map((list, index) => (
        <MySlider key={index} list={list} />
      ))}
    </MyListBlock>
  );
}

const MyListBlock = styled.div`
  position: relative;
  min-height: 1000px;
  margin-top: 1rem;
  padding: 0 60px;
`;

export default MyList;
