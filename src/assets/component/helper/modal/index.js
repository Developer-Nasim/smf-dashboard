import React from "react";
import "./style.css"  

function Modal({ModalName,children}) {  
    return (
        <div className="modal fade" id={ModalName+"Modal"} tabIndex="-1" aria-labelledby={ModalName+"ModalLabel"} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content"> 
                    {children} 
                </div>
            </div>
        </div>
    )
} 
export default Modal;
 