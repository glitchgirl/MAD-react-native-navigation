import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
}