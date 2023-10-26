import useStore from "../../useStore"
import { View, Text } from 'react-native'

type Props = {}

const Home = (props: Props) => {

  const id = useStore((state) => state.userId)

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>seu id é: {id}</Text>
      </View>
    </>
  )
}

export default Home