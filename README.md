## Estudos--ReactNative
### Doc para me ajudar no dia dia 
_________________________________________________________
# Abra o CMD como administrador
#### Comando para abrir o emulador android's
````
emulator -list-avds
````
````
 emulator -avd Nexus_5x_API_27
````
#### Comando gerando apk debug
````
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && cd android && gradlew assembleDebug && cd ..
````
#### Comando gerando apk Release
.APK
````
cd android && gradlew assembleRelease && cd ..
````
.AAB
````
cd android && gradlew bundleRelease && cd ..
````

<details><summary><b>Erros</b></summary>
<p>

 Ele pode gerar um erro gigante falando das pastas
 ````
 android\app\src\main\res
 ````
 Delete as pasta com o inicio do nome em ```drawable``` e por ultimo a ```raw```
 
</p>
</details>

## Comando adb android driver
#### Criando server
````
adb kill-server && adb start-server && adb reverse tcp:8081 tcp:8081
````
#### Validando entradas usb's
````
adb usb
````
#### Comando para gradlew exclusão do diretório do build.
````
cd android && gradlew clean && cd ..
````
#### Comando start project
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
_____________________________________________________________________
# Criando ponte entre api e o app

#### No chome entre no link [chrome://inspect/#devices](chrome://inspect/#devices)
Em ```Port forwarding setting```  adicione em ```Port``` uma porta para o acesso no app e em ```IP address and port ``` a url local da sua API.

<img src="https://github.com/FranciscoWallison/Estudos--ReactNative/blob/master/doc/ex1.png" width="250" />

Em ```Target discovery setting``` tem colocar ```localhost:<PORTA>```, em <PORTA> tem que ser a porta colocada em ```Port``` no ```Port forwarding setting```
  
<img src="https://github.com/FranciscoWallison/Estudos--ReactNative/blob/master/doc/ex2.png" width="250" />

Em laranja é a url da sua API local na sua maquina e em vermelho é por onde o seu app irar acessar.

  <img src="https://github.com/FranciscoWallison/Estudos--ReactNative/blob/master/doc/ex3.png" width="250" />
_____________________________________________________________________

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


