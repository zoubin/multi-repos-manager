# multi-repos-manager
A commandline tool to `git` in multiple repositories.

## Install
```bash
npm i -g multi-repos-manager
mrm -h
```

## Examples

```bash
# clone multiple repos into the current directory
mrm clone repo-1 repo-2
mrm clone -c fileContainingRepos

# git pull in each repo in the current directory
mrm pull

# git grep in each repo in the current directory
mrm grep keywords

```
