import axios from 'axios';
import React, { useReducer } from 'react';
import $axios from '../axios';
import { API } from '../helpers/const';
export const productContext = React.createContext()

const INIT_STATE ={
    product: [], 
    productDetails: null,
    productToEdit: null,
    countOfProducts: 0,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {...state, product: action.payload }
            case "GET_DETAILS":
                return { ...state, productDetails: action.payload };
        case "GET_PRODUCTS_TO_EDIT":
            return {...state, productToEdit: action.payload}
        case "GET_COUNT":
            return {...state, countOfProducts: action.payload}
        case "CLEAR_STATE":
            return {...state, productToEdit: action.payload}
        default:
            return state;            
    }
}

const ProductContextProvider = (props) => {
    const [state, dispatch ] = useReducer(reducer, INIT_STATE)

    const addProducts = async (product) => {
        try{
            console.log(product);
            await $axios.post('product/create', product)
            
            getProducts()
        }catch(e){
            console.log(e);
        }
    }

    //! Read

    const getProducts = async (page = "1") => {
        try{
            let filter = window.location.search;
            let filterr = window.location.search;
            console.log(filter);
            console.log(page);
            if(filter){
                filter += `&page=${page}`
            }else{
                filter += `?page=${page}`
            }

            const { data } = await $axios(`product/${filter}`);
            // if(filterr){
            //     filterr += '&limit=10000'
            // } else{
            //     filterr += '&limit=10000'
            // }

            const response = await $axios(`product/${filterr}`)
            dispatch({
                type: "GET_COUNT",
                payload: response.data.rows.length
            })

           let action = {
               type: "GET_PRODUCTS",
               payload: data.rows,
           };
           console.log(response);
           dispatch(action)
        }catch(e){
            console.log(e);
        }
    }

    //! Update

    const getProductsToEdit = async (id) => {
        try{
            const response = await $axios.get(`product/${id}`)
            let action = {
                type: "GET_PRODUCTS_TO_EDIT",
                payload: response.data,
            }
            dispatch(action)
        }catch(e){
            console.log(e);
        }
    }

    const saveEditedProducts = async (editedProducts) => {
        try {
            await $axios.patch(`product/${editedProducts.id}`, editedProducts);
            getProducts();
            clearState();
        } catch (e) {
            console.log(e);
        }
    };

    const clearState = () => {
        let action = {
            type: "CLEAR_STATE",
            payload: null,
        };
        dispatch(action);
    };


    //! Delete
    const deleteProduct = async (id) => {
        try {
            await $axios.delete("/product/" + id);
            getProducts();
        } catch (e) {
            console.log(e);
        }
    };


    //! Для страницы деталей
    const getDetails = async (id) => {
        try {
            const response = await $axios(`product/${id}`);
            let action = {
                type: "GET_DETAILS",
                payload: response.data,
            };
            dispatch(action);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <productContext.Provider
        value={{
            addProducts,
            getProducts,
            getProductsToEdit,
            saveEditedProducts,
            deleteProduct,
            getDetails,
            productDetails: state.productDetails,
            productToEdit: state.productToEdit,
            product: state.product,
            countOfProducts: state.countOfProducts
        }}
        >
            {props.children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;