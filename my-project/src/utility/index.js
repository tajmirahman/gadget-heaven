/// get all data

const getToLocalStorage=()=>{
    const all= localStorage.getItem('gadget');
    if(all){
        const gadget= JSON.parse(all);
        return gadget;
    }
    else{
        return [];
    }
}


// add to local storage

const addToLocalStorage=(data)=>{

    const gadget=getToLocalStorage();
    gadget.push(data);
    localStorage.setItem('gadget',JSON.stringify(gadget));
}



//remove all data


export {addToLocalStorage}