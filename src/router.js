/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Body, printDebug, view} from './main.js';

let routes = [];
let urlParams = [];
let currentRoute;

export function router(appRoutes, debugLog) {
    if (!appRoutes || !Array.isArray(appRoutes) || appRoutes.length === 0) {
        console.error('[javascript-ui] [router] Invalid or empty routes were provided!', appRoutes);
        return false;
    }
    for (let r in appRoutes) {
        if (!appRoutes[r].url) {
            console.error('[javascript-ui] [router] Path was not provided for route!', appRoutes[r]);
            return false;
        }
        if (!appRoutes[r].view) {
            console.error('[javascript-ui] [router] View was not provided for route!', appRoutes[r]);
        }
        if (!appRoutes[r].name) {
            console.warn(`[javascript-ui] [router] You have not provided a name for '${appRoutes[r].url}' route. You will not be able to reference this route other places in your code.`);
        }
    }
    routes = appRoutes;
    window.addEventListener('popstate', evaluateURL);
    evaluateURL();
    setTimeout(function () {
        if (debugLog === true) {
            printDebug();
        }
    }, 500);
    return new Body();
}

export function routeTo(name) {
    for (let route in routes) {
        if (routes[route].name === name) {
            goTo(routes[route]);
        }
    }
    return false;
}

export function route(name) {
    for (let route in routes) {
        if (routes[route].name === name) {
            return routes[route].url;
        }
    }
    return false;
}


function evaluateURL() {
    let found = false;
    for (let route in routes) {
        if (routes[route].url === window.location.pathname) {
            found = true;
            goTo(routes[route]);
        }
    }
    if (found === false) {
        goTo(routes[0]);
    }
    getParams();
}

function activateRoutes() {
    document.querySelectorAll('a').forEach((link) => {
        if (link.getAttribute('route')) {
            link.setAttribute('href', route(link.getAttribute('route')));
            link.removeAttribute('route');
        }
        link.onclick = (e) => {
            e.preventDefault();
            let found = false;
            for (let route in routes) {
                let href = link.getAttribute('href');
                if (href === routes[route].url) {
                    found = true;
                    goTo(routes[route]);
                    break;
                }
            }
            if (found === false) {
                window.open(link.href, '_blank');
            }
        };
    });
}

function goTo(route) {
    if (route !== currentRoute) {
        if (route.url) {
            history.pushState(null, null, route.url);
        }
        if (route.view) {
            view(route.view);
        }
        if (route.title) {
            document.title = route.title;
        }
        currentRoute = route;
        activateRoutes();
    }
}

export function get(key) {
    if (Object.keys(urlParams).includes(key)) {
        return urlParams[key];
    }
    return false;
}

function getParams() {
    let url = window.location.pathname;
    if (url.includes('?')) {
        if (typeof URL !== 'undefined') {
            let urlObject = new URL(url);
            urlObject.searchParams.forEach(function (value, key) {
                urlParams[key] = value;
            });
        } else {
            if (url.includes('&')) {
                let kvs = window.location.pathname.split('?')[1].split('&');
                kvs.forEach(function (kv) {
                    const param = kv.split('=');
                    const key = decodeURIComponent(param[0]);
                    urlParams[key] = decodeURIComponent(param[1]);
                });
            } else {
                let kv = window.location.pathname.split('?')[1];
                const param = kv.split('=');
                const key = decodeURIComponent(param[0]);
                urlParams[key] = decodeURIComponent(param[1]);
            }
        }
    }
}
