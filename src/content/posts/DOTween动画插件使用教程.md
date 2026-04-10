---
title: DOTween动画插件使用教程
published: 2026-04-08
description: 介绍 Unity 中 DOTween 的下载安装、基础动画写法，以及常见的位移、缩放、旋转和缓动配置。
tags:
  - Unity
  - DOTween
  - 动画
category: Unity
draft: false
comment: true
---

### DOTween动画插件使用教程

#### 下载和安装

* unity - Window - Asset Store 打开unity商店搜索Dotween安装
* 进入官网地址：[](http://dotween.demigiant.com/download.php)
* Dotween有免费版和付费版两个版本，付费版主要是可以在unity Inspector面板中添加DoTween Utility Panel组件，使用更加方便，不过一般工程使用免费版足以

![](http://dotween.demigiant.com/_imgs/dotween_utilitypanel.png)

#### 使用方法

* **使用时，需要在脚本中引用using DG.Tweening;命名空间**

1. 使用插值，既通用方法

   ```c#
   DoTween.To(()=> myValue, x=> myValue = x, 100, 1);
   ```

   To方法参数分别是：（当前设置的值，设置当前数值：x是DoTween计算过后的数值，最终值，时间长度：单位为秒）

   例子：

   ```c#
   float testNum = 0;
   	void Start () {
           DOTween.To(() => testNum, x => testNum = x, 100, 3);
       }
       private void OnGUI()
       {
           GUI.Label(new Rect(200,200,200,50),string.Format("testNum:{0}",testNum));
       }
   ```

   既在一秒内将0变成100的过程

   ![](https://github.com/792287116/MDImages/blob/master/Animation.gif?raw=true)

   ---

2. 常用方法

   * Dotween提供有很多各种函数，例如位移:DOMove：

     常用位移函数：DOMove,DOMoveX,DOMoveY,DOMoveZ

   ```c#
   public Image testImage;
       private void Start()
       {
           testImage.transform.DOMoveX(100,1);//第一个参数为目标值，第二个为时间
       }
   ```

   ![](https://github.com/792287116/MDImages/blob/master/AnimationDoMove.gif?raw=true)

   ---

   * 缩放：DOSize

     常用缩放函数：DOSize,DOSizeX,DOSizeY,DOSizeZ

        ```c#
        testImage.transform.DOScale(new Vector3(2,2,1),2);
        ```

     ![](https://github.com/792287116/MDImages/blob/master/Animation_Scale.gif?raw=true)

     ---


   * 旋转：DORotateQuaternion，DORotate

     ```c#
     testImage.transform.DORotateQuaternion(new Quaternion(0,0,1,0),1);//绕着Z轴旋转
     ```

     ![](https://github.com/792287116/MDImages/blob/master/Animation_ReZ.gif?raw=true)

     ---

   * .SetEase()

     .SetEase方法设置动画缓动效果，下图分别是：默认，InOutBack，InOutQuad，InSine

     ```c#
     testImage.transform.DOMoveX(100,1);
     testImage1.transform.DOMoveX(100,1).SetEase(Ease.InOutBack);
     testImage2.transform.DOMoveX(100, 1).SetEase(Ease.InOutQuad);
     testImage3.transform.DOMoveX(100, 1).SetEase(Ease.InSine);
     ```

     ![](https://github.com/792287116/MDImages/blob/master/Animation_SetEase.gif?raw=true)

     更多的缓动效果可以参考:

     [http://robertpenner.com/easing/easing_demo.html](http://robertpenner.com/easing/easing_demo.html)

     ---

   * 有时候需要对动画进行倒放和重用，这时候需要将动画保存成Tweener对象，即动画片段，例如：

     ```c#
     testTween = testImage.transform.DOMoveX(100,1)
                 .SetEase(Ease.Linear)//设置动画缓动效果为线性
                 .SetAutoKill(false)
                 .Pause()
                 .SetLoops(-1,LoopType.Incremental);
     testTween.PlayForward();
     testTween.PlayBackwards();
     ```

     * 因为一个新的dotween动画被创建的时候，默认状态是播放完之后自动销毁的，所以在对动画片段操作前，需要在创建动画的时候设置SetAutoKill(false)取消自动销毁。

     * Dotween动画被创建既自动播放，所以如果不是需要一开始就播放动画，使用Pause()方法暂停动画片段，一边后续对其进行其他操作。

     * 控制动画循环：SetLoops()

       第一个参数是循环次数，-1既为无限循环，

       第二参数LoopType有三种，分别是：Incremental(不断向前循环)，Restart(从头开始循环)，Yoyo(来回循环)

     * playForward()既是向前播放动画

     * playBackwarks()既是倒放

     * **更多时候使用以上链式函数写法**

     ---

   * ####动画序列

     * **步骤：**

       1. 创建一个新的序列作为存储

          Sequence mySequence = DOTween.Sequence();

       2. 在序列中添加回调函数或者动画

     * **相关方法介绍**

       * DOTween.Sequence()     静态,返回一个新的空序列。
       * sequence.Append(Tween tween)   添加一个动画到序列末尾。(意思就是当序列前面动画播放完毕时此动画才开始播放)
       * sequence.AppendCallback(TweenCallback cb) 添加回调函数到序列末尾。(当序列前面动画播放完毕时会执行此方法)
       * sequence.AppeedInterval(float interval) 添加一段空时间到序列末尾。(当序列前面动画播放完毕时会延迟一段时间)
       * sequenve.Insert(float time,Tween tween)  插入一段动画到指定时间。(注意动画是和原序列当前时间动画合并重叠)
       * sequenve.InsertCallback(float time,TweenCallback cb)    插入回调函数到序列指定时间。
       * sequenve.Join(Tween tween)  插入动画与序列最后一个动画(这里的最后是指最后加入序列而非序列末尾)同时播放。
       * sequenve.Prepend、sequenve.PrependCallback、sequenve.PrependInterval 和前面三个类似，这里是加入到序列开头。

     * 例如：

       ```c#
       Sequence mySequence = DOTween.Sequence();

       Tweener imageR1 = testImage.transform.DOLocalRotateQuaternion(new       Quaternion(1, 1, 0.5f, 0), 0.2f)
                   .SetEase(Ease.Linear)
                   .SetLoops(5,LoopType.Incremental)
                   .OnComplete(()=> {
       				testImage.transform.rotation
                         = new Quaternion(1,1,0.5f,0);
                   });

       Tweener imageMove1 =
         testImage.transform.DOLocalMoveX(300,1).SetEase(Ease.Linear);
               mySequence
                   .Append(imageR1)
                   .Join(imageMove1)
                   .SetLoops(-1,LoopType.Yoyo);
       ```

       ![](https://github.com/792287116/MDImages/blob/master/Animation_Sequence.gif?raw=true)

       定时器的使用：

       ```c#
       Sequence timeC = DOTween.Sequence();
               timeC
                   .AppendInterval(2)
                   .AppendCallback(()=> {
                       Debug.Log("两秒");
                   });
       ```

       ---

   * 回调函数的使用

     OnComplete():在动画结束时触发

     OnUpdate():在动画播放时每一帧触发

     OnStart():在动画开始时触发

     例如：

     ```
     Tweener imageR1 = testImage.transform.DOLocalRotateQuaternion(new Quaternion(1, 1, 0.5f, 0), 0.2f)
                 .SetEase(Ease.Linear)
                 .SetLoops(5,LoopType.Incremental)
                 .OnComplete(()=> {
                     testImage.transform.rotation = new Quaternion(1,1,0.5f,0);
                 });
     ```

     ​

     [更多方法参考DoTween官网](http://dotween.demigiant.com/)
