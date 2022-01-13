import React from  'react'
import './menu-item.style.scss'

import {withRouter} from "react-router-dom"


const MenuItem = ({title, imagenUrl, id, history, linkUrl, match}) => (
    <div className='menu-item'
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image'
        style={{
            backgroundImage: `url(${imagenUrl})`
        }}></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);