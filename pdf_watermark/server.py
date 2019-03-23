from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from waterMark import waterMark
import os 

data = {'path': ''}
host = ('0.0.0.0', 8888)
count = 0
class Resquest(BaseHTTPRequestHandler):
    def do_GET(self):
        global count
        count = count + 1
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        curpath = os.path.abspath('.')
        waterString = "wujingwei" + str(count)
        inputpath = curpath + "/static/wujingwei_resume.pdf" 
        outpath = curpath + "/static/document-output" + str(count) + ".pdf"
        outfilename = "document-output"+ str(count) +".pdf"
        waterMark(waterString, inputpath, outpath)
        data = {'path': outfilename}
        self.wfile.write(json.dumps(data).encode())
        

if __name__ == '__main__':
    server = HTTPServer(host, Resquest)
    print("Starting server, listen at: %s:%s" % host)
    server.serve_forever()