import { useFocusEffect, useRouter } from "expo-router";
import { useSelector } from "react-redux";

export default function Page() {
  const { isConnected_ } = useSelector((state) => state.auth);

  const router = useRouter();

  useFocusEffect(() => {
    if (isConnected_) {
      router.replace('/home'); // Redirect to signup page
    } else {
      router.replace('/signup'); // Redirect to home page
    }
  });
}
