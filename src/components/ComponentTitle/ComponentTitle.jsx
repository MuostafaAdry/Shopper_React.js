import React from 'react'
import ComponentTitleclass from './ComponentTitle.module.css'
const ComponentTitle = ({title}) => {
  return (
    <div>
              <div className={ComponentTitleclass.popula_title}>
            <h1 className={ComponentTitleclass.title}>{title}</h1>
           <hr className={ComponentTitleclass.hr} /> 
        </div>
    </div>
  )
}

export default ComponentTitle
