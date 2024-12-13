"use client";
import { defineChain } from "thirdweb/chains";
import { client } from "./client";
import { ConnectButton } from "thirdweb/react";

export default function Home() {
    const chain = defineChain(994873017)
    
    return (
        <>
            <ConnectButton 
            client={client} 
            chain={chain}  
            
            />
        </>
    );
}

