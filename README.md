# Learning React-Native notes

## creating app using expo framework

> \> npx create-expo-app@latest \<app-name> --template blank

without `--template blank` there will be a large content with lots of files which wouldn't be needed as you build your first project.

> [!CAUTION] 
> Open your emulator before running the application


## Core Components

### 1. View
```javascript
<View style={{ flex: 1, flexDirection: "row", backgroundColor: "plum" }}>
  <View style={{ width: 200, backgroundColor: "white" }}></View>
  <View style={{ flex: 1, backgroundColor: "black" }}></View>
</View>
```
Supporting `nesting`, `styling`, `layout` `using flexbox`, `touch handeling`, `accessability control`.

### 2. Text
```javascript
<View style={{ flex: 1, flexDirection: "row", backgroundColor: "red" }}>
  <View style={{ width: "50%", backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "black", fontSize: "50px" }}>Hello</Text>
  </View>
  <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white", fontSize: "50px" }}>World</Text>
  </View>
</View>
```
supporting `nesting`, `styling`, `touch handeling`.
### 3. Image
```javascript
<View style={{ flex: 1, backgroundColor: "red", paddingTop: 100 }}>
  <Image source={icon} style={{ width: "100%", height: 300 }} />
  <Image source={{ uri: "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU" }} style={{ width: "100%", height: 300 }} />
</View >
```
Not supoorting `nesting`.

### 4. ImageBackgrgound
```javascript
<View style={{ flex: 1, backgroundColor: "purple", paddingTop: 100 }}>
  <ImageBackground source={icon} style={{ flex: 1 }}>
    <Text style={{ color: "white" }}>Hello, mother father.</Text>
  </ImageBackground>
</View >
```
supporting: `nesting`.

### 5. ScrollView
> [!NOTE]
> Although `<View>` component is like `<div>` tag it's not scrolling automatically.
> So How can we view the entire content? Using `ScrollView` component.

> [!NOTE]
> ScrollView wraps the platform specific scrolling behaviour.

> [!CAUTION]
> ScrollView requires a bounded height to function properly.

```javascript
<ScrollView style={{ flex: 1, backgroundColor: "purple", padding: 30 }}>
  <Image source={icon} style={{ width: "100%", height: 300 }} />
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam provident inventore. Nesciunt expedita odio
    labore incidunt odit magni ab? Maiores doloribus eaque velit nam, dolore ipsum libero modi numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam provident inventore. Nesciunt expedita odio
    labore incidunt odit magni ab? Maiores doloribus eaque velit nam, dolore ipsum libero modi numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam provident inventore. Nesciunt expedita odio
    labore incidunt odit magni ab? Maiores doloribus eaque velit nam, dolore ipsum libero modi numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam provident inventore. Nesciunt expedita odio
    labore incidunt odit magni ab? Maiores doloribus eaque velit nam, dolore ipsum libero modi numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam provident inventore. Nesciunt expedita odio
    labore incidunt odit magni ab? Maiores doloribus eaque velit nam, dolore ipsum libero modi numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam provident inventore. Nesciunt expedita odio
    labore incidunt odit magni ab? Maiores doloribus eaque velit nam, dolore ipsum libero modi numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam provident inventore. Nesciunt expedita odio
    labore incidunt odit magni ab? Maiores doloribus eaque velit nam, dolore ipsum libero modi numquam.
  </Text>
  <Image source={icon} style={{ width: "100%", height: 300 }} />
</ScrollView >
```
The previous code doesn't show the end of the page properly because of the `padding` at `ScrollView`. To solve this issue we can remove the `padding` but it will make the content to overlap with the status-bar, a better solution would be to wrap `ScrollView` component inside `View` component.

```javascript
<View style={{ flex: 1, backgroundColor: "purple", padding: 30 }}>
  <ScrollView>
    ...
  </ScrollView>
</View>
```

### 6. Button (Allow users to trigger actions)

> [!NOTE]
> Button component has platform-specific rendering for ios and android. Sulry we can handle it using custom styling.

> [!CAUTION]
> Button is a self closing tag, unlike in HTML it takes no text.

