//  我们将某个耗时操作放在某个js文件中去执行，在主线程中使用worker实例去加载
	for (var i = 0; i < 2000000000; i++) {
		
	}
//	h1.innerText = i;

//  我们会把耗时操作后得到的数据， 通过postMesseage 方法回调回去
//  这里的postMessage(); 会调用Worker的onmessage监听事件;
	postMessage(i);
