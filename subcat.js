
    const category = document.querySelector('#id_category')
    const subcategory = document.querySelector('#id_subcategory')
    category.addEventListener("change",catFunc)
    const sub = [
    {"CT": ["Cloth"],},
    {"AM":["Vechile"]},
    {"EG":[""]},
    {"BH":[""]},
    {"BI":[""]},
    {"CP":[""]},
    {"EH":[""]},
    {"GS":[""]},
    {"FA":[""]},
    {"MA":["Mobile"]},
    {"JB":[""]},
    {"MI":[""]},
    {"PT":[""]},
    {"SV":[""]},
    {"TY":["VideoGame"]},
    {"VG":[""]},
    {"OT":[""]},
    ]
    function subcategory_reset(){
        while (subcategory.childNodes.length > 2) {
        subcategory.removeChild(subcategory.lastChild);
    }
    }
    subcategory_reset()

    function get_sublist(subcategory_list){
        // console.log(subcategory_list)
        if (category.value == ""){
            console.log("empty")
            return
        }
        for (let i=0; i < subcategory_list.length; i++){
            if(category.value in subcategory_list[i]){
                console.log(subcategory_list[i])
                   // subcatergory list with same key as selceted category found
                   return subcategory_list[i][category.value] 
            }
        }
    }

    function displaysub(subcategory_list){
            for(let i=0; i < subcategory_list.length; i++){
                console.log(subcategory_list[i])
                var opt = document.createElement('option')
                opt.value = subcategory_list[i]
                opt.innerHTML = subcategory_list[i]
                console.log("more than",opt.value)
                console.log(opt.innerHTML)
                subcategory.appendChild(opt)
            }
        }

    function catFunc(){
        subcategory_reset()
        if (category.value != ""){
            displaysub(get_sublist(sub))

        }
            
    }
    
    function log_categorychange(){
        if (category.value != ""){
            
        }
    }
    subcategory.addEventListener("change",get_sub)

    function get_sub(){
        if(subcategory){
            console.log(subcategory.value)
        }
    }
    get_sub()

#Index


    
  cl = document.querySelector('.category_list')
    cl.addEventListener("click",cat_changed)
    
    function get_sublist(subcategory_list,value){
        // console.log(subcategory_list)
        for (let i=0; i < subcategory_list.length; i++){
            if(value in subcategory_list[i]){
                console.log(subcategory_list[i])
                   // subcatergory list with same key as selceted category found
                   return subcategory_list[i][value] 
            }
        }
    }
  
     
    function cat_changed(evt){
        if(get_sublist(sub,evt.target.id)){
            scat = document.querySelector('.'+evt.target.id)
            console.log(scat)
            if(scat.childNodes.length > 0){
                if(scat.style.display != "none"){
                console.log(scat.childNodes.length,scat.style.display )
                scat.style.display='none'
                }
                else{
                scat.style.display = "flex"
                }
    //            while (scat.childNodes.length > 0) {
    //     scat.removeChild(scat.lastChild);
    //     subcat.classList.add('sub')
    // }
            }else{
            console.log(get_sublist(sub,evt.target.id))
            showsub(evt.target.id,get_sublist(sub,evt.target.id))
        }
        console.log(typeof(evt.target.id))
    }
}

    

    function showsub(sid,subcategory_list){
            for(let i=0; i < subcategory_list.length; i++){
                console.log("diplaying",subcategory_list[i])
                subcat = document.querySelector("."+sid)
                subcat.classList.add('sub')
                var a = document.createElement('a')
                a.innerHTML = subcategory_list[i]
                a.href = "#"
                console.log(subcat)
                subcat.appendChild(a)
            }
        }
    
    function hidecat(){
        cl.style.display = "none"
    }
    function barClicked(){
        cl.style.display = "flex"
    }
