import React from 'react';
import './preview-collection.style.scss'
import CollectionItem from "../collection-item/collection-item.component"
const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, ind) => ind < 4 )
                // .map((item) => (
                //    <div key={item.id}>{item.name}</div> 
                // ))
                .map(({id, ...ItemProps}) => (
                    <CollectionItem key={id} {...ItemProps}/>
                ))
            }
        </div>
    </div>
);

export default PreviewCollection;