import React from "react";
import ScreenShot from './ScreenShot';

function Gallery() {
    const styles = {
    listBox: {
    width: '100%',
    paddingTop : '30px',
    backgroundColor: 'green',
    textAlign: 'center',
    },
}
return (
    <div style={styles.listBox}>
        <ScreenShot/>
    </div>
    );
}

export default Gallery;