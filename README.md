# Bacon Ipsum CLI

A CLI for the [Bacon Ipsum API](https://baconipsum.com/json-api/)


## Usage

```
bacon [command]

Commands:
  bacon completion  generate completion script

Options:
      --version                    Show version number                 [boolean]
  -t, --type                       Type of meat
                  [choices: "all-meat", "meat-and-filler"] [default: "all-meat"]
  -p, --paras                      Number of paragraphs    [number] [default: 1]
  -s, --sentences                  Number of sentences. This overrides paragraph
                                   s.                                   [number]
  -l, --start-with-lorem, --lorem  Starts the first paragraph with 'Bacon ipsum
                                   dolor sit amet'                     [boolean]
      --help                       Show help                           [boolean]
```