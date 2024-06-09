import { View, Text, Button } from 'react-native'
import React from 'react'

const Aisle = ({setViewAisle, aisleInfo}) => {
    return (
        <View>
            <Button 
                title='X'
                color="#fff"
                onPress={setViewAisle(false)}
            />
            {aisleInfo.map((aisleItem: { itemName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }, index)=>{
                return (
                    <Text key={index}>{aisleItem.itemName}</Text>
                )
            })}
        </View>
    )
}
export default Aisle