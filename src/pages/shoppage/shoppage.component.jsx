import React from 'react';

import SHOP_DATA from './shopdata';
import CollectionPreview from '../../components/collections-preview/collections-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return(
            <div className = 'shop-page'>
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview key = {id} {...otherCollectionsProps} />
                    ))
                 }
            </div>
        );
    }
}

export default ShopPage;