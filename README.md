## Estudos--ReactNative
### Doc para me ajudar no dia dia 
_________________________________________________________
# Abra o CMD como administrador
#### Comando para abrir o emulador android's
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
#### Comando gradlew exclusão do diretório do build.
````
cd android && gradlew clean && cd ..
````
````
react-native run-android
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


# Add firebase 
Documentação para estár iniciando google analytics no react-native [Doc](https://rnfirebase.io/)

## Debugando
### No console
````
adb shell setprop debug.firebase.analytics.app com.abc.y
````
#### Esse comportamento persiste até que você o desative explicitamente executando o seguinte comando:
````
adb shell setprop debug.firebase.analytics.app .none.
````
### No dispositivo

#### Execute seu aplicativo no modo de depuração

Vá para Opções do ````desenvolvedor```` -> ````Selecionar aplicativo de depuração```` -> ````Selecione seu aplicativo````

Você verá seu dispositivo listado no Firebase ````DebugView````

[creat_icon](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=0&foreground.space.pad=0.45&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(255%2C%20255%2C%20255)&crop=1&backgroundShape=circle&effects=none&name=ic_launcher)