```javascript
// enabeling and disabeling a button based on another button
<View style={{ flex: 1, backgroundColor: "purple", paddingTop: 50 }}>
  <Button
    title="press"
    color="red"
    disabled={state}
  />
  <Button
    title="toggle state"
    onPress={() => setState(!state)}
    color="black"
    style={{ padding: 20, backgroundColor: "red" }}
  />
</View >
```

### 7. Pressable
There are times when we need to triger actions on the press of other elements such as image or text.
> [!NOTE]
> Pressable is a wrapper component that detects verious stages oof press interactions on its defined childrean.

> [!TIP]
> You can create a custom Button using pressable, if Button design doesn't meet your app requirements.

> [!TIP]
> Pressable component supports several other events you can listen to:
> 1. onPressIn: called when a press is activated
> 2. onPressOut: called when the press gesture is deactivated.
> 3. onLonggPress: called when a press is held for longer than 500ms.
>
> The sequence of calling those triggers is as follows:
> - In case of long press
>   1. onPressIn
>   2. onLongPress
>   3. onPressOut
>
> - In case of normal press
>   1. onPressIn
>   2. onPressOut
>   3. onPress


```javascript
<View style={{ flex: 1, justifyContent: "center", paddingTop: 50 }}>
  <Pressable
    onPress={() => console.log("Pressend")}
    onPressIn={() => console.log("Pressed In")}
    onPressOut={() => console.log("unpressed")}
    onLongPress={() => console.log("You pressed me more than 500ms")}
  >
    <View style={{ padding: 20, backgroundColor: 'rgba(0, 0, 0, 1)', width: "50%", alignSelf: "center", borderRadius: "10px" }}>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "white" }}>Press Me</Text>
    </View>
  </Pressable>
</View >
```

### 8. Modal

Modal is a screen that overlays the app content to provide important information or prompt the user for a decision.

> [!WARNING]
> They are `purposefully interruptive` make sure you use them only when necessary.

Modal opening and closing tags act as a container and within it we define a `View` that represents the content to be presented.

> [!NOTE]
> Modal by default is always visable, so we need to control its visibility based on user interaction.

Highlighted props:
1. visible (can take some true/false value)
2. onRequestClose
3. animationType: {none(default, modal appears instantlly), slide(modal slide from the bottom), fade(the modal will fade into view)}
4. presentationStyle: {fullScreen(default), pageSheet(same as form sheet but stable on different device sizes), formSheet(provides similar UI as pageSheet but differ on larger ios devices)}

> [!TIP]
> It's recommeded to add the onRequestClose prop which is a handler triggered when the user press the back button on Android or dismisses the Modal with the gesture on ios, in either senarions you need to close the modal. (you should close the modal when it's dismissed through Hardware interaction)

> [!NOTE]
> presentationStyle only affects ios devices and not android.

```javascript
export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Pressable onPress={() => setModalVisibility(true)}>
        <View style={{ padding: 20, backgroundColor: 'midnightblue', alignSelf: "center", borderRadius: "10px" }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "white" }}>Press Me</Text>
        </View>
      </Pressable>
      <Modal
        visible={modalVisibility}
        onRequestClose={() => setModalVisibility(false)}
        animationType="none"
        presentationStyle="fullScreen"
      >
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "midnightblue" }}>
          <Pressable onPress={() => setModalVisibility(false)}>
            <View style={{ padding: 20, backgroundColor: 'black', alignSelf: "center", borderRadius: "10px" }}>
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "white" }}>Close Me</Text>
            </View>
          </Pressable>
        </View>
      </Modal>
    </View >
  )
}
```
---

### 9. StatusBar

Allows you to control the application's StatusBar.
The statusbar is the zone, typically at the top of the screen, that displays the current time, wifi and network info, bttary level and other status icons.

Highlighted props:
1. backgroundColor
2. barStyle
3. hidden (to hide the statusBar, can take some true/false value)

> [!NOTE]
> `backgroundColor` prop is specific for `Android`. but we can just the font color on both platforms using `barStyle` prop.

