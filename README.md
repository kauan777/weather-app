# Weather App

Um aplicativo de previsão do tempo desenvolvido com React Native.

## Requisitos

- Node.js >= 18
- Ruby (para iOS)
- CocoaPods (para iOS)
- Android Studio e/ou Xcode
- JDK 11+

## Tecnologias Utilizadas

- React Native 0.79.1
- React Navigation
- NativeWind (TailwindCSS)
- Axios
- Moment.js
- React Native Reanimated

## Como rodar o projeto

### Instalação de dependências

```sh
# Usando npm
npm install

# OU usando Yarn
yarn
```

### Para iOS

É necessário instalar as dependências do CocoaPods na primeira vez que clonar o projeto ou após atualizar dependências nativas.

Na primeira vez que criar um novo projeto, execute o Ruby bundler para instalar o CocoaPods:

```sh
bundle install
```

Em seguida, e sempre que atualizar suas dependências nativas, execute:

```sh
bundle exec pod install
```

### Configuração da API

Este aplicativo utiliza a [Weather API](https://www.weatherapi.com/) para obter dados meteorológicos. Para que o aplicativo funcione corretamente, você precisa:

1. Criar uma conta em [weatherapi.com](https://www.weatherapi.com/)
2. Obter sua chave de API gratuita
3. Adicionar sua chave no arquivo `src/services/axios.ts`, substituindo `YOUR_KEY` pelo valor da sua chave:

```typescript
export const api = axios.create({
  baseURL: url,
  params: {
    key: 'SUA_CHAVE_AQUI',
  },
});
```

### Iniciar o Metro Bundler

```sh
# Usando npm
npm start

# OU usando Yarn
yarn start
```

### Rodar no Android

Em um novo terminal, execute:

```sh
# Usando npm
npm run android

# OU usando Yarn
yarn android
```

### Rodar no iOS

Em um novo terminal, execute:

```sh
# Usando npm
npm run ios

# OU usando Yarn
yarn ios
```

## Como recarregar o aplicativo

- **Android**: Pressione a tecla <kbd>R</kbd> duas vezes ou selecione **"Reload"** no **Menu Dev**, acessado via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) ou <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Pressione <kbd>R</kbd> no Simulador iOS.
