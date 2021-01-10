import React from "react";
import './directory.styles.scss'
import MenuItem from '../../components/menu-item/menu-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
const Directory = ({sections})=>(
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherProps})=>(
                        <MenuItem key={id} {...otherProps} />
                    ))
                }
            </div>
        )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)