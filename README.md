This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Minhas Notas
Não precisamos ficar apenas usando os Hooks que o time do React disponibiliza para gente, como useState e useEffect. 
Podemos criar nossos próprios Hooks. No exemplo dessa aula vamos fazer o seguinte. Criar um Hook que quando redimensionamos 
a janela do navegador, vai ir mostrando o número na tela. Iremos usar o useEffect. Eu vou criar um projeto separado 
chamado window-resize. De acordo com o instrutor ele vai chamar o listener do objeto window e vai pegar a largura com um hook.
Foi criado um arquivo useWindowWidth.js que o instrutor chamou de hook. Interessante como ele pegou a largura atual da tela 
através de uma variável de estado. Foi usar o hook useState desse modo:
```
const [width, setWidth] = useState(window.innerWidth)
```
Esse método innerWidth vai retornar o largura da viewPort. Vamos usar o useEffect() para que:
> Toda vez que inicializarmos o componente vai ser adicionado um listener na window para que ao fazer o redimensionamento 
>da janela vamos atualizar o valor da largura da janela.

E para chegar à essas coisas vamos adicionar um `addEventListener` à janela window. E para setar o Width vamos criar a 
function `handleWindowWidth()` e passar para o `setWidth` que é a function que vai alterar a 
variável de estado.
 `const handleWindowWidth = () => setWidth(window.innerWidth);`
Foi usado o window.innerWidth que vai retornar a lagura atual da viewPort. O método addEventListener
recebe dois argumentos, o tipo do event, que no nosso caso vai ser resize, que é o tipo de evento a ser esperado, e a 
function que vai manusear esse tipo de evento. E observe que o return do useEffect() vai ser o ciclo que vai ser responsável 
por destruir o componete, e para essa ação vamos simplesmente remover o listener, usando `removeEventListener(handleWindowWidth)` para que

> Não tenhamos que ficar executando essa function de forma desnecessária

```
useEffect(()=>{
  window.addEventListener('resize', handleWindowWidth)
  return () => {
    window.removeEventListener('resize',handleWindowWidth);
  }
});
```
E observe que no final, apenas fazer um `return width`, ou seja estamos retornando a variável de estado que contém 
a largura da viewPort. Assim lá no meu componente Pai, App, vamos pegar a largura da viewPort através do hook useWindowWidth()
```
function App() {
  const width = useWindowWidth();               <--
  return (
      <h1>Window width is: {width} </h1>
  );
}
```

