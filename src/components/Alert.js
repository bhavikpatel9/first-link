import React from 'react'

export default function Alert(props) {

    function capitalFirstLetter(word){
        const firstLetter =  word.charAt(0);
        const capWord = firstLetter.toUpperCase() + word.slice(1);
        return capWord;
    }
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{capitalFirstLetter(props.alert.type)}</strong> : {props.alert.msg}
               
      </div>
    
  )
}
