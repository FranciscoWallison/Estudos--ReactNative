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
# Abra o CMD como administrador
#### Comando gerando apk debug
````
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && cd android && gradlew assembleDebug && cd ..
````
#### Comando gerando apk Release
````
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && cd android && gradlew assembleRelease && cd ..
````
## Comando adb android driver
````
adb kill-server
adb start-server
adb reverse tcp:8081 tcp:8081

adb usb
````
#### Comando gradlew exclusão do diretório de construção.
````
gradlew clean
````
