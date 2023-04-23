#  Dashboard-electron-vite-expresss-boilerplate

An Electron application with React, Material Tailwind React, and Express.

### Install

To install the necessary dependencies, run the following command:

```bash
$ npm install
```

### Development

To start the application in development mode, run the following command:

```bash
$ npm run dev
```

### Build

To build the application for distribution, use one of the following commands depending on your target platform:

```bash
$ npm run build
```

## Usage

Once the application is running, you can use the interface to view your data. There are various components available for displaying data, such as tables, charts, and cards.

To retrieve data for the application, you can use the included server. The server provides a RESTful API for retrieving data from a database or other source. To start the server, use the command `npm run server`.

(The server is automatically started when the program is executed because it is called in the 'main.js' file.)

## Important

In order for the application to be able to locate images, they must be placed in the "public" folder. It is important to note that the file path must be written with a "." before the "/", for example "./img/icon.svg" instead of "/img/icon.svg".

Another important point to consider is that this project uses React Router DOM, which does not work well with Electron because Electron is based on a file system rather than a traditional internet URL system. Therefore, it is recommended to use "HashRouter" instead of "BrowserRouter" ([see link](https://stackoverflow.com/questions/36505404/how-to-use-react-router-with-electron)).

## Dependencies

This application depends on two projects:
 - [The electron project](https://github.com/electron-vite/electron-vite-react)
 - [The material-tailwind-react project](https://github.com/creativetimofficial/material-tailwind-dashboard-react)
## License

This application is licensed under the MIT License. See the `LICENSE` file for more information.