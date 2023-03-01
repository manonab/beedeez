/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from "react";
import {Image, Platform, View} from "react-native";
import {RenderStations} from "../components/stations/station-list";
import {HeaderStation} from "../components/stations/header";

import {useStyles} from "../hooks/useStyles";
import {bikeIllustration} from "../utils";
import {useGetStations} from "../hooks/useStations";
import {Station} from "../models/station";

export const StationList: React.FC = () => {
  const styles = useStyles();
  const {data} = useGetStations();
  const [query, setQuery] = useState<string>("");
  const [typeBike, setTypeBike] = useState<string>("");

  const filteredData = useMemo<Station[]>(() => {
    if (!data) {
      return [];
    }
    if (typeBike === "ebike") {
      return data.filter(item =>
        item.num_bikes_available_types?.map(bike => bike.ebike > 1),
      );
    } else if (typeBike === "mechanical") {
      return data.filter(item =>
        item.num_bikes_available_types?.map(bike => bike.mechanical > 1),
      );
    }
    if (query.trim() === "") {
      return data;
    } else {
      return data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
    }
  }, [data, query, typeBike]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: bikeIllustration,
        }}
        resizeMode={Platform.OS === "web" ? "cover" : "contain"}
        style={{width: "100%", height: 300}}
      />
      <HeaderStation
        query={query}
        setQuery={setQuery}
        setTypeBike={setTypeBike}
      />
      <RenderStations filter={filteredData} key={query} />
    </View>
  );
};
