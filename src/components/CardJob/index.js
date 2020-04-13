import React, { memo } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native'
import { BLUE } from '../../constants'

const styles = StyleSheet.create({
  card: {
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: BLUE,
    padding: 25,
    height: 200,
    marginBottom: 20
  },
  h1: {
    color: '#dbdbdb',
    fontSize: 18
  },
  h2: {
    color: '#6a676a',
    marginVertical: 15,
    fontSize: 13,
    letterSpacing: 0.92,
    flexGrow: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  h3: {
    color: '#cfcfcf',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 0.97
  },
  h4: {
    color: '#cfcfcf',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 1.17
  }
})

const CardJob = memo(({ item: { position, description, rate, owner }, onPress }) => {
  const { card, h1, h2, footer, h3, h4 } = styles
  const userSlice = owner.slice(0, 10)
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={card}>
        <Text style={h1}>{position}</Text>
        <Text style={h2} numberOfLines={5} ellipsizeMode="tail">
          {description}
        </Text>
        <View style={footer}>
          <Text style={h3}>{userSlice}</Text>
          <Text style={h4}>{rate}$</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
})

export { CardJob }
