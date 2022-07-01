oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (--version)
todocli/0.0.0 darwin-arm64 node-v16.15.1
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli hello PERSON`](#todocli-hello-person)
* [`todocli hello world`](#todocli-hello-world)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli plugins`](#todocli-plugins)
* [`todocli plugins:install PLUGIN...`](#todocli-pluginsinstall-plugin)
* [`todocli plugins:inspect PLUGIN...`](#todocli-pluginsinspect-plugin)
* [`todocli plugins:install PLUGIN...`](#todocli-pluginsinstall-plugin-1)
* [`todocli plugins:link PLUGIN`](#todocli-pluginslink-plugin)
* [`todocli plugins:uninstall PLUGIN...`](#todocli-pluginsuninstall-plugin)
* [`todocli plugins:uninstall PLUGIN...`](#todocli-pluginsuninstall-plugin-1)
* [`todocli plugins:uninstall PLUGIN...`](#todocli-pluginsuninstall-plugin-2)
* [`todocli plugins update`](#todocli-plugins-update)

## `todocli hello PERSON`

Say hello

```
USAGE
  $ todocli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Jartto/Jartto/blob/v0.0.0/dist/commands/hello/index.ts)_

## `todocli hello world`

Say hello world

```
USAGE
  $ todocli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `todocli help [COMMAND]`

Display help for todocli.

```
USAGE
  $ todocli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for todocli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `todocli plugins`

List installed plugins.

```
USAGE
  $ todocli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ todocli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `todocli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ todocli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ todocli plugins add

EXAMPLES
  $ todocli plugins:install myplugin 

  $ todocli plugins:install https://github.com/someuser/someplugin

  $ todocli plugins:install someuser/someplugin
```

## `todocli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ todocli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ todocli plugins:inspect myplugin
```

## `todocli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ todocli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ todocli plugins add

EXAMPLES
  $ todocli plugins:install myplugin 

  $ todocli plugins:install https://github.com/someuser/someplugin

  $ todocli plugins:install someuser/someplugin
```

## `todocli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ todocli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ todocli plugins:link myplugin
```

## `todocli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todocli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todocli plugins unlink
  $ todocli plugins remove
```

## `todocli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todocli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todocli plugins unlink
  $ todocli plugins remove
```

## `todocli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todocli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todocli plugins unlink
  $ todocli plugins remove
```

## `todocli plugins update`

Update installed plugins.

```
USAGE
  $ todocli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
