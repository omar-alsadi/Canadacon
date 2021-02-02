import React from "react";
import { StateProvider } from './src/components/StateProvider'
import "firebase/auth";
import "firebase/firestore";

export const wrapRootElement = ({ element }) => {

    return (
        <StateProvider>
            {element}
        </StateProvider>
    )
}