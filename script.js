const listas =  document.querySelectorAll("article")
const itens = document.querySelectorAll(".iten")

let cardSelecionado;


itens.forEach(iten=>{
    iten.addEventListener("dragstart",(event)=>{
    cardSelecionado = event.target
})
})

listas.forEach(list=>{

    list.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    list.addEventListener("dragenter",(e)=>{

        if(e.target.classList.contains("coluna")){
            e.target.classList.add("seleted")
            return
        }
        
    })

    list.addEventListener("dragleave",(e)=>{
        e.target.classList.remove("seleted")
    })

    list.addEventListener("drop",(e)=>{
        e.target.classList.remove("seleted")
        list.append(cardSelecionado)
    })

    list.addEventListener("dblclick",(e)=>{

        if(!e.target.classList.contains("coluna")){
            return
        }
        let iten = document.createElement("div")
        iten.className = "iten"
        iten.draggable = true
        iten.contentEditable = true
        iten.autofocus = true
        iten.focus()
        iten.addEventListener("dragstart",(e)=>{
            cardSelecionado = e.target
        })

        iten.addEventListener("blur",(e)=>{
            e.target.contentEditable = false
        })
        e.target.append(iten)
    })
})