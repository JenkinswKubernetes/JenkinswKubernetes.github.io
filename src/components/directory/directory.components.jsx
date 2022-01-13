import React, {Component} from 'react';
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'pan dulce',
                    imageUrl: '../../../assets/images/pan.jfif',
                    id: 1,
                    linkUrl: 'shop/pan'
                  },
                  {
                    title: 'agua',
                    imageUrl: '../../../assets/images/agua.jpg',
                    id: 2,
                    linkUrl: 'shop/agua'
                  },
                  {
                    title: 'sabritas',
                    imageUrl: '../../../assets/images/sabritas.jpg',
                    size: 'large',
                    id: 3,
                    linkUrl: 'shop/sabritas'
                  },
                  {
                    title: 'fruta',
                    imageUrl: '../../../assets/images/fruta.jpeg',
                    id: 4,
                    linkUrl: 'shop/fruta'
                  },
                  {
                    title: 'verdura',
                    imageUrl: '../../../assets/images/verdura.jfif',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/verdura'
                  }
                  
            ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
               {
                   this.state.sections.map(({ id, ...otherSectionsProps}) => (
                       <MenuItem key={id} {...otherSectionsProps}/>
                   ))
               }
            </div>
        )
    }
    
}
  

export default Directory;