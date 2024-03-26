

#### Initialize a local Git repository
```
git init
```

#### Clone public repository
```
git clone repo_url
```

#### Check status is there any changes done
```
git status
```

#### Add a file to the staging area
```
git add [file-name]
```

#### Add all new and changed files to the staging area
```
git add .
```

#### Commit changes
```
-m represents message

git commit -m 'message here'
```

#### Remove a file (or folder)
```
git rm -r [file-name.txt]
```

#### List of branches
```
git brach
```

#### Create a new branch
```
git branch [new-brach-name]
```

#### Create a new branch and switch to it
```
git checkout -b [new-brach-name]
```

#### Switch to a branch
```
git checkout brach-name
```

#### Switch to the branch last checked out
```
git checkout -
```

#### Delete a branch
```
git branch -d [brach-name]
```

#### Delete a branch forcefully
```
git branch -D [brach-name]
```

#### Delete a remote branch
```
git push origin --delete [brach-name]
```

#### Clone a remote branch and switch to it
```
git checkout -b [branch name] origin/[branch name]
```

#### Rename a local branch
```
git branch -m [old-brach-name] [new-brach-name]
```

#### Discard changes to a file
```
git checkout -- [file-name]
```

#### Merge a branch into the active branch
```
git merge [branch-name]
```

#### Merge a branch into a target branch
```
git merge [source-branch] [target-branch]
```

#### Push a branch to your remote repository
```
git push origin [branch-name]
```

#### Push changes to remote repository (and remember the branch)
```
git push -u origin [branch-name]
```

#### Push changes to remote repository (remembered branch)
```
git push
```

#### Delete a remote branch
```
git push origin --delete [branch name]
```

#### Update local repository to the newest commit
```
git pull
```

#### Pull changes from remote repository
```
git pull origin [branch name]
```

#### Add a remote repository
```
git remote add origin ssh://git@github.com/[username]/[repository-name].git
```

#### Set a repository's origin branch to SSH
```
git remote set-url origin ssh://git@github.com/[username]/[repository-name].git
```

#### View changes
```
git log
```

#### View changes (detailed)
```
git log --summary
```

#### Set globally Username
```
git config --global user.name "your_username"
```

#### Set globally Email id
```
git config --global user.email "your_email_address@example.com"
```

#### Get global config
```
git config --global --list
```


---------------- Use Git module wise -----------------
#### 
---------------- Use Git module wise -----------------
