function obtenerElementosFETCH (url){ 
    return fetch(url)
    .then((rta)=>{
        if(rta.ok){            
            return rta.json();
        }else{
            throw new Error(`Error: ${rta.status} - ${rta.statusText}`); 
        }
    })
    .catch(error => {
        return Promise.reject(error); 
    });
}

function obtenerElementoPorIdFETCH (url, id){
    return fetch(url + "/" + id)
    .then((rta)=>{
        if(rta.ok){            
            return rta.json();
        }else{
            throw new Error(`Error: ${rta.status} - ${rta.statusText}`); 
        }
    })
    .catch(error => {
        return Promise.reject(error); 
    });
}

function insertarElementoFETCH(url, elemento){
    return fetch(url, {
        method: "POST",
        headers:{
        "Content-Type"  :"application/json"
        },
        body : JSON.stringify(elemento)
    })         
    .then((rta)=>{
        if(rta.ok){            
            return rta.json();
        }else{
            throw new Error(`Error: ${rta.status} - ${rta.statusText}`); 
        }
    })
    .catch(error => {
        return Promise.reject(error); 
    });
}

function actualizarElementoFETCH (url, elemento){      
    return fetch(url + "/" + elemento.id, {
        method: "PUT",
        headers:{
            "Content-Type"  :"application/json"
        },
        body : JSON.stringify(elemento)})
    .then((rta)=>{
        if(rta.ok){            
            return rta.json();
        }else{
            throw new Error(`Error: ${rta.status} - ${rta.statusText}`); 
        }
    })
    .catch(error => {
        return Promise.reject(error); 
    });
}

function eliminarElementoPorIdFETCH (url, id){      
    return fetch(url + "/" + id,
    {
        method: "DELETE"       
    })
    .then((rta)=>{
        if(rta.ok){            
            return rta.json();
        }else{
            throw new Error(`Error: ${rta.status} - ${rta.statusText}`); 
        }
    })
    .catch(error => {
        return Promise.reject(error); 
    });
}




///////////////

function insertarElementoFETCHconPromesa(url, elemento){
    return new Promise((resolve, reject) =>{
        fetch(url, {
            method: "POST",
            headers:{
            "Content-Type"  :"application/json"
            },
            body : JSON.stringify(elemento)
        })         
        .then((rta)=>{
            if(rta.ok){            
                resolve(rta.json());
            }else{
                reject(`Error: ${rta.status} - ${rta.statusText}`); 
            }
        });      
    });
}


function eliminarElementoPorIdFETCHconPromesa (url, id){  
    return new Promise((resolve, reject) =>{
        fetch(url + "/" + id,
        {
            method: "DELETE"       
        })       
        .then((rta)=>{
            if(rta.ok){            
                resolve(rta.json());
            }else{
                reject(`Error: ${rta.status} - ${rta.statusText}`); 
            }
        });      
    });
}
//////////////

export {actualizarElementoFETCH, 
        eliminarElementoPorIdFETCH, 
        insertarElementoFETCH, 
        obtenerElementoPorIdFETCH, 
        obtenerElementosFETCH,
        insertarElementoFETCHconPromesa,
        eliminarElementoPorIdFETCHconPromesa};