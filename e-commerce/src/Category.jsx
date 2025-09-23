import React from 'react'

function Category({category, setCategoryData}) {
    const item = category.map((value, idx) => {
        return (
            <li onClick={() => setCategoryData(value)} key={idx} className='ml-[10px] p-2 bg-[#ccc] mb-2 cursor-pointer'>{value}</li>
        )
    })

  return (
    <div>

        <ul>
          {item}
        </ul>
    </div>
  )
}

export default Category