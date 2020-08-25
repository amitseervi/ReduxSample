import React, {Dispatch} from 'react';
import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
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
  console.log('Hello world');
  console.dir(props);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{props.counter}</Text>
      <View style={styles.counterButtonContainer}>
        <TouchableOpacity
          style={[styles.counterActionContainer, styles.plusActionContainer]}
          onPress={props.onInc}>
          {/* <Button title="Add" onPress={props.onInc} /> */}
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.counterActionContainer, styles.minusActionContainer]}
          onPress={props.onDec}>
          {/* <Button title="Subtract" onPress={props.onDec} /> */}
          <Text>Subtract</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  counterActionContainer: {
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    margin: 10,
  },
  plusActionContainer: {
    backgroundColor: '#5999ff',
  },
  minusActionContainer: {
    backgroundColor: '#ff6c59',
  },
});

export default connector(CounterComponent);
