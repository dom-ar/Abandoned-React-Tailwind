    // ❗️❗️❗️❗️❗️❗️ SHORTS DONT WORK ❗️❗️❗️❗️❗️❗️
    // ❗️❗️❗️❗️❗️❗️ SHORTS DONT WORK ❗️❗️❗️❗️❗️❗️
    // ❗️❗️❗️❗️❗️❗️ SHORTS DONT WORK ❗️❗️❗️❗️❗️❗️


function isYouTubeUrl(url: string): boolean {
    try {
        // Prepend 'https://' if the URL does not contain a scheme
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }
        const parsedUrl = new URL(url);
        const isYouTube = parsedUrl.hostname === 'www.youtube.com' || parsedUrl.hostname === 'www.youtu.be';
        return isYouTube;
    }
    catch(e) {
        console.log('Error parsing URL:', e);
        return false;
    }
}



function getYouTubeId(url: string): string | null {
    try {
        // Prepend 'https://' if the URL does not contain a scheme
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname === 'www.youtube.com') {
            return parsedUrl.searchParams.get('v');
        }
        if (parsedUrl.hostname === 'www.youtu.be') {
            return parsedUrl.pathname.substring(1);
        }
        return null;
    }
    catch(e) {
        console.log('Error getting YouTube ID:', e);
        return null;
    }
}

export { isYouTubeUrl, getYouTubeId };