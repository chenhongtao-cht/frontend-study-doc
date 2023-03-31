import{_ as n,c as a,o as l,N as e}from"./chunks/framework.d6f43b2b.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"study/other/linux.md","lastUpdated":null}'),s={name:"study/other/linux.md"},o=e(`<h3 id="_1-linux-服务器指令记录" tabindex="-1">1.linux 服务器指令记录 <a class="header-anchor" href="#_1-linux-服务器指令记录" aria-label="Permalink to &quot;1.linux 服务器指令记录&quot;">​</a></h3><ul><li><code>pwd</code> ---查看当前所在的目录</li><li><code>rm -f nginx-1.23.3.tar.gz</code> --- 删除单文件</li><li><code>rm -rf nginx-1.23.3/</code> --- 删除文件夹</li><li><code>echo &quot;&quot; &gt; filename</code> ---清除文件内容而不删除文件 --- 用空字符串覆盖文件</li></ul><h3 id="_2-服务器安装-nginx" tabindex="-1">2.服务器安装 nginx <a class="header-anchor" href="#_2-服务器安装-nginx" aria-label="Permalink to &quot;2.服务器安装 nginx&quot;">​</a></h3><h5 id="_2-1-下载-nginx-安装包" tabindex="-1">2.1 下载 nginx 安装包 <a class="header-anchor" href="#_2-1-下载-nginx-安装包" aria-label="Permalink to &quot;2.1 下载 nginx 安装包&quot;">​</a></h5><p>先进入到想存放的文件目录，一般是存放到/usr/local 目录下</p><ul><li><p>可以直接通过 wget 命令下载</p><p><code>wget -c https://nginx.org/download/nginx-1.23.3.tar.gz</code></p></li></ul><h5 id="_2-2-配置-nginx-安装所需的环境" tabindex="-1">2.2 配置 nginx 安装所需的环境 <a class="header-anchor" href="#_2-2-配置-nginx-安装所需的环境" aria-label="Permalink to &quot;2.2 配置 nginx 安装所需的环境&quot;">​</a></h5><ul><li><p>安装 PCRE pcre-deve</p><blockquote><p>Nginx 的 Rewrite 模块和 HTTP 核心模块会使用到 PCRE 正则表达式语法。这里需要安装两个安装包 pcre 和 pcre-devel。第一个安装包提供编译版本的库，而第二个提供开发阶段的头文件和编译项目的源代码。安装指令如下：</p></blockquote><p><code>yum install -y pcre pcre-devel</code></p></li><li><p>安装 zlib</p><blockquote><p>zlib 库提供了开发人员的压缩算法，在 Nginx 的各种模块中需要使用 gzip 压缩。安装指令如下:</p></blockquote><p><code>yum install -y zlib zlib-devel</code></p></li><li><p>安装 gcc</p><blockquote><p>安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境。安装指令如下：</p></blockquote><p><code>yum install gcc-c++</code></p></li><li><p>安装 Open SSL</p><blockquote><p>nginx 不仅支持 http 协议，还支持 https（即在 ssl 协议上传输 http），如果使用了 https，需要安装 OpenSSL 库。安装指令如下:</p></blockquote><p><code>yum install -y openssl openssl-devel</code></p></li></ul><h5 id="_2-3-解压-nginx-压缩包" tabindex="-1">2.3 解压 nginx 压缩包 <a class="header-anchor" href="#_2-3-解压-nginx-压缩包" aria-label="Permalink to &quot;2.3 解压 nginx 压缩包&quot;">​</a></h5><ul><li><p>解压压缩包指令：</p><p><code>tar -zxvf nginx-1.23.3.tar.gz</code></p></li><li><p>解压之后进入解压后的文件</p><p><code>cd nginx-1.23.3</code></p></li><li><p>然后需要进行配置</p><p><code>./configure</code></p></li></ul><blockquote><p>如果你需要使用 https 支持，则需要加上 SLL 模块，否则会出现如下报错 <code>nginx: [emerg] the &quot;ssl&quot; parameter requires ngx_http_ssl_module in /usr/local/nginx/conf/nginx.conf:37</code></p></blockquote><blockquote><p>配置指令 <code>./configure --with-http_ssl_module</code></p></blockquote><h5 id="_2-4-编译安装-nginx" tabindex="-1">2.4 编译安装 nginx <a class="header-anchor" href="#_2-4-编译安装-nginx" aria-label="Permalink to &quot;2.4 编译安装 nginx&quot;">​</a></h5><ul><li><p>依次执行</p><p><code>make</code><code>make install</code></p></li><li><p>安装成功后，返回上级目录，然后进入新的 nginx 目录</p><p>cd .. ls cd nginx ls</p></li></ul><h5 id="_2-5-启动-nginx" tabindex="-1">2.5 启动 nginx <a class="header-anchor" href="#_2-5-启动-nginx" aria-label="Permalink to &quot;2.5 启动 nginx&quot;">​</a></h5><ul><li><p>进入 nginx 下的 sbin 目录，输入./nginx 即可启动 nginx</p><p><code>./nginx</code></p></li><li><p>关闭 nginx 服务</p><p><code>./nginx -s stop</code></p></li><li><p>重启 nginx</p><p><code>./nginx -s reload</code></p></li><li><p>查看 nginx 进程</p><p><code>ps aux|grep nginx</code></p></li><li><p>在浏览器输入 IP,可看见 Welcome to nginx!即安装成功</p><blockquote><p>Welcome to nginx!</p></blockquote></li></ul><h5 id="_2-6-nginx-开启-gzip-压缩" tabindex="-1">2.6 nginx 开启 gzip 压缩 <a class="header-anchor" href="#_2-6-nginx-开启-gzip-压缩" aria-label="Permalink to &quot;2.6 nginx 开启 gzip 压缩&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#开启gzip功能</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#开启gzip静态压缩功能</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_static on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#gzip缓存大小</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_buffers 4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#gzip http版本</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#gzip 压缩级别 1-10</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_comp_level 5;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#gzip 压缩类型</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否在http header中添加Vary: Accept-Encoding，建议开启</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-服务器安装-nodejs" tabindex="-1">3.服务器安装 nodejs <a class="header-anchor" href="#_3-服务器安装-nodejs" aria-label="Permalink to &quot;3.服务器安装 nodejs&quot;">​</a></h3><h5 id="_3-1-下载-nodejs" tabindex="-1">3.1 下载 nodejs <a class="header-anchor" href="#_3-1-下载-nodejs" aria-label="Permalink to &quot;3.1 下载 nodejs&quot;">​</a></h5><blockquote><p>版本过高有可能会导致缺少文件</p></blockquote><p><code>wget https://nodejs.org/download/release/v16.15.0/node-v16.15.0-linux-x64.tar.x</code></p><h5 id="_3-2-解压" tabindex="-1">3.2 解压 <a class="header-anchor" href="#_3-2-解压" aria-label="Permalink to &quot;3.2 解压&quot;">​</a></h5><p><code>tar xvf node-v16.15.0-linux-x64.tar.xz</code></p><h5 id="_3-3-验证是否安装成功" tabindex="-1">3.3 验证是否安装成功 <a class="header-anchor" href="#_3-3-验证是否安装成功" aria-label="Permalink to &quot;3.3 验证是否安装成功&quot;">​</a></h5><ul><li>进入 /node-v16.15.0-linux-x64/bin/ 输入 <code>./node -v</code> 如果安装成功则会显示 v16.15.0</li></ul><h5 id="_3-4-配置环境变量" tabindex="-1">3.4 配置环境变量 <a class="header-anchor" href="#_3-4-配置环境变量" aria-label="Permalink to &quot;3.4 配置环境变量&quot;">​</a></h5><ul><li><p>建立软连接，使其可以在全局被访问到：</p><p>ln -s （自己存放 nodejs 的路径）+ nodejs/bin/node /usr/local/bin/ ln -s （自己存放 nodejs 的路径）+ nodejs/bin/npm /usr/local/bin/</p><p>例如： ln -s /usr/local/nodejs/bin/node /usr/local/bin/ ln -s /usr/local/nodejs/bin/npm /usr/local/bin/</p></li></ul><h5 id="_3-5-检查是否配置成功" tabindex="-1">3.5 检查是否配置成功 <a class="header-anchor" href="#_3-5-检查是否配置成功" aria-label="Permalink to &quot;3.5 检查是否配置成功&quot;">​</a></h5><ul><li>退出到根目录 输入 <code>node -v</code> 和 <code>npm -v</code> 验证</li></ul><h3 id="_4-访问静态资源" tabindex="-1">4.访问静态资源 <a class="header-anchor" href="#_4-访问静态资源" aria-label="Permalink to &quot;4.访问静态资源&quot;">​</a></h3><blockquote><p>前提就是先装 nginx</p></blockquote><h5 id="_4-1-方法一-root-配置" tabindex="-1">4.1 方法一 (root 配置) <a class="header-anchor" href="#_4-1-方法一-root-配置" aria-label="Permalink to &quot;4.1 方法一 (root 配置)&quot;">​</a></h5><p>在 nginx.conf 中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location /images {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root   /usr/local/nginx/static;</span></span>
<span class="line"><span style="color:#A6ACCD;">    autoindex on;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>在浏览器的访问地址为 <code>localhost/images</code> -&gt; <code>/usr/local/nginx/static/images/</code></li></ul><h5 id="_4-2-方法二-alias-配置" tabindex="-1">4.2 方法二 (alias 配置) <a class="header-anchor" href="#_4-2-方法二-alias-配置" aria-label="Permalink to &quot;4.2 方法二 (alias 配置)&quot;">​</a></h5><p>在 nginx.conf 中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location /images {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias   static/images;</span></span>
<span class="line"><span style="color:#A6ACCD;">    autoindex on;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>在浏览器的访问地址为 <code>localhost/images</code> -&gt; <code>/usr/local/nginx/static/images/</code></li></ul><h5 id="_4-3-两者的区别" tabindex="-1">4.3 两者的区别 <a class="header-anchor" href="#_4-3-两者的区别" aria-label="Permalink to &quot;4.3 两者的区别&quot;">​</a></h5><ul><li>root 的处理结果：root 路径＋ location 路径</li><li>alias 的处理结果：使用 alias 路径替换 location 路径</li></ul>`,42),i=[o];function p(t,c,r,d,u,h){return l(),a("div",null,i)}const _=n(s,[["render",p]]);export{x as __pageData,_ as default};
