import React from 'react';

const Styles = {

    listStyles: {
        color:'white',
        fontSize: '20px',
        backgroundColor: '#AB6550',
        marginTop: '10px',
        padding: '5px'
    }
}

const listContainer = ({listContainer}) => {
return (
    <div>

<h5 style={Styles.listStyles}>
    {listContainer}
</h5>

    </div>
	
);
}

export default listContainer;