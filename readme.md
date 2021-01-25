# multi-repos-manager
A commandline tool to `git` in multiple repositories.

## Install
```bash
npm i -g multi-repos-manager
mrm -h
```

## Examples

```bash
mrm clone remote-url remote-url

mrm pull dir-1 dir-2
mrm pull ./*

mrm grep dir-1 dir-2 -- -noE keywords
mrm grep ./* -- -noE keywords

```
