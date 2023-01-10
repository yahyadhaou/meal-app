import { createContext } from "react";

export const FavoritesContext=createContext({
    ids:[],
    addFavorites:(id)=>{},
    removeFavorites:(id)=>{},
});
 function FavoritesContextProvider({children}){
return <FavoritesContextProvider>{children}</FavoritesContextProvider>
 }
 export default FavoritesContextProvider
