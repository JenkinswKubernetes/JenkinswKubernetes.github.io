import React, {Component} from 'react';
import ShopData from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
class ShopPage extends Component {
    constructor(props){
        super();
        this.state = {
            collections: ShopData
        }
    }
    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <PreviewCollection key={id} {...otherCollectionsProps} />
                    ))
                }
            </div>
        )
    }
};
export default ShopPage;