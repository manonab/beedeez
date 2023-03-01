import React, {useState} from "react";
import {View, TextInput, Pressable, Text} from "react-native";
import {useSignOut} from "../../hooks/useSignOut";
import {useStyles} from "../../hooks/useStyles";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  setTypeBike: (typeBike: string) => void;
}
export const HeaderStation: React.FC<Props> = ({
  query,
  setQuery,
  setTypeBike,
}: Props) => {
  const {signout} = useSignOut();
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const style = useStyles();
  return (
    <View style={style.wrapHeader}>
      <TextInput
        style={style.searchInput}
        onChangeText={text => setQuery(text)}
        value={query}
        placeholder="Search"
      />
      <View style={style.filterBox}>
        <Pressable onPress={toggleFilterMenu} style={style.disconnectButton}>
          <Text style={style.disconnectText}>Filter</Text>
        </Pressable>

        {showFilterMenu && (
          <View style={style.innerBox}>
            <Pressable onPress={() => setTypeBike("ebike")}>
              <Text style={style.filterText}>Ebike</Text>
            </Pressable>
            <Pressable onPress={() => setTypeBike("mechanical")}>
              <Text style={style.filterText}>Mechanical</Text>
            </Pressable>
          </View>
        )}
      </View>
      <Pressable onPress={() => signout()} style={style.disconnectButton}>
        <Text style={style.disconnectText}>Log out</Text>
      </Pressable>
    </View>
  );
};
