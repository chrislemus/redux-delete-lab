import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  renderBands = () =>
    this.props.bands.map((band, idx) => (
      <Band key={idx + band} band={band} deleteBand={this.props.deleteBand} />
    ));
  render() {
    console.log(this.props.bands);
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
  addBand: (name) => dispatch({ type: 'ADD_BAND', name }),
  deleteBand: (id) => dispatch({ type: 'DELETE_BAND', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
