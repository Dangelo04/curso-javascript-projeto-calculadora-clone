class Calccontroler{

constructor(){

    this._displayCalc = '0';
    this._currentDate;
    this._initialize;
}
initialize(){

    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "4567";
}

get displayCalc(){

    return this._displayCalc;
    
}
set displayCalc(valor){
    this._displayCalc = valor;
}
get currentDate(){
    return this.currentDate;
}

set currentDate(valor){
    this._currentDate = valor;

}


}