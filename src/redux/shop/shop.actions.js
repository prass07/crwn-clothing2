import ShopActionTypes from './shop.types';


export const updateCollections = ( collectionMap ) => ({
    type: ShopActionTypes.UPDATECOLLECTIONS,
    payload: collectionMap
});