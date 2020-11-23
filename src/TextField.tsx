import React, { useState, useRef } from 'react';

interface Person {
    firstName: string, 
    lastName: string
}

interface Props {
    text?: string, 
    ok?: boolean, 
    i?: number, 
    fn?: (bob: string) => string, 
    obj?: Person, 
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, 
    variant?: boolean
}
export const TextField:React.FC<Props> = ({ handleChange, obj, text, variant }) => {

    interface TextNode {
        text: string
    }
   
    const [count, setCount] = useState<TextNode | boolean>(variant ? true : false); 
    if(variant === false){
         setCount(true)
    }
    const inputRef = useRef<HTMLInputElement>(null);
    const devRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={devRef}>
            <input ref={inputRef}/>
        </div>
    )
}
