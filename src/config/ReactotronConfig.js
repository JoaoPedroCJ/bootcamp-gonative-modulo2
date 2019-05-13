import Reactotron, { asyncStorage } from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "192.168.1.7" })
    .useReactNative()
    .use(asyncStorage())
    .connect();

  console.tron = tron;

  tron.clear();
}
