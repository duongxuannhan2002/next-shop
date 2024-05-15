// context.js
"use client"

import React, { createContext, useContext, useState } from 'react';

// Tạo Context
const MyContext = createContext();

// Tạo Provider
export const MyProvider = ({ children }) => {
  // State để lưu trữ giá trị trong Context
  const [check, setCheck] = useState(false);

  // Hàm để cập nhật giá trị trong Context
  const updateCheck = () => {
    setCheck(!check);
  };

  return (
    <MyContext.Provider value={{ check, updateCheck }}>
      {children}
    </MyContext.Provider>
  );
};

// Hook để sử dụng Context
export const useMyContext = () => useContext(MyContext);
