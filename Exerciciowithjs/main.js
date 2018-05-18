// // 1 maneira de exibir o h1 com porcentagem
// var title = document.createElement("h1");
// title.textContent = "54%"
// element_pai.appendChild(title);

// 2 maneira de exibir o h1 com porcentagem 
var container = document.querySelectorAll(".progress")

for (var progress = 0; progress < container.length; progress++){

    let porcentagem = container[progress].dataset.percentage
    let title = document.createElement("h1")
    title.textContent = porcentagem + "%"
    container[progress].appendChild(title);
    let div = document.createElement("div")
    //div.style.width = title.textContent 
    div.style.backgroundColor = getRandomColor()
    container[progress].appendChild(div);
    setTimeout(function(){
         div.style.width = title.textContent 
    }, 100)

    }
    function getRandomColor(){
        var colors =  ["#08088A", "#8A0868" , "#B18904" , "#B40404" , "#F5A9A9","#1C1C1C"]
        var index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
    



