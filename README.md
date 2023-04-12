JRPC-Generator
=================

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
$ npm install -g @habeetat/jrpc-generator
$ jrpcg COMMAND
running command...
$ jrpcg (--version)
@habeetat/jrpc-generator/0.0.0 darwin-arm64 node-v18.13.0
$ jrpcg --help [COMMAND]
USAGE
  $ jrpcg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jrpcg generate`](#jrpcg-generate)
* [`jrpcg help [COMMANDS]`](#jrpcg-help-commands)
* [`jrpcg plugins`](#jrpcg-plugins)
* [`jrpcg plugins:install PLUGIN...`](#jrpcg-pluginsinstall-plugin)
* [`jrpcg plugins:inspect PLUGIN...`](#jrpcg-pluginsinspect-plugin)
* [`jrpcg plugins:install PLUGIN...`](#jrpcg-pluginsinstall-plugin-1)
* [`jrpcg plugins:link PLUGIN`](#jrpcg-pluginslink-plugin)
* [`jrpcg plugins:uninstall PLUGIN...`](#jrpcg-pluginsuninstall-plugin)
* [`jrpcg plugins:uninstall PLUGIN...`](#jrpcg-pluginsuninstall-plugin-1)
* [`jrpcg plugins:uninstall PLUGIN...`](#jrpcg-pluginsuninstall-plugin-2)
* [`jrpcg plugins update`](#jrpcg-plugins-update)

## `jrpcg generate`

generate a typescript interface for JRPC-Client from a JRPC Schema

```
USAGE
  $ jrpcg generate [-f <value>] [-u <value>] [-o <value>]

FLAGS
  -f, --file=<value>    schema file
  -o, --output=<value>  output file
  -u, --url=<value>     schema url

DESCRIPTION
  generate a typescript interface for JRPC-Client from a JRPC Schema

EXAMPLES
  $ jrpcg generate
```

_See code: [dist/commands/generate.ts](https://github.com/webeetle/JRPC-Generator/blob/v0.0.0/dist/commands/generate.ts)_

## `jrpcg help [COMMANDS]`

Display help for jrpcg.

```
USAGE
  $ jrpcg help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jrpcg.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `jrpcg plugins`

List installed plugins.

```
USAGE
  $ jrpcg plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jrpcg plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.4/src/commands/plugins/index.ts)_

## `jrpcg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jrpcg plugins:install PLUGIN...

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
  $ jrpcg plugins add

EXAMPLES
  $ jrpcg plugins:install myplugin 

  $ jrpcg plugins:install https://github.com/someuser/someplugin

  $ jrpcg plugins:install someuser/someplugin
```

## `jrpcg plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jrpcg plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jrpcg plugins:inspect myplugin
```

## `jrpcg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jrpcg plugins:install PLUGIN...

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
  $ jrpcg plugins add

EXAMPLES
  $ jrpcg plugins:install myplugin 

  $ jrpcg plugins:install https://github.com/someuser/someplugin

  $ jrpcg plugins:install someuser/someplugin
```

## `jrpcg plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jrpcg plugins:link PLUGIN

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
  $ jrpcg plugins:link myplugin
```

## `jrpcg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jrpcg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jrpcg plugins unlink
  $ jrpcg plugins remove
```

## `jrpcg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jrpcg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jrpcg plugins unlink
  $ jrpcg plugins remove
```

## `jrpcg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jrpcg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jrpcg plugins unlink
  $ jrpcg plugins remove
```

## `jrpcg plugins update`

Update installed plugins.

```
USAGE
  $ jrpcg plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
