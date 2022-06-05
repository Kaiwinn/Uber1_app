import { FlatList, TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://gcdnb.pbrd.co/images/B5M1k9Sm998t.png',
    screens: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://gcdnb.pbrd.co/images/dpFeYhFBuQrl.png',
    screens: 'EatsScreen',
  },
]

const NavOptions = () => {
  const navigation = useNavigation()
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screens)}
          style={tw`p-2 pt-4  pb-4 m-2 bg-gray-200 w-40 ml-6`}
        >
          <View>
            <Image
              style={{ width: 130, height: 130, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 ml-4 text-lg font-bold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 ml-6 mt-4 `}
              name="arrowright"
              color="white"
              type="antdesign"
            ></Icon>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
