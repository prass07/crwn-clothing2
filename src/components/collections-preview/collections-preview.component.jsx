import React from 'react';

import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-items/collection-item.component';

import './collections-preview.styles.scss';

const CollectionPreview = ({title, items, history, match}) =>{
    return(
        <div className = 'collection-preview'>
            <h1 
                className = 'title'
                onClick = {() => history.push(`${match.path}/${title.toLowerCase()}`)}
            >
                {title.toUpperCase()}
            </h1>
            <div className = 'preview'>
                {items
                    .filter((item,idx)=> idx < 5 )
                    .map(item =>(
                        <CollectionItem key = {item.id} item = {item} />
                    ))
                }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);