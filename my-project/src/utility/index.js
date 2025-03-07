import { Warning } from 'postcss';
import toast from 'react-hot-toast';

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
    const isExit= gadget.find(gad=> gad.product_id == data.product_id);
    if(isExit){
        toast.error('Product already added to dashboard!');
        return;
    }
    
    gadget.push(data);
    localStorage.setItem('gadget',JSON.stringify(gadget));
    toast.success('Product Successfully add to Dashboard!');

}

//remove all data

const removeFromCart=(product_id)=>{
    const gadget=getToLocalStorage();
    const remaining=gadget.filter(gad=> gad.product_id != product_id);
    localStorage.setItem('gadget',JSON.stringify(remaining));
    toast.success('Product delete from dashboard !!');
}


export {addToLocalStorage,getToLocalStorage,removeFromCart}