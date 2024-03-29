rivian.cli
=================

A command line interface (CLI) for interacting and extracting vehicle data from Rivian's Cloud API

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rivian-cli
$ rivian COMMAND
running command...
$ rivian (--version)
rivian-cli/0.0.0 darwin-x64 node-v20.11.1
$ rivian --help [COMMAND]
USAGE
  $ rivian COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rivian hello PERSON`](#rivian-hello-person)
* [`rivian hello world`](#rivian-hello-world)
* [`rivian help [COMMAND]`](#rivian-help-command)
* [`rivian plugins`](#rivian-plugins)
* [`rivian plugins:install PLUGIN...`](#rivian-pluginsinstall-plugin)
* [`rivian plugins:inspect PLUGIN...`](#rivian-pluginsinspect-plugin)
* [`rivian plugins:install PLUGIN...`](#rivian-pluginsinstall-plugin-1)
* [`rivian plugins:link PLUGIN`](#rivian-pluginslink-plugin)
* [`rivian plugins:uninstall PLUGIN...`](#rivian-pluginsuninstall-plugin)
* [`rivian plugins reset`](#rivian-plugins-reset)
* [`rivian plugins:uninstall PLUGIN...`](#rivian-pluginsuninstall-plugin-1)
* [`rivian plugins:uninstall PLUGIN...`](#rivian-pluginsuninstall-plugin-2)
* [`rivian plugins update`](#rivian-plugins-update)

## `rivian hello PERSON`

Say hello

```
USAGE
  $ rivian hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/tmack8001/rivian-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `rivian hello world`

Say hello world

```
USAGE
  $ rivian hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ rivian hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/tmack8001/rivian-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `rivian help [COMMAND]`

Display help for rivian.

```
USAGE
  $ rivian help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rivian.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.17/src/commands/help.ts)_

## `rivian plugins`

List installed plugins.

```
USAGE
  $ rivian plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ rivian plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/index.ts)_

## `rivian plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rivian plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ rivian plugins add

EXAMPLES
  $ rivian plugins add myplugin 

  $ rivian plugins add https://github.com/someuser/someplugin

  $ rivian plugins add someuser/someplugin
```

## `rivian plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ rivian plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ rivian plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/inspect.ts)_

## `rivian plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rivian plugins install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ rivian plugins add

EXAMPLES
  $ rivian plugins install myplugin 

  $ rivian plugins install https://github.com/someuser/someplugin

  $ rivian plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/install.ts)_

## `rivian plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ rivian plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ rivian plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/link.ts)_

## `rivian plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rivian plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rivian plugins unlink
  $ rivian plugins remove

EXAMPLES
  $ rivian plugins remove myplugin
```

## `rivian plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ rivian plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/reset.ts)_

## `rivian plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rivian plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rivian plugins unlink
  $ rivian plugins remove

EXAMPLES
  $ rivian plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/uninstall.ts)_

## `rivian plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rivian plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rivian plugins unlink
  $ rivian plugins remove

EXAMPLES
  $ rivian plugins unlink myplugin
```

## `rivian plugins update`

Update installed plugins.

```
USAGE
  $ rivian plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
