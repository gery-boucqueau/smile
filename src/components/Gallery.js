import React from "react";
import ScreenShot from './subComponents/ScreenShot';

function Gallery() {
    const styles = {
        container: {
            display: 'flex',
            height: '25%',
            width: 'auto',
            alignItems: 'center',
            flexDirection: 'column',
        },
        label: {
            fontWeight: 'normal'
        }
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.label}>MY GALLERY</h2>
            <ScreenShot/>
        </div>
    );
}

export default Gallery;