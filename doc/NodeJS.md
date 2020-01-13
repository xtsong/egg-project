## 概览

Node.js允许通过JavaScript和一系列模块来编写服务器端应用和网络相关的应用。核心模块包括文件系统I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL等）、二进制数据流、加密算法、数据流等等。Node模块的API形式简单，降低了编程的复杂度。

使用框架可以加速开发。常用的框架有Express.js、Socket.IO和Connect等。Node.js的程序可以在Microsoft Windows、Linux、Unix、Mac OS X等服务器上运行。Node.js也可以使用CoffeeScript（一种旨在简化JavaScript的替代语言，其代码可按照一定规则转化为合法的JavaScript代码）、TypeScript（微软开发的强化了数据类型的JavaScript变体）、Dart语言，以及其他能够编译成JavaScript的语言编程。

Node.js主要用于编写像Web服务器一样的网络应用，这和PHP和Python是类似的。但是Node.js与其他语言最大的不同之处在于，PHP等语言是阻塞的（只有前一条命令执行完毕才会执行后面的命令），而Node.js是非阻塞的（多条命令可以同时被运行，通过回调函数得知命令已结束运行）。

Node.js是事件驱动的。开发者可以在不使用线程的情况下开发出一个能够承载高并发的服务器。其他服务器端语言难以开发高并发应用，而且即使开发出来，性能也不尽如人意。Node.js正是在这个前提下被创造出来。Node.js把JavaScript的易学易用和Unix网络编程的强大结合到了一起。

Node.js使用Google V8 JavaScript引擎，因为：

V8是基于BSD许可证的开源软件
V8速度非常快
V8专注于网络功能，在HTTP、DNS、TCP等方面更加成熟
Node.js已经有数十万模块，它们可以通过一个名为npm的管理器免费下载。Node.js开发社区主要有两个邮件列表、一个在freenode的名为#node.js的IRC频道。社区集中在NodeConf。


## 历史

Node.js于2009年写成，其原始作者是瑞安·达尔（Ryan Dahl）。Node.js结合了Google的V8、事件驱动模式和低级I/O接口，其设计灵感源自Flickr的一款上传进度栏：在上传过程中，浏览器并不清楚有多少文件已经发送到服务器，除非向服务器进行查询，于是达尔想出了一个更简便的方法。Node.js的开发和维护工作由达尔本人主持，而他所在的Joyent公司也提供了赞助。2009年11月8日，Dahl在欧洲JSConf大会上展示了Node.js项目，并受到了观众赞赏。在演讲中，达尔针对Apache HTTP Server和顺序编程方式提出了批评，认为Apache处理大量并发连接（10,000甚至更多）的可能性有限，而且顺序编程方式在多连接情况下会造成阻塞，或者消耗更多资源；而Node.js提供了基于事件驱动和非阻塞的接口，可用于编写高并发状态下的程序，而且JavaScript的匿名函数、闭包、回调函数等特性就是为事件驱动而设计的。

2010年1月，一款名为“npm”的软件包管理系统诞生。npm使程序员能够更方便地发布和分享Node.js类库及源代码，而且简化了类库安装、升级与卸载的过程。Node.js最初只支持Linux和Mac OS X操作系统。2011年6月，微软和Joyent共同合作，把Node.js移植到了Windows系统上面，并且在7月发布了第一个正式支持Windows系统的版本。

2012年1月，达尔离开了Node.js项目，开发工作由他的同事以及npm创始人艾萨克·施吕特（Isaac Schlueter）继续主持。2014年2月，蒂莫西·费里斯（Timothy J. Fontaine）接任项目主管。

由于长期对Joyent的管理感到不满，Node.js核心开发者Fedor Indutny在2014年12月制作了分支版本，并起名“io.js”。与Node.js相对的是，io.js采用开放管理模式进行管理，并计划始终采用最新版的V8引擎。为了在用户、厂商和开发者之间获取平衡，Node.js基金会于2015年初成立。基金会得到了IBM、Intel、微软、Joyent等公司的支持。6月，Node.js和io.js开发者社区共同决定合并到Node.js基金会之下。同年9月，Node 4.0发布，Node.js和io.js正式合并。4.0版引入了ES6的语言特性和“长期支持版本”的发布周期。到了2016年，io.js宣布不再发布新版本，并建议开发者换回Node.js。


## 技术

# 线程
Node.js以单线程运行，使用非阻塞I/O调用，这样既可以支持数以万计的并发连线，又不会因多线程本身的特点而带来麻烦。众多请求只使用单线程的设计意味着可以用于创建高并发应用程序。Node.js应用程序的设计目标是任何需要操作I/O的函数都使用回调函数。
这种设计的缺点是，如果不使用cluster、StrongLoop Process Manager或pm2等模块，Node.js就难以处理多核或多线程等情况。

# V8
V8是为Google Chrome设计的JavaScript运行引擎，Google于2008年将其开源。V8用C++写成，它将JavaScript源代码编译成本地机器码而不是解释执行。
Node.js用libuv来处理异步事件，而V8提供了JavaScript的实时运行环境。libuv是一个网络和文件系统功能的抽象层，既可以用于Windows又可以用于符合POSIX标准的系统，例如Linux、OS X和Unix。
Node.js的核心功能被包含进一个JavaScript库，并通过C++将各部分与操作系统进行联系。

# npm
npm是Node.js附带的包管理器。npm是一个命令行工具，用于从NPM Registry中下载、安装Node.js程序，同时解决依赖问题。npm提高了开发的速度，因为它能够负责第三方Node.js程序的安装与管理。

# 统一API
Node.js将浏览器、数据（例如MongoDB或CouchDB）等组合到一起，通过JSON提供一个统一的接口。由于前端框架和一些基本的后端开发技术（如MVC、MVP、MVVM等）变得流行，Node.js也支持客户端和服务器端重新利用相同的模型和接口。

# 事件循环
Node.js将其注册到操作系统中，这样可以及时注意到新连接的产生。当新连接产生时，操作系统会产生一个回调。在Node.js运行时内部，每个连接都被分配一个小型的堆。与其他服务器程序不同的是，Node.js不使用进程或线程处理连接，而是采用事件循环来处理并发连接。而且Node.js的事件循环不需要手动调用。在回调函数定义之后，服务器进入事件循环。当回调函数均被执行完毕之后，Node.js结束事件循环。