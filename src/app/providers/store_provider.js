"use client"
import React from 'react'
import store from "../stores/store";
import { Provider } from "react-redux";

export default function StoreProvider({children}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
