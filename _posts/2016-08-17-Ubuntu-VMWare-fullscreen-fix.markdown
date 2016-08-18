---
title:  "Ubuntu 16.04 VMWare: Fullscreen Fix"
date:   2016-08-17 11:06:33
categories: [virtualmachine]
tags: [VMWare, Ubuntu 16.04, fullscreen]
---

There will be many of you not interested in dual-booting Ubuntu with Windows but still need to use both. So was the case with me and I went on for the obvious solution i.e. using a Ubuntu virtual machine on a Windows host. I use **VMWare Workstation 12 player** along with a **Ubuntu 16.04 LTS** _64-bit_ virtual machine installed in it. After the install and entering the full screen mode the screen looked something like this: 

![initial screen]({{ site.baseurl }}images/posts/2016/VMWare/1initial.png)

The next thing to go about was to try and correct something in default settings so that VMWare can fit in the guest OS according to the Host OS screen resolution and settings so that when in full screen mode the guest OS leaves no void spaces around the display region. In display settings:
 _Enable:_ **Accelerate 3D Graphics**
 _Select:_ **Use host settings for monitors** like this :

![settings]({{ site.baseurl }}images/posts/2016/VMWare/2settings.png)

This must work for most of you when done **coupled with re-installing VMWare tools**. But sadly, for me it didn't work this way. The next thing that can be done is adjusting the guest OS settings beacuse in the last step adjusting the Host OS settings did not work. So launch up Ubuntu 16.04 and **All settings -> Displays -> Resolution** and set the resolution to whatever your screen/monitor resolution is and click **Apply**. The apply button will be hidden in the extreme right and you will just see a part of it.

![ubuntu settings]({{ site.baseurl }}images/posts/2016/VMWare/3ubuntusettings.png)

Now in some cases your monitor resolution isn't listed in default options on Ubuntu display settings. So the last retort is to use a script for the purpose. Following is the sccript for setting **1920 x 1080** as the resolution, which is not listed on the default resolutions list.

```shell
xrandr --newmode "1920x1080"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
xrandr --addmode Virtual1 1920x1080
xrandr --output Virtual1 --mode 1920x1080
```

For any other resolution just replace _1920x1080_ everywhere with the desired resolution, type all of the script in a new file in a text editor and save it with a **.sh** extension. Here for instance, let the final file name be **full.sh** wherein the above script is contained. Then after reaching the directory for **full.sh** in the terminal, type the following:

```shell
chmod +x full.sh
```
 followed by,

```shell
./full.sh
```
and Tada, here is the result. We have a full screen with no voids/black spaces.
![final]( {{site.baseurl }}images/posts/2016/VMWare/4final.png)

After this you can set any custom resolution to your Ubuntu as a guest OS. Congratulations!