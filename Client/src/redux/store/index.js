import { configureStore } from "@reduxjs/toolkit";
import { cartreducer, category, itemreducer, reducer, userreducer, wishreducer } from "../reducer";

const store=configureStore({
    reducer:{
        root: reducer,
        user: userreducer,
        item:itemreducer,
        cart:cartreducer,
        category:category,
        wish:wishreducer
    }
})

export{store}