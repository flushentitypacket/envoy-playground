from http.server import HTTPServer, BaseHTTPRequestHandler
import asyncio


class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        print("got get")
        await asyncio.sleep(5)
        print("finished sleeping")
        self.send_response(200)
        self.end_headers()
        print("finished response")

httpd = HTTPServer(('localhost', 4443), Handler)
print("listening")
httpd.serve_forever()
