window.addEventListener('message', function(event) {
    if (!event.data || typeof event.data !== 'string') return;
    let data;
    try { data = JSON.parse(event.data); } catch (e) {
        if (event.data.indexOf('setHeight') > -1) {
            data = { method: 'setHeight', height: event.data.split(':')[1] };
        }
    }
    if (data && data.method === 'setHeight') {
        const iframes = document.querySelectorAll('iframe[data-matomo-iframe]');
        iframes.forEach(iframe => {
            if (iframe.contentWindow === event.source) {
                iframe.style.height = (parseInt(data.height) + 20) + 'px';
            }
        });
    }
}, false);
