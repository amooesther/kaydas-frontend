import React from 'react'
import "./Button.css"

const Button =({variant="primary",
 size="medium", 
 
children
})=>{
return (
    <button 
     data-size={size} 
     data-variant={variant} 
     className="btn">{children}</button>
);

}

export default Button