> [!NOTE]
> barStyle="default" (default value) this corresponds to `dark text on ios` and `light text on android`.
> barStyle="dark-content" gives us black text on both the platforms
> barStyle="light-content" gives us white text on both the platforms

> [!TIP]
> depending on the application's background color, choose the appropriate value to ensure good visibility and contrast.

```javascript
import { useState } from "react";

import { View, Text, Pressable, StatusBar } from "react-native";

export default function App() {
  const [statusBarVisibility, setStatusBarVisibility] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", paddingTop: 50 }}>
      <StatusBar hidden={statusBarVisibility} />
      <Pressable onPress={() => setStatusBarVisibility(!statusBarVisibility)}>
        <View style={{ padding: 20, backgroundColor: 'black', alignSelf: "center", borderRadius: "100vh" }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "white" }}>Toggle StatusBar visibility</Text>
        </View>
      </Pressable>
    </View >
  )
}

```
---

### 10. ActivityIndicator

Displays a circular loading indicator. It's used to inform users about the status of an ongoing process, such as loading the app, submitting a form, or saving changes.

Highlighted props:
1. size="small" (default value)
2. color
3. animating (contols the visability of the component, can take some true/false value)

> [!NOTE]
> The color prop uses the system accent default color for android and a shade of gray `#999999` for ios, but you can customize it.

```javascript
<View style={{ flex: 1, justifyContent: "center", paddingTop: 50 }}>
  <ActivityIndicator size="large" color="blue" animating={activityIndicatorVisibility} />
  <Pressable onPress={() => setActivityIndicatorVisibility(!activityIndicatorVisibility)}>
    <View style={{ padding: 20, backgroundColor: 'black' }}>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "white" }}>Toggle ActivityIndicator visibility</Text>
    </View>
  </Pressable>
</View >
```

---

### 11. Alert

It serves more as an API than a typical component. You invoke methods that generate UI elements.

> [!TIP]
> Alert.alert(title, msg, array[{text: "", onPress: function}]) launches an alert dialog with specified title(Mandatory) and message(optional), and you can also add a list of buttons(optional).

> [!WARNING]
> In ios you can specify any number of button, but in android the limit is 3.

The shape of alert could have slight difference between platforms.

```javascript
<View style={{ flex: 1, justifyContent: "center", paddingTop: 50 }}>
  <Pressable onPress={() => Alert.alert("Alert title", "Alert msg", [
    {
      text: "YES",
      onPress: () => console.log("YES"),
    },
    {
      text: "NO",
      onPress: () => console.log("NO"),
    }
  ])}>
    <View style={{ padding: 20, backgroundColor: 'black' }}>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "white" }}>Toggle ActivityIndicator visibility</Text>
    </View>
  </Pressable>
</View >
```
---
---
## Styling

Inline styling is not a recommended approach in react-native, and rarely could be found in the code base. The preferred method is to use the StyleSheet API.

### 1. Why using StyleSheet API better ?
> - By moving the styles away from the render function, you make the code easier to read and understand.
> - Naming the styles adds meaning to the low level components in the render function.
> - Makes the code reusable and easier to maintain.
--- 
> [!NOTE]
> - The keys in the object passed to the create function can have any name but it's recommended to have sematic meanings.
> - Each value must be an object contains (key, value) pairs similar to CSS properties but in javascript.

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      // Now we expect this Text to be the title of the page by just using a meaningful name.
      <Text style={styles.title}>Welcome</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "midnightblue"
  },
  title: {
    color: "gray",
    fontSize: 50,
    fontWeight: "bolder"
  }
});
```

### 2. Applying multiple styles

1. You can apply multiple styles to a component using the array syntax.
2. When mergin styles the value from the last style in the array takes precendance.

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      // the background color from box will be applied, (refer to point 2 above)
      <View style={[styles.lightBox, styles.box]}> 
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={[styles.box, styles.darkBox]}>
        <Text style={styles.title}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "midnightblue"
  },
  box: {
    width: 300,
    height: 200,
    padding: 10,
    backgroundColor: "pink",
  },
  lightBox: {
    backgroundColor: "white",
  },
  darkBox: {
    backgroundColor: "black",
  },
  title: {
    color: "gray",
    fontSize: 50,
    fontWeight: "bolder"
  }
});
```

