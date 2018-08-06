import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import pacman_img from '../../image/G1.gif'
import {handleKeyDown} from './movement'

export class Pacman extends Component {

    componentDidMount(){
        window.addEventListener('keydown', (e) => {
            this.props.handleKeyDown(e);
        })
    }

    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: this.props.pacman.position[1],
                    left: this.props.pacman.position[0],
                    backgroundImage: `url('${pacman_img}')`,
                    width: '54px',
                    height: '54px',
                }}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        pacman: state.pacman,
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleKeyDown: handleKeyDown
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Pacman)