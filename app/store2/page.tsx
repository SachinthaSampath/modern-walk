"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
    const router = useRouter();
    return (
        <div>
          <button onClick={()=>{
            router.push("/sub");
          }}>Go</button>  
        </div>
    );
};

export default Page;