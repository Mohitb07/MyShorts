import axios from "axios";
import React, {useEffect, useState} from "react";
import { getNewsAPI, getSourceAPI } from "./api";

export const NewsContext = React.createContext();

const Context = ({children}) => {

    const [news, setNews] = React.useState([]);
    const [category, setCategory] = React.useState("general");
    const [index, setIndex] = React.useState(1);
    const [sourceNews, setSourceNews] = React.useState();
    const [darkTheme, setDarkTheme] = React.useState(true);
    
    const fetchNews = async(reset = category) => {
        const {data} = await axios.get(getNewsAPI(reset));
        setNews(data)
        setIndex(1)
    }

    const fetchSourceNews = async() => {
        try {
            const {data} = await axios.get(getSourceAPI(sourceNews));
            setNews(data)
            setIndex(1)
        }catch(err){
            console.log(err);
        }
    }
    
    
    useEffect(() => {
        fetchNews();
    }, [category]);

    useEffect(() => {
        fetchSourceNews();
    }, [sourceNews]);
    
    return (
        <NewsContext.Provider value={{news, index, setIndex, fetchNews, setCategory, setSourceNews, darkTheme, setDarkTheme}}>
            {children}
        </NewsContext.Provider>
    )
}

export default Context;