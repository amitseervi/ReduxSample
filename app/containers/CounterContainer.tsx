import {
  increamentCounter,
  decrementCounter,
} from '../actions/CounterActionsProvider';
import {CounterComponent} from '../components/CounterComponent';
import {store} from '../store/Store';

// const mapStateToProps = (state: number) => ({
//   counter: state,
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   incCounter: () => dispatch(increamentCounter()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

// export const counterContainer = () => {
//   return CounterComponent({
//     counter: store.getState(),
//     decCounter: () => {
//       store.dispatch(decrementCounter());
//     },
//     incCounter: () => {
//       store.dispatch(increamentCounter());
//     },
//   });
// };
