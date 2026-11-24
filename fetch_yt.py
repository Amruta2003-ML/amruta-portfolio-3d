import urllib.request
import re
import json

url = 'https://www.youtube.com/watch?v=_w0AQA00WEs'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

info = {}
try:
    content = urllib.request.urlopen(req).read().decode('utf-8', 'ignore')
    
    title_match = re.search(r'<title>(.*?)</title>', content)
    if title_match:
        info['title'] = title_match.group(1)

    desc_match = re.search(r'<meta name="description" content="(.*?)">', content)
    if desc_match:
        info['description'] = desc_match.group(1)

    # Search for links in the page
    links = re.findall(r'https?://[a-zA-Z0-9\.\-_/]+', content)
    interesting = [l for l in links if any(k in l for k in ['github', 'portfolio', 'vercel', 'netlify', 'drive.google', 't.me'])]
    info['links'] = list(set(interesting))

    # Also search for website link mentioned in comments or description text
    match_yt = re.findall(r'\"runs\":\[\{\"text\":\"(.*?)\"\}\]', content)
    info['snippets'] = [s for s in match_yt if len(s) > 10][:20]

    with open('yt_info.json', 'w', encoding='utf-8') as f:
        json.dump(info, f, indent=2)
    print("SAVED yt_info.json successfully!")
except Exception as e:
    print("Error:", e)
