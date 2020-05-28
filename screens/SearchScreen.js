import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <FlatList
        data = {this.state.allTransactions}
        renderItem ={({item})=>(
          <View style = {{borderBottomWidth:2}}>
          <Text>
            {"Book ID" + item.bookId}
          </Text>

          <Text>
            {"Student ID" + item.studentId}
          </Text>

          <Text>
            {"Transaction Date" + item.transactionDate}
          </Text>

          <Text>
            {"Transaction Type" + item.transactionType}
          </Text>
          </View>
        )}
        keyExtracter = {(item,index) => index.toString()}
        onEndReached = {this.fetchMoreTransaction}
        onEndReachedThreshold = {0.7} />
      );
    }
  }
