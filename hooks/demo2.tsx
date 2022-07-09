import { useEffect, useState } from "react";

const Demo2 = () => {

    const [age, setAge] = useState(new Date().getMilliseconds());
    const [name, setName] = useState('name');

    console.log('age: ' + age);
    console.log('name: ' + name);

    const updateAge = (age:any) => {
        setAge(age);
    }

    const updateName = (name:any) => {
        setName(name);
    }


    // useEffect without dependencies  
    // This will render every time component re-render 
    useEffect(() => {
        console.log('use effect')
    })

    // useEffect with dependencies  
    // This will render only when age will update
    useEffect(() => {
        console.log('run this use effect only on update age')
    }, [age])



    return <>
            <div className="bg-slate-600 p-2 inline-block cursor-pointer" 
                onClick={() => {updateAge(new Date().getMilliseconds())}}>
                Update Age
            </div>
            <br />
            <div className="bg-slate-600 p-2 inline-block cursor-pointer" 
                onClick={() => {updateName(' A ' + new Date().getMilliseconds())}}>
                    Click Me
            </div>

            <div>{name}</div>
            <div>{age}</div>
            </>
}
export default Demo2;