### 3. Box models

elements' box model in react native is the same as it was in react, margin > border > padding > conntent.

> [!CAUTION]
> All dimensions in react-native are unitless and represent density independant pixels.
> Parent components can use percentage values.

> [!CAUTION]
> borderRadius is applicable to the view component across both platforms, but for the text component it only applies to the android. The solution is to wrap your text using View component and apply the borderRadius to the View component instead.

> [!TIP]
> There're 2 more properties in react-native related to padding and margin which are {padding-margin}{Horizonal-Vertical} to specify {left, right-top, bottom} .

> [!TIP]
> box-shadow: h-offset v-offset blur spread color (css style for box shadow) \n
> But in react native there are 4 different properties to specify those values while the h-offset and v-offset are grouped in one property.
> 1. shadowColor: "orange", # color
> 2. shadowOffset: {\
>    width: 0, # horizonal offset +-ve \
>    height: 300, # vertical offset +-ve \
>   },
> 3. shadowOpacity: 1, # transparency value(sperad in css) [0 (transparent), 1 (complete opacity)]
> 4. shadowRadius: 20 # blur radius, a larger value creates a larger and lighter blur

> [!CAUTION]
> There are no common styles to apply shadows on both in both ios and android, to add box shadows in android we have to use the elevation property which makes use internally the elevation android api.\
> androidBoxShadow: { \
>   elevation: 10, \
> }

> [!NOTE]
> shadowColor is the only box shadow property that works on both ios and android.

### 4. Inheritance
> [!CAUTION]
> There is no style inheritance from View to nested Text, but there is from Text to nested Text components.

## Flex-box Layout

> [!NOTE]
> when working with flex-box we encounter 2 axes (main axis, cross axis).
> In react-native the main-axis is from top -> bottom while the cross axis is from left -> right.

> Once you grasp the concepts of Flexbox, you'll have a solid understanding of how layouts are created in react-native.

> Flex container takes only the space required by its childrean.

> justifyContent propery align the items based on the main axis.

> alignItems property align the items based on the cross axis, same as justifyContent but on the other direction.

> [!TIP]
> alignItems: "baseline",makes the text inside each item is aligned, it doesn't matter how tall or what the paddings on each of these items.
> ![baseline value for alignItems](<assets/baseline value for alignItems.png>)

> [!NOTE]
> The default value for `alignSelf` property isnot `stretch` but `auto`, and it interits its value from  `alignItems` property of the parent flex continer.

> [!NOTE]
> alignItems: aligns indevidual items along the cross-axis
> alignContent: aligns lines of content along the cross-axis
> A very important condition to use alignContent, is that there must be multiple rows or columns exist within the container.

> [!NOTE]
> flex property in react native is the same as it's in css. It's just used to distribute the remaining space in the parent container on the elements applying it, but makes flexShrink to 1 and flexBasis to 0.

> [!CAUTION]
> The available space is distributed proportinally wiht respect to the flex basis and not (width & height) properties.

> [!NOTE]
> flexShrink default value is 0 and not 1 like in css. It works only when the combined size of  flex items exceeds the container's size. Note that also the flexShrink factor is relative to other items within the container.

> [!NOTE]
> flex vs flexGrow
When flex is set to a positive number, it is equivalent to setting flexGrow with the
same positive number \
flex also implicitly sets flexShrink to 1 and flexBasis to 0 \
flex: positive number>
flexGrow: '<positive number»', flexShrink: 1, flexBasis: 0]

> [!CAUTION] "FlexBasis: 0" I don't  know if its true or not, but I will write it anyway to modify it when I became pretty sure what it does.
> flexBasis isn't the same as it's in css, flexBasis: 0 makes the item to be exactly 0 not min-content like in css.

> [!NOTE]
> `position: "relative"` is the default value of position attribute.\
> Every element by default has `position: "relative"`.
