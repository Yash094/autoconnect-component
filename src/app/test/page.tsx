"use client";
import { defineChain } from "thirdweb/chains";
import { client } from "../client";
import { useAutoConnect } from "thirdweb/react";

export default function Home() {
    const { data: autoConnected, isLoading, error, isError } = useAutoConnect({
        client,
        timeout: 1,
      });
    console.log(autoConnected, isLoading, error, isError)
    return (
        <>
            <></>
        </>
    );
}

