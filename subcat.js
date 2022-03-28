    const sub = [
    ["Cloth",],
    ["Vechile"],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    ["Mobile"],
    [""],
    [""],
    [""],
    [""],
    ["VideoGame"],
    [""],
    [""],
]

  const category = document.querySelector('#id_category')
  category.addEventListener("change", myScript)
  var subcat = document.querySelector('#id_subcategory')  
  subcat.removeChild(subcat.lastChild);

  function myScript(){ 
    while (subcat.childNodes.length > 2) {
    subcat.removeChild(subcat.lastChild);
  }
  if (category){
      const sub_len = sub[category.value-1].length
      console.log(sub_len)
      if(sub_len > 1){
        for(let i=0; i < sub_len; i++){
          var opt = document.createElement('option')
          opt.value = i
          opt.innerHTML = sub[category.value-1][i]
          console.log("more than",opt.value)
          console.log(opt.innerHTML)
          subcat.appendChild(opt)
          subcat.addEventListener("change", changeForm)
        }
      }
      else{
        var opt = document.createElement('option')
        opt.value = "1"
        opt.innerHTML = sub[category.value-1][0]
        console.log(opt.value)
        console.log(opt.innerHTML)
        subcat.appendChild(opt)
        subcat.addEventListener("change", changeForm)
      }
    }
  }

  function changeForm(){
    if (subcat){
    fetch('api/form/'+category.value+'/'+subcat.value+'/')
        .then(response =>{
            console.log(response.json())
            return response.json
        })
        .then(function (data) {
        const formContainer = document.querySelector(".form-container");
        formContainer.innerHTML = data.form
    })
    }
  }
