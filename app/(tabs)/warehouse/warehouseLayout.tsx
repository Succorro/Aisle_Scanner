import React, { useState } from 'react';
import { FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AisleBox from '@/components/AisleBox';
import Aisle from '@/app/(tabs)/warehouse/Aisle';
const data = [
  {
    id: 1,
    aisleNumber: 101,
    aisleItems: [
      {
        itemNumber: 30669,
        itemName: 'banana',
        quantity: 232,
      },
      {
        itemNumber: 1,
        itemName: '2% Milk',
        quantity: 100,
      }
    ]
  },
  {
    id: 2,
    aisleNumber: 201,
    aisleItems: [
      {
        itemNumber: 2,
        itemName: 'Whole Milk',
        quantity: 200,
      },
      {
        itemNumber: 12,
        itemName: 'Reduced Fat Milk',
        quantity: 150,
      }
    ]
  },
]

const WarehouseLayout = () => {
  const [selectedAisle, setSelectedAisle] = useState(0)
  const [viewAisle, setViewAisle] = useState(false)

  const handleAisleBoxClick = (aisleId: React.SetStateAction<number>) => {
    setSelectedAisle(aisleId)
    setViewAisle(true)
  }

  if(viewAisle){
    return (
      <Aisle setViewAisle={setViewAisle} aisleInfo={data[selectedAisle].aisleItems}/>
    )
  }
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => <AisleBox aisle={item} onClickAisle={handleAisleBoxClick} selectedAisle={selectedAisle} />}
        numColumns={1} // Adjust the number of columns as needed
        extraData={selectedAisle}
      />
    </SafeAreaView>
)};
export default WarehouseLayout;