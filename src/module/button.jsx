import React from 'react';

function Button({title, color='red'}) {
    return ( 
        <div>
            <button style={
                {
                    backgroundColor: 'red',
                }
            } className='button'>{title}</button>
        </div>
     );
}

export default Button;