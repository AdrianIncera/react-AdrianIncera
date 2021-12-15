import React from 'react';

export default function ComponenteLista(props) {

let claseLista = "";

if(props.done){
  claseLista = 'el-checked';

}else{
  claseLista = 'el-uncheked';
}

  return (
    <li classname={claseLista}>
      <input type="checkbox" />
      {props.texto}
    </li>
  );
}
