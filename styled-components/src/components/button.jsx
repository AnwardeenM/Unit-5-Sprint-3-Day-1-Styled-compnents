import styled from 'styled-components';

const Button=styled.button`
border:1px solid black;
border:${(props)=>(props.borderNone === "None" ? "None":"1px solid")};

border-style:${(props)=>(
    props.border === "NormalBorder" ? "1px solid black": "dashed"
)};
background-color:transparent;
border-radius:5px;
margin: 5px;
margin-top:10px;
padding:10px;
cursor:pointer;
background:${(props)=>(
    props.theme === "primary" ? "blue" : "transparent" 
)};
color:${(props)=>(props.color === "aqua" ? "aqua":"black")}
`;

export {Button};