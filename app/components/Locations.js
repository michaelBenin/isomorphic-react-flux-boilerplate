import React from 'react';
import LocationActions from '../actions/LocationActions';
import LocationStore from '../stores/LocationStore';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = LocationStore.getState();
    this.storeListener = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    LocationStore.listen(this.storeListener);
    LocationActions.fetchLocations(); // not needed if using alt.bootstrap
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.storeListener);
  }

  onStoreChange(state) {
    this.setState(state);
  }

  render() {
    if (this.state.error) {
      return (<div>Something is wrong</div>);
    }

    if (!this.state.locations.length) {
      return (<div>Loading ...</div>);
    }

    return (
      <ul>
        {this.state.locations.map((location) => {
          return (
            <li key={location.id}>
              <b>{location.name}</b>
              <FormattedRelative value={location.updatedAt} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Locations;
