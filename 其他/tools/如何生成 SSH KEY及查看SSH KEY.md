# 如何生成 SSH KEY及查看SSH KEY

 只适用于Mac和windows下的Git Bash操作界面。 

一、检查本地是否有SSH Key存在

在终端输入

```sh
ls -al ~/.ssh
```

 如果终端输出的是： 

```shell
No such file or directory
```

那么就说明本地没有SSH key

> 或者cd ~./ssh => ls 显示含有 id_rsa.pub => cat id_rsa.pub

 如果已存在SSH key那么就会显示 id_rsa 和 id_rsa.pub文件的存在以及它的创建日期。 

二、生成新的SSH key

首先在终端输入

```
ssh-keygen -t rsa -C "your_email@example.com"
```

your_email@example.com 为你在 GitHub或者GitLab 注册时的邮箱

回车后终端会显示：

```
Generating public/private rsa key pair.

Enter file in which to save the key (/Users/xxx/.ssh/id_rsa):
```

提示你保存 .ssh/id_rsa 的路径是/Users/xxx/.ssh/id_rsa，直接按回车。

这里有一点，如果已经存在SSH key你想要使用以上操作重新生成的话会提示一你不是要重新生成，直接输入y并按回车。

然后终端会提示：

```
Created directory '/Users/xxx/.ssh'.

Enter passphrase (empty for no passphrase):
```

提示设置 passphrase，每次与 Git 通信都会要求输入 passphrase，以避免某些错误的操作所导致的问题，建议设置一下。

成功后终端会提示：

```
Your identification has been saved in /Users/xxx/.ssh/id_rsa.

Your public key has been saved in /Users/xxx/.ssh/id_rsa.pub.

The key fingerprint is:

16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48 your_email@example.com

The key's randomart image is:心形图形
```

然后在终端输入：

```
ssh-add ~/.ssh/id_rsa
```

此时会要求输入上面步骤里所填的 passphrase

成功后，终端显示：

Identity added: /Users/xxx/.ssh/id_rsa (/Users/xxx/.ssh/id_rsa)

最后，在 /Users/xxx/.ssh/ 生成两个文件，id_rsa 和 id_rsa.pub

在终端输入：

```
cat /Users/xxx/.ssh/id_rsa.pub
```

> 或者cd ~./ssh => ls 显示含有 id_rsa.pub => cat id_rsa.pub

终端就会显示你的SSH key了，直接复制就可以了。

其他参考  https://blog.csdn.net/qq_43768946/article/details/90411154?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task 

