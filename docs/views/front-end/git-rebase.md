---
title: Git如何修改前几次的Commit信息及补充提交
categories:
  - Git
tags:
  - Git
keywords: 'Git'
description: Git
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170432.png
date: 2021-11-28 22:14:48
---

> 在日常的开发中，特别是在配合 `Gerrit` 代码评审时，经常会遇到需要修改上一次甚至前几次 `Commit` 信息的情况。下面就介绍一下操作过程（因为是中文系统，所以很多 `git` 提示信息也是中文，请见谅~）


# 修改最后一次

这种情况一般是最简单的。只要使用以下命令，即可重新编辑 `Commit Message` 信息，或者补充提交，随后 `wq` 保存文件即可

```git
git commit --amend
```


# 修改之前的某一次

假设，已经有四次 Commit 记录分别为：`First`、`Second`、`Third`、`Fourth`，分支状态如下图所示：

![最近4次提交](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20211128231124.png)

想要修改 `Second` 的那一次，也就是倒数第 `3` 次，使用以下命令

```git
git rebase -i HEAD~4
```

此时，会打开一个 vim 编辑信息，前 4 行，即当前本地最新的 4 次注释，想要修改哪一次的信息，将行首的 `pick` 改为 `edit` 即可，然后 `wq` 保存文件即可，操作如下：

![git rebase -i HEAD~4](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20211128232659.png)

保存后，会提示您 `停止到 96b35b4... [Commit Desc]Second`，即回退成功。效果图如下所示：

![rebase to 96b35b4...](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20211128233158.png)

现在你可以尽情的修改您的 `Commit Message` 或补充您要提交的代码

```git
# 如果还有代码需要提交
git add .

git commit --amend

git rebase --continue
```

之后，就像上图中提示所说，使用以下命令即可完成本次修改，并回到最新状态，操作如下所示：

![修改之前的某一次提交](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20211128234826.png)

修改后，我们再看一下目前的分支状态，如下图所示：

![修改后的分支状态](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20211128234744.png)

其实原理也很简单，个人理解应该就是先将版本回退至之前的某个版本，修改完 `Commit Message` 后，再前进到最新的分支版本吧~


# 修改之前的某几次

跟修改之前的某一次提交的操作很相似，只是在第一步 `rebase` 之后，将所有要回退的版本的行首 `pick` 字段依次修改为 `edit` 字段，然后 `wq` 保存文件即可，操作如下：

![修改之前的多次提交](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20211128235358.png)

修改后，我们看一下最终的分支状态，如下图所示：

![修改后的分支状态](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20211128235450.png)


# 如果已经将代码push到远程仓库

首先，你把最新的版本从远程仓库先pull下来，修改的方法都如上，最后修改完成后，强制push到远程仓库：

```git
git push --force origin master
```

注：很重要的一点是，你最好保证在你强制push之前没有人提交代码，如果在你push之前有人提交了新的代码到远程仓库，然后你又强制push，那么会被你的强制更新覆盖！！！

最后，可以检查一下远程的提交记录~~


# 祝君无Bug~