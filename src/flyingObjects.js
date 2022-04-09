export class objects {

    constructor(maxX, maxY) {
        this.x = this.setxValues(maxX)
        this.y = this.setyValues(maxY)
        this.class = this.setClass()
        this.color = this.setColor()
        this.duration=this.setAnimationDuration()

    }
    setxValues(maxWitdh) {
        let randomNumber = Math.floor(Math.random() * maxWitdh)
        return randomNumber
    }
    setyValues(maxHeight) {
        let randomNumber = Math.floor(Math.random() * maxHeight)
        return randomNumber
    }
    incrementPosition(x = 0, y = 0) {
        this.x += x
        this.y += y
    }
    setClass() {
        let classArray = ["circular", "square"]
        let index = Math.floor(Math.random() * classArray.length)
        return classArray[index]
    }
    setColor() {
        let colorArray = ["#f0f833", "#faeb33", "#00ff33", "#7fff33", "#f0ff33", "#f5f533", "#ffe433", "#000033", "#ffeb33", "#000033", "#8a2b33", "#a52a33", "#deb833", "#5f9e33", "#7fff33", "#d26933", "#ff7f33", "#649533", "#fff833", "#dc1433", "#00ff33", "#000033", "#008b33", "#b88633", "#a9a933", "#006433", "#a9a933", "#bdb733", "#8b0033", "#556b33", "#ff8c33", "#993233", "#8b0033", "#e99633", "#8fbc33", "#483d33", "#2f4f33", "#2f4f33", "#00ce33", "#940033", "#ff1433", "#00bf33", "#696933", "#696933", "#1e9033", "#b22233", "#fffa33", "#228b33", "#ff0033", "#dcdc33", "#f8f833", "#ffd733", "#daa533", "#808033", "#008033", "#adff33", "#808033", "#f0ff33", "#ff6933", "#cd5c33", "#4b0033", "#ffff33", "#f0e633", "#e6e633", "#fff033", "#7cfc33", "#fffa33", "#add833", "#f08033", "#e0ff33", "#fafa33", "#d3d333", "#90ee33", "#d3d333", "#ffb633", "#ffa033", "#20b233", "#87ce33", "#778833", "#778833", "#b0c433", "#ffff33", "#00ff33", "#32cd33", "#faf033", "#ff0033", "#800033", "#66cd33", "#000033", "#ba5533", "#937033", "#3cb333", "#7b6833", "#00fa33", "#48d133", "#c71533", "#191933", "#f5ff33", "#ffe433", "#ffe433", "#ffde33", "#000033", "#fdf533", "#808033", "#6b8e33", "#ffa533", "#ff4533", "#da7033", "#eee833", "#98fb33", "#afee33", "#db7033", "#ffef33", "#ffda33", "#cd8533", "#ffc033", "#dda033", "#b0e033", "#800033", "#ff0033", "#bc8f33", "#416933", "#8b4533", "#fa8033", "#f4a433", "#2e8b33", "#fff533", "#a05233", "#c0c033", "#87ce33", "#6a5a33", "#708033", "#708033", "#fffa33", "#00ff33", "#468233", "#d2b433", "#008033", "#d8bf33", "#ff6333", "#40e033", "#ee8233", "#f5de33", "#ffff33", "#f5f533", "#ffff33", "#9acd33"]
        let index = Math.floor(Math.random() * colorArray.length)
        return colorArray[index]

    }
    setAnimationDuration(){
       
            let randomNumber = Math.floor(Math.random() * (75 - 5 + 1)) + 15
            return randomNumber
        
    }


}




export default objects