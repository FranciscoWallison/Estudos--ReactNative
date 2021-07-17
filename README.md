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
# Abra o CMD como administrador
#### Comando android's
````
  - emulator -list-avds
  - emulator -avd Nexus_5x_API_27
````
#### Comando gerando apk debug
````
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && cd android && gradlew assembleDebug && cd ..
````
#### Comando gerando apk Release
````
cd android && gradlew assembleRelease && cd ..
````
## Comando adb android driver
#### Criando server
````
adb kill-server && adb start-server && adb reverse tcp:8081 tcp:8081
````
#### Validando entradas usb's
````
adb usb
````
#### Comando gradlew exclusão do diretório de construção.
````
cd android && gradlew clean && cd ..
````
````
- react-native run-android
````
### Comandos ios
#### ERRO IMAGE'S
````
 - https://github.com/facebook/react-native/issues/29279#issuecomment-658244428
````


#### FULL RESETE
````
 rm -rf node_modules/ && rm -rf package.lock.json && yarn install && cd ios && pod clean && pod install && cd ..
````
