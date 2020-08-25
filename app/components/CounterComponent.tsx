import React, {Dispatch} from 'react';
import {Text, Button, View} from 'react-native';
import {
  increamentCounter,
  decrementCounter,
  CounterAction,
} from '../actions/CounterActionsProvider';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = (state: number) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  onInc: () => dispatch(increamentCounter()),
  onDec: () => dispatch(decrementCounter()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CounterComponent = (props: PropsFromRedux) => {
  return (
    <View>
      <Text>{props.counter}</Text>
      <Button title="Add" onPress={props.onInc} />
      <Button title="Subtract" onPress={props.onDec} />
    </View>
  );
};

export default connector(CounterComponent);
