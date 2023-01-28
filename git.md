## 版本控制系统、代码管理工具
+ 分布式

## 配置
+ name：
    + `git config --global user.name "xxx"`
+ email
    + `git config --global user.email "xxx"`

## 常用命令
+ `git status`
    + 查看当前仓库中文件状态
+ `git init`
    + 初始化
+ `git add <file>`
    + 未跟踪 => 暂存
+ `git commit`
    + 将暂存的文件提交到仓库，暂存 => 未修改
    + 参数
        + `-m "xxx"`
            + xxx是对提交的解释
        + `-a`
            + 提交所有已修改文件
+ `git log`
    + 查看提交的日志
+ `git resotre <file>`
    + 恢复重置文件
    + `--staged`
        + 取消暂存状态
+ `git rm <file>`
    + 删除文件
    + 如果文件已修改，会替换为restore
        + 添加`-f`，强制删除
+ `git mv <fromFile> <toFile>`
    + 移动文件
+ `git branch`
    + 查看当前分支
    + `<branchName>`
        + 创建新的分支
    + `-d <branchName>`
        + 删除分支
+ `git switch <branchName>`
    + 切换分支
    + `-c <branchName>`
        + 创建并切换分支

## 文件状态
+ 未跟踪
+ 已跟踪
    1. 暂存
        + 文件修改已保存，但尚未提交到git仓库
    2. 未修改
        + 表示磁盘中的文件和git仓库中文件相同，没有修改
    3. 已修改
        + 表示磁盘中文件已被修改，和git仓库中的不同
+ 一般流程
    + 新文件经过添加（暂存状态），再进行提交（未修改状态）
    + 修改文件（已修改状态）经过添加（暂存状态），再进行提交（未修改状态）

## 分支
+ 每一次提交都会创建一个与之对应的节点，通过节点来记录文件状态，构成一个树状结构。默认情况下仓库只有一个分支，名为master
+ 可以创建都各分支，分支与分支之间相互独立
+ 分支合并
    + `git merge <brachName>`
        + 快速合并（两个分支在同一条节点线上）
        + 将`<brachName>`与当前所在分支快速合并
    + 变基（rebase）
        + 