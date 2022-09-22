const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

async function main() {
    const isDevelopmentEnvironment = process.env.NODE_ENV !== "production";
    const hostname = process.env.HOST_NAME ?? "localhost";
    const port = process.env.PORT || 3000;

    const app = next({
        dev: isDevelopmentEnvironment,
        hostname: hostname,
        port: port
    });
    
    const handle = app.getRequestHandler();
    
    await app.prepare();
    
    const server = createServer(
        async (request, response) => {
            try {
                const parsedUrl = parse(request.url, true);
    
                if(parsedUrl.pathname === "/a") {
                    await app.render(request, response, "/a", parsedUrl.query);
                }
                else if(parsedUrl.pathname === "/b") {
                    await app.render(request, response, "/b", parsedUrl.query);
                }
                else {
                    await handle(request, response, parsedUrl);
                }
            }
            catch(error) {
                console.error("Error occured handling", request.url, error);
                response.statusCode = 500;
                response.end("Internal Server Error");
            }
        }
    )
    
    server.listen(
        port,
        (error) => {
            if(error !== undefined) throw error;
    
            console.log(`> Ready on http://${hostname}:${port}`);
        }
    );

    console.log(`CustomLog: Server to start listening`);
}

main();