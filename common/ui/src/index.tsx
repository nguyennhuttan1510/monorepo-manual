// import React from 'react';

import { isEven } from "@my-package/utils"

interface ButtonProps {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const ButtonShare: (props: ButtonProps) => React.ReactElement = () => {
    console.log(isEven(4))
    return (
        <button>
            <h2>Button Share</h2>
        </button>
    );
};
// ButtonShare()
// const myFunc = () => {
//     console.log(isEven(4))
// }

// myFunc()
