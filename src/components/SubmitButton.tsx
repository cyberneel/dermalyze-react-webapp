import React from 'react';
import{ RunMain} from '../../js/script.js';
// var Sample = require("../../js/script");
function SubmitButton(){
    const submitClick = () => {
      var x;
        x=RunMain(false)
      };
    return <div className = "d-grid gap-2 col-6 mx-auto"> <button type="button" className = "btn btn-primary" value = "Run Dermalyze" onClick ={submitClick}  >Run Dermalyze</button></div>

}
export default SubmitButton;