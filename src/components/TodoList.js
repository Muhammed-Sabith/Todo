import React,{useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Delete} from "../assets/delete.svg";
import {ReactComponent as Tick} from "../assets/tick-green.svg";
import {ReactComponent as Revert} from "../assets/revert.svg";

function TodoList() {
    const [items,setItems] = useState([]);
    const [completed,setCompleted] = useState([]);
    const [input,setInput] = useState("");
    const [count,setCount] = useState(0);

    let addItems = () => {
        setCount((prevState)=>prevState+1)
        setItems([...items,{name:input,id:count}])
        setInput("")
    }
    let removeItems = (id) => {
      let new_items = [...items].filter((item)=>item.id!==id);
      setItems(new_items)
    }
    let moveItem = (id2,name) => {
      setCompleted([...completed,{name:name,id:id2}])
      let movedItems2 = [...items].filter((item)=>item.id!==id2);
      setItems(movedItems2)
    }
    let removeItems2 = (id_for_del) => {
      let delete_key = [...completed].filter((item_for_del)=>item_for_del.id!==id_for_del);
      setCompleted(delete_key)
    }
    let revertItem = (im,named) => {
      setItems([...items,{name:named,id:im}])
      let reverted_two = [...completed].filter((a)=>a.id!==im);
      setCompleted(reverted_two)
    }     
  return (
    <>
      <Body>
        <Header>ToDo List...</Header>
        <HeaderThird>Things to be done❗</HeaderThird>
        <ParentList>
           {items.map((item)=>(
            <>
            <List key={item.id}>
            <Section>
              <Checkbox onClick={()=>moveItem(item.id,item.name)}></Checkbox>
              <label> {item.id + 1} , {item.name}</label>
            </Section>
              <Delete onClick={()=>removeItems(item.id)}/>
            </List>
            </>
            ))}
        </ParentList>
        <NewToDoForm>
            <Input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type new task..."/>
            <Button onClick={addItems}>Add New</Button>
        </NewToDoForm>


        <HeaderThird>Completed ✅</HeaderThird>
        <ParentList>
            {completed.map((list)=>(
              <>
                <List>
                      <Section>
                            <Checkbox2><Tick/></Checkbox2>
                            <label style={{color:"#18c7b8",}}>{list.id+1} , {list.name}</label>
                      </Section>
                      <Section>
                        <Revert onClick={()=>revertItem(list.id,list.name)} style={{marginRight:"20px"}}/>
                        <Delete onClick={()=>removeItems2(list.id)}/>
                      </Section>
                </List> 
              </>
            ))}
        </ParentList>
      </Body>
    </>
  )
}


const Header = styled.h1`
    font-size:36px;
    color:#000;
`;

const Body = styled.div`
    padding:80px 60px;
    width:30%;
    height:78vh;
    text-align:center;
    margin:0px auto;
    border-right:1px solid #a1a1a1;
    border-left:1px solid #a1a1a1;
`;

const HeaderThird = styled.h3`
    text-align:left;
    font-size:24px;
`;

const List = styled.li`
    width:100%;
    list-style-type:none;
    text-align:left;
    display:flex;
    justify-content:space-between;
    margin-bottom:15px;
`;

const ParentList = styled.ul`
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const NewToDoForm = styled.div`
    display:flex;
    margin-left:40px;
    margin-top:30px;
    position:relative;
    &::before{
      content:"";
      background-image:url(${require("../assets/plus.svg").default});
      width:16px;
      height:16px;
      display:block;
      position:absolute;
      left:10px;
      top:0;
      bottom:0;
      margin:auto 0;
      z-index:2;

    }
`

const Input = styled.input`
    width:60%;
    padding:10px 12px;
    padding-left:28px;
`;

const Button = styled.button`
    padding:10px 12px;
    color:#fff;
    background-color:#191821;
    border-radius:14px;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
`;

const Checkbox = styled.div`
    width:20px;
    height:20px;
    border:1px solid #000;
    border-radius:50%;
    margin-right:10px;
`;

const Checkbox2 = styled.div`
    width:22px;
    height:22px;
    border-radius:50%;
    border:3px solid #18c7b8;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:10px;
`;

const Section = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export default TodoList;