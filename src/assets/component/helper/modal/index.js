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

{/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
export default Modal;


{/* <div class="modal fade" id={ModalName+"Modal"} tabindex="-1" aria-labelledby={ModalName+"ModalLabel"} aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content"> 
        {children} 
    </div>
</div>
</div> */}