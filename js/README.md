# How to setup your local javascript environment (to run via node.js)

1.  Install dependencies and create required files

    ```bash
    # in the (empty) directory you want to create your project in

    npm init -y
    npm i serve
    ```

1.  Modify your `package.json`:

    ```json
    {
      ...
      "type": "module",
      "scripts": {
        "start": "serve"
      },
      ...
    }
    ```

1.  Create your `index.js`

    ```js
    console.log('Hello World');
    ```

1.  Create your `index.html`

    ```html
    <html>
      <head>
        <title>JS | workshops.de</title>
      </head>
      <body>
        <script src="index.js"></script>
      </body>
    </html>
    ```

1.  Test your setup

    ```bash
    npm start
    ```

    Then open your browser at the specified location and check if the console logged "Hello World" from your `index.js`.
