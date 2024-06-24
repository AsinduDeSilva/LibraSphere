function get(object_name){
    const object = JSON.parse(localStorage.getItem(object_name))
    if(object) return object
    else return false
}

function get_sub_object(object_name, sub_object_name){
    const sub_object = JSON.parse(localStorage.getItem(object_name))[sub_object_name]
    if(sub_object) return sub_object
    else return false
}


function post(object_name, object){
    localStorage.setItem(object_name, JSON.stringify(object))
}

function update(object_name, sub_object_name, sub_object){
    let object = JSON.parse(localStorage.getItem(object_name))
    if(sub_object_name in object) object[sub_object_name] = {...object[sub_object_name], ...sub_object}
    else object[sub_object_name] = sub_object
    localStorage.setItem(object_name, JSON.stringify(object))
}

