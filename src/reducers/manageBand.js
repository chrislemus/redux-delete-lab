export default function manageBand(
  state = {
    bands: [],
  },
  action
) {
  switch (action.type) {
    case 'ADD_BAND':
      const id = state.bands.length + action.name;
      return {
        ...state,
        bands: [...state.bands, { name: action.name, id: id }],
      };
    case 'DELETE_BAND':
      console.log(action);
      return { bands: state.bands.filter((band) => band.id != action.id) };
    default:
      return state;
  }
}
