import React, {Component} from 'react'
import {connect} from 'react-redux'
import MapRow from '../MapRow'

export class Map extends Component{
  render(){
    return (
      <div
        style={{
          position: 'relative',
          top: '0px',
          left: '0px',
          width: '255px',
          height: '255px',
          margin: '0px',
          border: '4px solid white',
        }}
      >
      {
         this.props.matrix.matrixArray.map( (row,index) => <MapRow key={index} matrix={row} /> )
      }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    matrix: state.map,
  }
}

export default connect(mapStateToProps)(Map)