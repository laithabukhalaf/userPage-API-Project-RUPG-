// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance


let apimanger = new APIManager
let renderer = new Renderer



$("#load").click(function () {
    apimanger.loadData()

})

$("#display").click(function () {
    renderer.render(apimanger.data)
})