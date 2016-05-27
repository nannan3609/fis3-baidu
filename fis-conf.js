
// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 开启simple插件
fis.config.set('modules.postpackager', 'simple');
//开启csssprites插件
fis.config.set('modules.spriter','csssprites');
// JS设置打包规则
fis.config.set('pack', {
    '/pkg/lib.js': [
        'scripts/js/baidu.js',
        'scripts/js/newsbaidu.js',
    ],
     // CSS打包规则，CSS打包的同时会进行图片合并
      '/pkg/aio.css': 'styles/**.css'
 });
fis.match('scripts/*.js', {
    // fis-optimizer-uglify-js 插件进行压缩
    optimizer: fis.plugin('uglify-js')
});

fis.match('styles/*.css', {
    // fis-optimizer-clean-css 插件进行压缩
    optimizer: fis.plugin('clean-css')
});
fis.match('images/*.png', {
    // fis-optimizer-png-compressor 插件进行压缩
    optimizer: fis.plugin('png-compressor')
});
//启动fis-spriter-csssprites插件
fis.match('::package',{
    spriter:fis.plugin('csssprites')
});
//对css进行图片合并
fis.match('*.css',{
    useSprite:true
    //给匹配到的文件分配属性'useSprite'
});
fis.match('scripts/js/*.js',{
   release:'/pkg/lib.js'
});
fis.match('*.css',{
   release:'/pkg/aio.css'
});
//将html中的引用都改为合并后的
fis.match('*.{js,css,png}',{
   useHash:true
});
//加上MD5戳
//// 开启simple对零散资源的自动合并
 fis.config.set('settings.postpackager.simple.autoCombine', true);