# Markdown Links

## Flowchart

![API flowchart](./img/API-flowchart.jpg)
![CLI flowchart](./img/CLI-flowchart.jpg)

## About

Md-links is a library that parses and finds links in Markdown files.

## Get files

`md-links <path-to-file>`

For example:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Options

##### `--validate`

`md-links <path-to-file> --validate`

For example:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

`md-links <path-to-file> --stats`

For example:

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

##### `--stats and --validate`

`md-links <path-to-file> --validate --stats`

For example:

```sh
$ md-links ./some/example.md --validate --stats
Total: 3
Unique: 3
Broken: 1
```

## Objetivos de aprendizaje

### Javascript
- [ ] Uso de callbacks
- [✓] Consumo de Promesas
- [✓] Creacion de Promesas
- [✓] Modulos de Js
- [✓] Recursión

### Node
- [✓] Sistema de archivos
- [✓] package.json
- [ ] crear modules
- [✓] Instalar y usar modules
- [ ] npm scripts
- [✓] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [✓] Testeo de tus funciones
- [ ] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [ ] Testeo para multiples Sistemas Operativos

### Git y Github
- [✓] Organización en Github

### Buenas prácticas de desarrollo
- [✓] Modularización
- [✓] Nomenclatura / Semántica
- [ ] Linting

***

## Author

[@AliceRamirez17](https://github.com/AliceRamirez17 "Alice's repository")