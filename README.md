## Estudos--ReactNative

#### Trabalhando com lista 
* FlatList
* ScrollView
* SectionList



#### Trabalhando com dados exp: `'<select>'`
  - Picker

_________________________________________________________
#### Renderiza uma entrada booleana.
 * Switch

_________________________________________________________
#### Comando android's
````
  - emulator -list-avds
  - emulator -avd Nexus_5x_API_27
````
#### Comando gerando apk debug
````
  react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
  &&
  cd android && ./gradlew assembleDebug
````
