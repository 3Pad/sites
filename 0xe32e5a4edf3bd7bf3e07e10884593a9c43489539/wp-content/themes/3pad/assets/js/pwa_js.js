self.addEventListener('install',function(e){console.log('Service worker installation calling!');});self.addEventListener('activate',function(e){console.log('Service worker activation calling!');});self.addEventListener('fetch',function(e){console.log('Service worker fetch calling!');if(!e.request.url.match(/^(http|https):\/\//i))
return;if(new URL(e.request.url).origin!==location.origin)
return;});