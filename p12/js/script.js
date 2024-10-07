function bottom(BottomClick){
    document .getElementById("result").value+=BottomClick
}

function equal(BottomEqual){
    var saveResult = document .getElementById("result").value 
    document .getElementById("result").value = eval(saveResult)

}
function clean() {
    document .getElementById("result").value = ""
} 