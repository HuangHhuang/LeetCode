console.log(a())

function a() {
    var a = 10
    try {
        print
        a = 20
    }catch (e) {
        a = 30
        return a
    }finally {
        a = 40
    }
    return a
}