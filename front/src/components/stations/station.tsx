import React from "react";
import {Text, View} from "react-native";
import {useStyles} from "../../hooks/useStyles";
import {Station} from "../../models/station";

interface Props {
  station: Station;
}
export const StationCards: React.FC<Props> = ({station}: Props) => {
  const style = useStyles();
  return (
    <View key={station.id} style={style.container}>
      <View style={style.card}>
        <View style={style.cardContent}>
          <Text style={style.cardTitle}>{station.name}</Text>
          <Text style={style.cardText}>
            Available bikes: {station.num_bikes_available}
          </Text>
        </View>
      </View>
    </View>
  );
};
