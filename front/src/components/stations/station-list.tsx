import React, {useState} from "react";
import {View, FlatList, Platform, ActivityIndicator} from "react-native";
import {Station} from "../../models/station";
import {StationCards} from "./station";

interface Props {
  filter: Station[];
}

export const RenderStations: React.FC<Props> = ({filter}: Props) => {
  const [displayedData, setDisplayedData] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEndReached = () => {
    if (!loading && displayedData.length < filter.length) {
      setLoading(true);
      const newItems = filter.slice(
        displayedData.length,
        displayedData.length + 20,
      );
      setDisplayedData([...displayedData, ...newItems]);
      setLoading(false);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{marginTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={displayedData.length > 0 ? displayedData : filter.slice(0, 20)}
        numColumns={Platform.OS === "web" ? 3 : 2}
        keyExtractor={(item: Station) => item.id}
        horizontal={false}
        onEndReached={handleEndReached}
        ListFooterComponent={renderFooter}
        showsHorizontalScrollIndicator={true}
        onEndReachedThreshold={0.1}
        renderItem={({item, index}) => (
          <StationCards station={item} key={`item-${index}`} />
        )}
      />
    </View>
  );
};
