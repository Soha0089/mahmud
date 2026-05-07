export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = "https://mahmud-global-apihub-cgxr.onrender.com";  
    const targetUrl = target + url.pathname + url.search;  

    const response = await fetch(targetUrl, {  
      method: request.method,  
      headers: request.headers,  
      body: request.method === "GET" ? null : request.body  
    });  

    return response;
  }
};
