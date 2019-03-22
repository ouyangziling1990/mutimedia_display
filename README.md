### 多媒体文件预览
1. mp3格式
2. mp4格式
3. pdf格式加水印
4. word格式
5. excel格式
#### pdf格式加水印
- 配置python后台

python版本： python3.7.1
- pip install reportlab 
- pip install pypdf2

#### webserver配置
- 配置静态文件服务器  cd pdf_watermark/static python -m http.server 8899
- 开启server cd pdf_watermark python ./server.py, 请求执行后将生成的pdf放置的静态服务器目录中，并将地址返回。