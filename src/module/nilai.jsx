import React from 'react';

export default function Nilai({nama, data}) {
    console.log('nama', nama)
    console.table(data)
    return (  
        <React.Fragment>
            <h2>{nama}</h2>
            <ul>
                {/* <li>{data[0]}</li>
                <li>{data[1]}</li>
                <li>{data[2]}</li>
                <li>{data[3]}</li>
                <li>{data[4]}</li>
                <li>{data[5]}</li> */}

                {data?.map((item, index) => {
                    return (
                            <li>Nilai Ujian Ke {index + 1} adalah {item / 5}</li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}
