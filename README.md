# Learning React-Native notes

<!-- TOC -->

- [Learning React-Native notes](#learning-react-native-notes)
  - [creating app using expo framework](#creating-app-using-expo-framework)
  - [Core Components](#core-components)
    - [View](#view)
    - [Text](#text)
    - [Image](#image)
    - [ImageBackgrgound](#imagebackgrgound)
    - [ScrollView](#scrollview)
    - [Button (Allow users to trigger actions)](#button-allow-users-to-trigger-actions)
    - [Pressable](#pressable)
    - [Modal](#modal)
    - [StatusBar](#statusbar)
    - [ActivityIndicator](#activityindicator)
    - [Alert](#alert)
    - [SafeAreaView](#safeareaview)
  - [Styling](#styling)
    - [Why using StyleSheet API better ?](#why-using-stylesheet-api-better-)
    - [Applying multiple styles](#applying-multiple-styles)
    - [Box models](#box-models)
    - [Inheritance](#inheritance)
  - [Flex-box Layout](#flex-box-layout)
  - [Dynamic User Interfaces](#dynamic-user-interfaces)
    - [Address responsive styles based on the device size](#address-responsive-styles-based-on-the-device-size)
    - [Platform specific code (Address responsiveness based on the device platform)](#platform-specific-code-address-responsiveness-based-on-the-device-platform)
      - [Platform module (When small part of the component is platform specific)](#platform-module-when-small-part-of-the-component-is-platform-specific)
      - [Platorm-specific file extensions (More complex senarios)](#platorm-specific-file-extensions-more-complex-senarios)
  - [Pokemon cards image crop issue](#pokemon-cards-image-crop-issue)
  - [Lists](#lists)
    - [Using `map` function](#using-map-function)
    - [FlatList component](#flatlist-component)
      - [Cababilities](#cababilities)
      - [Syntax](#syntax)
    - [SectionList component](#sectionlist-component)
      - [Syntax](#syntax-1)
  - [Froms](#froms)
  - [Naviagtion](#naviagtion)
    - [Stack Naviagtion](#stack-naviagtion)
      - [Navigation between screens](#navigation-between-screens)
        - [navigation Prop](#navigation-prop)
        - [useNavigation hook](#usenavigation-hook)
      - [Passing data between screens](#passing-data-between-screens)

<!-- /TOC -->
<!-- /TOC -->
<!-- /TOC -->

## creating app using expo framework

> \> npx create-expo-app@latest \<app-name> --template blank

without `--template blank` there will be a large content with lots of files which wouldn't be needed as you build your first project.

> [!CAUTION] 
> Open your emulator before running the application


## Core Components

### View
```javascript
<View style={{ flex: 1, flexDirection: "row", backgroundColor: "plum" }}>
  <View style={{ width: 200, backgroundColor: "white" }}></View>
  <View style={{ flex: 1, backgroundColor: "black" }}></View>
</View>
```
Supporting `nesting`, `styling`, `layout` `using flexbox`, `touch handeling`, `accessability control`.

### Text
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

### Image
```javascript
<View style={{ flex: 1, backgroundColor: "red", paddingTop: 100 }}>
  <Image source={icon} style={{ width: "100%", height: 300 }} />
  <Image source={{ uri: "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU" }} style={{ width: "100%", height: 300 }} />
</View >
```
Not supoorting `nesting`.

### ImageBackgrgound
```javascript
<View style={{ flex: 1, backgroundColor: "purple", paddingTop: 100 }}>
  <ImageBackground source={icon} style={{ flex: 1 }}>
    <Text style={{ color: "white" }}>Hello, mother father.</Text>
  </ImageBackground>
</View >
```
supporting: `nesting`.

### ScrollView
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

### Button (Allow users to trigger actions)

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

### Pressable
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

### Modal

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

### StatusBar

Allows you to control the application's StatusBar.
The statusbar is the zone, typically at the top of the screen, that displays the current time, wifi and network info, bttary level and other status icons.

Highlighted props:
1. backgroundColor
2. barStyle
3. hidden (to hide the statusBar, can take some true/false value)

> [!NOTE]
> `backgroundColor` prop is specific for `Android`. but we can adjust the font color on both platforms using `barStyle` prop.

> [!NOTE]
> barStyle="default" (default value) this corresponds to `dark text on ios` and `light text on android`.
> barStyle="dark-content" gives us black text on both the platforms
> barStyle="light-content" gives us white text on both the platforms

> [!TIP]
> depending on the application's background color, choose the appropriate value to ensure good visibility and contrast.

> [!TIP] StatusBar.currentHeight
> This value used by convention to set paddingTop in android devices as "SafeAreaView" doesn't make any changes on android devices.

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

### ActivityIndicator

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

### Alert

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

### SafeAreaView

consider the following code
```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
```
This code works good on Android devices, but showing nothing on iphone 14 Pro Max because the text is hidden behind the notch. we can tackle this problem by adding some marginTop or paddingTop to make the text visible, but this adds unnessasary space at the top of android, also another device may have a notch on a different place.

> [!TIP] Solution for the problem
> Finding the safe area for a given device and render our application only within that View. That what the `SafeAreaView` is for.to render content within the safe area boundries of a device, it applies paddingg to reflect the physical limitation of the screen such as rounded corners and camera notches.

```javascript
// wrap you entire jsx inside SafeAreaView
<SafeAreaView style={{ flex: 1, backgroundColor: "plum" }}>
  <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  </View>
</SafeAreaView>
```
---
---

## Styling

Inline styling is not a recommended approach in react-native, and rarely could be found in the code base. The preferred method is to use the StyleSheet API.

### Why using StyleSheet API better ?
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

### Applying multiple styles

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

### Box models

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

### Inheritance
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

## Dynamic User Interfaces

### Address responsive styles based on the device size

> [!NOTE]
> The app's users won't all be using identical devices. Device sizes may vary, ranging from more compact phones to larger devices like iPads or Android tablets. We must ensure that our app's user interface remains responsive to these different device sizes while maintaining an `optimal user experience` .\
On the same device, a user might opt for `portrait mode`, while another prefers `landscape orientation` .

> [!TIP]
> One possible solution to handle this issue, is by using percentage: \
> ```javascript
> const styles = StyleSheet.create({
>  container: {...},
>  box: {
>    width: "70%",
>    height: "40%",
>    ...
>  },
>  text: {...}
> });
> ```
> but this approach has 2 drawbacks:
> 1. Text can't be adjusted by percentage unit. 
> 2. Devices with same height but different widths, think about iphons and ipads.

> [!TIP]
> The other solution, is to use the `Dimensions` API, by getting the width and height of the device you adjust your styles.
> ```javascript
> const { width,  height } = Dimensions.get("window/screen")
> ```
> window => refers to the visible area of the screen occupied  by the apps UI.\
> screen => refers to the entire physical display of your device including areas that might be outside the visible viewport dueto notches, statusbars or system navbars.\
> > For tasks involving UI elements within your application's visible area, use window.  

```javascript
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "plum",
  },
  box: {
    width: width > 500 ? "70%" : "90%",
    height: height > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: width > 500 ? 50 : 24,
  }
});
```

> [!CAUTION] Drawback of Dimensions API
> Device Dimensions can change when the screen orientation changes and unfortunately Dimentions API doesn't update with these changes.
> The values of width and height don't dynamically update when the window dimensions changes, either due to orientation changes or more complex senarios such as foldable phones.

> [!NOTE] expo default settings "orientation": "portrait"
> In app.json file you can find that the `orientation` property is set to `protrait` which makes the device to not responding to `landscape` mode when the device rotated. To solve this issue set `"orientation": "default"`, this will make the content on the screen to adjust to both landscape and portrait modes(only the content rotates without any adjustments happened).\
> This not solving the problem of Dimensions API, again the problem isn't to flip the content horizontally or vertically when the device rotates, but to adjust the styles depending on the current width and height of your screen.

> [!NOTE] Solution to Dimentions API
> Dimensions API is actually listening to the change in window sizes, but the porblem is that it doesn't rerender the component again to be updated its styles related to new window sizes. So the problem now is the rerendering of the component when the sizes changes and the solution to such problem is by using `useState` with `useEffect`, and update the state variable.

The following code proves that Dimensions is actually listens to the changes but the problem there's no effect on the component because of the rerendering.

```javascript
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function App() {
  const [dims, setDims] = useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => console.log(window));
    return () => subscription?.remvoe();
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}
// output
~ LOG  {"fontScale": 1, "height": 430, "scale": 3, "width": 932} // Horizontal
~ LOG  {"fontScale": 1, "height": 932, "scale": 3, "width": 430} // Vertical
```

The solution
```javascript
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function App() {
  const [dims, setDims] = useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  });

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window }) => {
      setDims({
        width: window.width,
        height: window.height
      })
    });
    return () => subscription?.remvoe(); // clean up
  })

  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: dims.width > 500 ? "70%" : "90%", height: dims.height > 600 ? "60%" : "90%" }]}>
        <Text style={[styles.text, { fontSize: dims.width > 500 ? 50 : 24 }]}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {...},
  box: {...},
  text: {...}
});
```

> [!TIP] useWindowDimentions Hook (the go-to approach for responsive designs)
> Even the previous code is working, the code is hard to understand. Another better solution is to use "useWindowDimentions" Hook.

```javascript
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: width > 500 ? "red" : "lightblue", width: width > 500 ? "70%" : "90%", height: height > 600 ? "60%" : "90%" }]}>
        <Text style={[styles.text, { fontSize: width > 500 ? 100 : 24 }]}>Welcome!</Text>
      </View>
    </View>
  );
}
```

### Platform specific code (Address responsiveness based on the device platform)

When developing a cross-platform app, maximizing the code reuse is a priority. However there are situations where it become necessary to tailor your code to specific platforms.

> [!TIP] React-Native platform specific code approaches
> React-Native offers 2 approaches for organizing and separating plat-form specific code
> 1. Platform module.
> 2. Platorm-specific file exptensions.

#### Platform module (When small part of the component is platform specific)

> [!TIP] Using Platform module
> ```javascript
> // Detects the platform on which the app is running, and conditionally changes the styles.
> import { Platform } from "react-native";
> ```

Changing the background color, midnightblue on ios and orange on android
```javascript
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Platform.OS === "ios" ? "midnightblue" : "orange",
  },
});
```

> [!TIP] What's Platform module for?
> While `Platform.OS` suitable for small changes, a better option for more comprehensive platform specific styles is to use `Platform.select`.

Changing font style on ios and android using Platform.select
```javascript
const styles = StyleSheet.create({
  container: {...},
  box: {...},
  text: {
    // notice the spread operator before Platform.select
    ...Platform.select({ 
      ios: {
        // some styles related to ios
      },
      android: {
        // some styles related to android
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
```
> [!NOTE] how does Platform.select works?
> It detects the platform of the device running the application, and then return the value related to the platform name. Using the spread operator is to get the (key, value) pairs or styles from the object and use them in `StyleSheet.create`.

#### Platorm-specific file extensions (More complex senarios)

> Used for more complex apperances or behaviors accross the 2 platforms using .ios and .android ext. 

> [!NOTE] How does Platorm-specific file extensions work?
> In this approach you split your code into separate `same-name` files with `.android` and `.ios` extensions `before the file's main extension`. react native detects the extension and loads the relevant platform file when required by other components.
> creating new component that's platform specific should be: `newComponent.android.js` , `newComponent.ios.js`. When importing the component to use it we only use the filename without the exptensions, and reactnative will decide which one to use.

```javascript
// components > CustonButton.ios.js
import { Pressable, Text } from "react-native";
export default const CustomButton = ({ onPress, title }) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: 20, // diff
      padding: 5, // diff
    }}
  >
    <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text> // diff
  </Pressable>
);
```

```javascript
// components > CustonButton.android.js
import React from "react";
import { Pressable, Text } from "react-native";

export default const CustomButton = ({ onPress, title }) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: 5, // diff
      padding: 10, // diff
    }}
  >
    <Text style={{ color: "blue", fontSize: 18 }}>{title}</Text> // diff
  </Pressable>
);
```

```javascript
// App.js
import { View, Text, StyleSheet, useWindowDimensions, Platform } from "react-native";
import CustomButton from "./components/CustomButton"; // note the import

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
        <CustomButton title={`Hello, from ${Platform.OS}`} onPress={() => console.log("Pressed")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "ios" ? 64 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
```

> the previous example is not complex and can be done using `Platform.select` but just to showcase.

## Pokemon cards image crop issue

> using resizeMode="contain" prop in Image component should fix the bugs issued from resizing the image.

## Lists

### Using `map` function

### FlatList component

The best choice to render large lists with thousands of items.
Renders only the items currently in view, making it highly performant for long lists.

> [!NOTE] Generation in advance
> It generates a few devices length of content to insure smooth scrolling. 

#### Cababilities
1. Fully cross-platform
2. Supports horizontal mode
3. Header, Footer, and separator support
4. Empty list alternative support
  
#### Syntax
```javascript
<FlatList
  data={
    // Mandatory
    // List to be displayed
  } 
  renderItem={
    // Mandatory
    // Function:
    //    Args (Object):
    //      1. item: current item
    //      2. index: index of the current item
    //      3. separators: object of functions
    //    Returns:
    //      JSX describes how each item should be displayed
  }
  keyExtractor={
    // Optional
    // Function:
    //    Args:
    //      item: current item
    //      item, index: current item, current index
    //    Returns:
    //      unique string for each item, plays as the key of this item
    //    notes:
    //      a. Has priority over key prop if used with the JSX returned from renderItem
    //      b. If not used:
    //        1. by default returns item.key
    //        2. if item.key not exist return item.id
    //        3. if item.id returns item index as react does
    //      c. If used:
    //        must return a unique string for each item
  }
  ItemSeparatorComponent={
    // Optional
    // JSX element to be displayed between items
    // Can  also be a function returns some JSX and takes custom props (Not intersted for me now)
  }
  ListHeaderComponent={
    // Optional
    // JSX element to be displayed at start of the list
  }
  ListFooterComponent={
    // Optional
    // JSX element to be displayed at end of the list
    // can be used to display pagination controls
  }
  ListEmptyComponent= {
    // Optional
    // JSX element to be displayed if the list is empty
  }
  horizontal={true / false} // horizontal display
/>
```

### SectionList component

A performant component designed for rendering section list.

> [!WARNING] Data porperty
> It's crucial to exist a property with the name `data`, as that's what the SectionList expects. if your api data set has no `data` property you must transform your data.

> [!NOTE]
> The word Item in the context of SectionList is meant to be each item in the data list of each section.

#### Syntax
```javascript
<SectionList
  sections={
    // Mandatory
    // List of sections to be displayed
  }
  renderItem={
    // Mandatory
    // Function:
    //    Args (Object):
    //      1. section: the whole section
    //      2. item: refers to each element of "data" array from the current section
    //      3. index: index of the current item
    //      4. separators: object of functions
    //    Returns:
    //      JSX describes how each item should be displayed
  }
  renderSectionHeader={
    // Optional
    // Function:
    //    Args (Object):
    //      section // current section
  }
  ItemSeparatorComponent={
    // Optional
    // Function returns JSX and takes custom props
  }
  SectionSeparatorComponent={
    // Optional
    // Function returns JSX and takes custom props
  }
/>
```

## Froms

In web development, we have lots of HTML elements at our disposal to capture
user input e.g. input fields, text areas, dropdown menus, checkboxes, radio groups
and many more.\
The core RN library only provides TextInput and Switch
These will be the sole focus of our learning in this section.\
"What about the other components?"\
Expo expands our toolkit, offering additional components like checkboxes and
date pickers through the Expo SDK.

```javascript
import { useState } from "react";
import { Switch, SafeAreaView, StatusBar, StyleSheet, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const [darkMode, setMode] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name!"
        secureTextEntry={false}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing" // ios-sepcific
        selectionColor={"red"}
        clearTextOnFocus={true}
        defaultValue="What's your name?" // incase the initial state = "" this will take place
      />
      <TextInput
        style={[styles.input, { minHeight: 100, textAlignVertical: "top" /* to avoid initial position between android and ios */ }]}
        multiline={true}
      />
      <Switch
        value={darkMode}
        onValueChange={() => setMode(!darkMode)}
        thumbColor={"red"}
        trackColor={{ false: "black", true: "green" }}
        ios_backgroundColor="black" // trackColor false value, not working in ios
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1",
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    padding: 12,
  }
});
```

## Naviagtion

A mechanism that allows users to move across different screens, access features, and generally use your app effectively.

> [!TIP] GO-TO Solution
> In react-native a go-to solution to for handeling navigation is the [react-navigation](https://reactnavigation.org/docs/getting-started/) library.

React-Navigation provides a variety of navigators like: Stack, Drawer, Tab navigators.\
1. Stack Navigator provides a way for your app to transition between screens where
each new screen is placed on top of a stack.\
2. Drawer Navigator renders a navigation drawer on the side of the screen which can
be opened and closed via gestures.\
3. A tab navigator at the bottom of your screen lets you easily switch between
different routes.

> [!NOTE] NaviagtionContainer Wrapper
> To work with react-naviagtion we need to wrap the whole app with `NavigationContainer` component.

> [!CAUTION]
> Don't forget to re-run the application.

### Stack Naviagtion

> [!NOTE] Follows a very Straight Forward principle
> Each new screen is stacked on top of the previous one like a deck of cards. Useful in
> scenarios where a linear flow of screens is required.

> [!NOTE] Two navigators: Stack Navigator, and Native Stack Navigator
> The Stack Navigator is a JavaScript-based navigator which offers a high degree of
> customization, making it a great choice for apps that require a unique navigation
> experience, this comes at the cost of performance.\
> The Native Stack Navigator leverages the native navigation constructs of iOS and
> Android, providing better performance and a more native feel to the transitions
> and gestures.

```javascript
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen'

const StackNavigator = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='about'>
        <StackNavigator.Screen name='home' component={HomeScreen} />
        <StackNavigator.Screen name='about' component={AboutScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
```
By default the top most screen within the navigator is the initial screen. You can change this by providing the name of the initial screen to `initialRouteName` prop of `StackNavigator.Navigator`.

#### Navigation between screens

We have 2 primary ways to handle navigations between screens:
1. naviagtion prop
2. useNavigation hook

##### navigation Prop
Every `screen component` (just screen components) in your application is provided with the `navigation` object prop automatically by react navigation.
navigation prop has verious methods to initiate verious actions one of them is `navigate`.

```javascript
import { View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "'green" }}>Home Screen</Text>
      <Button title="go to About" onPress={() => navigation.navigate("About")} />
    </View>
  )
}
```

##### useNavigation hook

> Just import it, and then use it as normal.
```javascript
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "'green" }}>Home Screen</Text>
      <Button title="go to About" onPress={() => navigation.navigate("About")} />
    </View>
  )
}
```

> [!TIP] When to use `navigation prop` and `useNavigation hook`?
> If you are within a screen component then use `navigation prop`. while useNavigation can be used within any component not just screen components, making it more flexible option when you have nested components or you are working with utility components that need to initiate navigation.

#### Passing data between screens

be default any screen component is provided with the `route` object prop automatically by react navigation besides the `navigagtion` prop we talked about earlier.
```javascript
export default function HomeScreen(props) {
  console.log(Object.keys(props)); // ['navigation', 'route']
  ...
}
```
This `route` prop has a property called `params` which is an object contains the parameters passed to this screen from the callee component.

> [!TIP] Screen initial parameters
> You can also set a default parameter value by setting `initialParams` prop to an object speciftying the initial values when decalaring the Screen.\
> Also you can change the params using `navigation.setParams(Object)` on the Screen itself.

```javascript
// App.js
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='Home'>
        <StackNavigator.Screen name='Home' component={HomeScreen} />
        <StackNavigator.Screen name='About' component={AboutScreen} initialParams={{ name: "Kamal" }} /> // here
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

// AboutScreen.js
// when press the first button the parameter name will change
export default function AboutScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "'green" }}>About {route.params?.name}</Text>
      <Button title="change initial params" onPress={() => navigation.setParams({ name: "mahmoud" })} />
      <Button title="go back" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}
```

> [!CAUTION]
> I found it really time wasting to write about navigations, while the documentation is a easy to understand and has really good examples.