/// get all data


// add to local storage

const addToLocalStorage=(data)=>{
    const gadget=[];
    gadget.push(data);
    localStorage.setItem('gadget',JSON.stringify(gadget));
}



//remove all data