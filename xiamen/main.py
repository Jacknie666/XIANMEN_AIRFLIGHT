import requests
import json
import execjs

headers_tokens = {
    'Accept': 'application/json',
    'Accept-Language': 'zh-PH',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # 'Content-Length': '0',
    'Market-Country-Code': 'PH',
    'Origin': 'https://int-et.xiamenair.com',
    'Referer': 'https://int-et.xiamenair.com/flights/results',
    'Sales-Channel': 'IBE',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
tokens = requests.post('https://int-et.xiamenair.com/tRetailAPISolution/sso/userToken', headers=headers_tokens).json()['token']
print('刷新token:',tokens)

with open('xiamen.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
result = ctx.call('c')
print('加密参数：',result)

headers = {
    'Accept': 'application/json',
    'Accept-Language': 'zh-PH',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Crypto-Chars': result['Crypto-Chars'],
    'Crypto-Random': result['Crypto-Random'],
    'Device-Id': result['Device-Id'],
    'Market-Country-Code': 'PH',
    'Origin': 'https://int-et.xiamenair.com',
    'Referer': 'https://int-et.xiamenair.com/flights/results',
    'Sales-Channel': 'IBE',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
    'User-Token': tokens,
    'X-Tingyun': result['X-Tingyun'],
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
json_data = {
    'bounds': [
        {
            'departureDate': '2025-08-16',
            'destination': {
                'code': 'SIN',
                'context': 'IATA',
            },
            'origin': {
                'code': 'XMN',
                'context': 'IATA',
            },
            'daysAfter': 5,
            'daysBefore': 5,
        },
    ],
    'cabinClass': 'ANY',
    'currencyCode': 'PHP',
    'passengerCounts': [
        {
            'count': 1,
            'passengerType': 'ADT',
        },
    ],
}
response = requests.post(
    'https://int-et.xiamenair.com/tRetailAPISolution/flight/calendar',
    headers=headers,
    json=json_data,
)
print("响应：",response.json())
