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

mrm pull repo-dir-1 repo-dir-2
mrm pull

mrm grep -noE keywords -- -- repo-dir-1 repo-dir-2
mrm grep -noE keywords

```
