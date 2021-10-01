function getresult(global){
    console.log(global)
    var result = document.getElementById('result1')

    result.value +=global

}
function clrResult(global){
    var result = document.getElementById('result1')
    result.value = ''
}
function getresultt(){
    var result = document.getElementById('result1')
   
    result.value = eval(result.value)
}
