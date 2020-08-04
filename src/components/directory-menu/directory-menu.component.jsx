import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-items/menu-item.component';

import './directory-menu.styles.scss';

const DirectoryMenu =({sections}) => (
  <div className = 'directory-menu'>
  {
      sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key = {id} {...otherSectionProps}/>
      ))
  }
</div>
)

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);