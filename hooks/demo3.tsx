import { useEffect, useState } from "react";

const Demo3 = () => {

    const [user, setUser] = useState({name:'happy', age:new Date().getMilliseconds()});
    console.log('rendering demo 3 value of age: ' + user.age);
    const updateUser = (user:any) => {
        setUser(old => ({name : old.name, age: user.age}));
    }

    useEffect(() => {
        console.log('use effect')
    })

    return <>
                <div className="bg-slate-600 p-2 inline-block" onClick={() => {updateUser({age:new Date().getMilliseconds()})}}>Click Me</div>
                <div>{user.name}</div>
                <div>{user.age}</div>
            </>
}
export default Demo3;


///  here in this example

// 1. Demo3 component has a state name is user. There is a method to update this state is setUser
// 2. Here is a useEffect hook and a useState hook 
// 3. Use state hook is assiging default values to user
// 4. in return method there is a button and two div displaying user name and user age
// 5. On click of button we are updating component state
// 6. On state update who component re-renders
// 7. We can see that on re-render component state preserved 
// 8. We can also observe useEffect is running on every re-render
// 9. If you want useEffect do not re run on state update of component you have to add dependencies as second argument to seEffect hook call 