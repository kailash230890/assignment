import React, { useState } from 'react'
import Select from 'react-select'

const HomePage = () => {

    let contentList = [
        {
            value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. It has survived not only five centuries,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the Aldus PageMaker including versions of Lorem Ipsum.release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",

            label: "Dropdown Show"
        },
        {
            value: "",
            label: "Dropdown Hide"
        }
    ];

    const [result, setResult] = useState(contentList.value);

    const myHandler = e => {
        setResult(e.value);
    }

    return (
        <div className='container'>
            <Select options={contentList} onChange={myHandler} className="mt-3 col-md-2 col-offset-4" />
            <p className="mt-2"> {result}</p>
        </div>
    )
}

export default HomePage;