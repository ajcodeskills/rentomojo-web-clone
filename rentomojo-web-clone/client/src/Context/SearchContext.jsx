import React from 'react'
export const SearchContext = React.createContext();
export function SearchContextData({children}) {
    const [data, setData] = React.useState([])
    const set = (val) => {
        setData(val)
    }
    const value = {
        data, 
        set,
    }
    return <SearchContext.Provider value = {value}>{children}</SearchContext.Provider>
}


