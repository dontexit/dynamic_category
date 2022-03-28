
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
